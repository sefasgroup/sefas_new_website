import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { ROOT, git, readJson, textFiles, tokenRe, urlOf } from "./image-files.mjs";

const apply = process.argv.includes("--apply");
const map = readJson("scripts/image-rename-map.json");

const DYNAMIC = [
  {
    file: "app/_configs/pages.ts",
    from: "`/images/services/${slug}.jpg`",
    to: "`/images/services/img-${slug}.jpg`",
  },
  {
    file: "app/_shell/Splash.tsx",
    from: "`/images/brand/splash/${l}.webp`",
    to: "`/images/brand/splash/img-splash-letter-${l}.webp`",
  },
];

const fail = (msg) => {
  console.error(`rename-images: ${msg}`);
  process.exit(1);
};

const alreadyMoved = (row) => !existsSync(join(ROOT, row.from)) && existsSync(join(ROOT, row.to));
const pending = map.filter((row) => !alreadyMoved(row));

const targets = new Set();
for (const row of map) {
  if (targets.has(row.to)) fail(`duplicate target ${row.to}`);
  targets.add(row.to);
  if (!alreadyMoved(row) && !existsSync(join(ROOT, row.from))) fail(`missing source ${row.from}`);
  if (!alreadyMoved(row) && existsSync(join(ROOT, row.to))) fail(`target already exists ${row.to}`);
}

const files = textFiles();
const sources = new Map(files.map((f) => [f, readFileSync(join(ROOT, f), "utf8")]));
const counts = new Map();
const next = new Map(sources);

for (const row of pending) {
  const re = tokenRe(urlOf(row.from));
  let total = 0;
  for (const [file, text] of next) {
    const hits = text.match(re)?.length ?? 0;
    if (hits) {
      total += hits;
      next.set(file, text.replace(re, urlOf(row.to)));
    }
  }
  counts.set(row.from, total);
  if (total !== row.refs) fail(`${row.from}: expected ${row.refs} references, found ${total}`);
}

let dynamicEdits = 0;
for (const d of DYNAMIC) {
  const text = next.get(d.file);
  if (text === undefined) fail(`dynamic template file missing ${d.file}`);
  if (text.includes(d.from)) {
    next.set(d.file, text.replace(d.from, d.to));
    dynamicEdits += 1;
  } else if (!text.includes(d.to)) fail(`dynamic template not found in ${d.file}`);
}

const changed = [...next].filter(([f, t]) => t !== sources.get(f));
const refTotal = [...counts.values()].reduce((a, b) => a + b, 0);
console.log(
  `${apply ? "apply" : "dry-run"}: ${pending.length} files to move, ${refTotal} references in ${changed.length} files (including ${dynamicEdits} dynamic templates)`,
);

if (!apply) process.exit(0);

for (const row of pending) {
  mkdirSync(dirname(join(ROOT, row.to)), { recursive: true });
  git("mv", row.from, row.to);
}
for (const [file, text] of changed) writeFileSync(join(ROOT, file), text);
