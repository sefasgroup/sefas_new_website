import { existsSync, readFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { ROOT, publicImages, readJson, textFiles, tokenRe, urlOf } from "./image-files.mjs";

const modes = new Set(process.argv.slice(2).map((a) => a.replace(/^--/, "")));
const all = modes.size === 0;
const want = (m) => all || modes.has(m);

const NAME = /^img-[a-z0-9]+(-[a-z0-9]+)*\.(jpg|png|webp|avif|svg|gif)$/;
const BANNED = /(^|-)(hd|copy|final|new|old|tmp|2x|720|1080|2k|4k)(-|\.|$)/;
const DYNAMIC_FAMILIES = ["public/images/services/", "public/images/brand/splash/"];
const URL_TOKEN = /\/(?:images|videos)\/[A-Za-z0-9_./-]+\.(?:jpe?g|png|webp|avif|svg|gif)(?![A-Za-z0-9_-])/gi;

const allow = readJson("scripts/image-allow.json");
const today = new Date().toISOString().slice(0, 10);
const errors = [];
const allowed = new Set();
for (const entry of allow) {
  if (entry.expires && entry.expires < today) errors.push(`allow-list entry expired ${entry.expires}: ${entry.path}`);
  allowed.add(entry.path);
}

const images = publicImages();
const files = textFiles();
const texts = files.map((f) => [f, readFileSync(join(ROOT, f), "utf8")]);

if (want("names")) {
  const seen = new Map();
  const stems = new Map();
  for (const file of images) {
    if (allowed.has(file)) continue;
    const name = basename(file);
    if (!NAME.test(name) || name.length > 48) errors.push(`name rule: ${file}`);
    else if (BANNED.test(name.replace(/^img-/, ""))) errors.push(`banned token: ${file}`);
    if (seen.has(name)) errors.push(`duplicate basename ${name}: ${file} and ${seen.get(name)}`);
    seen.set(name, file);
    const stem = `${dirname(file)}/${name.replace(/\.[a-z0-9]+$/, "")}`;
    if (stems.has(stem)) errors.push(`two extensions for one asset: ${file} and ${stems.get(stem)}`);
    stems.set(stem, file);
  }
}

if (want("old")) {
  for (const row of readJson("scripts/image-rename-map.json")) {
    const re = tokenRe(urlOf(row.from));
    for (const [file, text] of texts) if (re.test(text)) errors.push(`old name ${row.from} still in ${file}`);
    re.lastIndex = 0;
    if (existsSync(join(ROOT, row.from))) errors.push(`old file still on disk: ${row.from}`);
  }
}

if (want("refs")) {
  const referenced = new Set();
  for (const [file, text] of texts) {
    for (const token of text.match(URL_TOKEN) ?? []) {
      const path = `public${token}`;
      referenced.add(path);
      if (!existsSync(join(ROOT, path))) errors.push(`missing file ${token} referenced in ${file}`);
    }
  }
  for (const file of images) {
    if (referenced.has(file) || allowed.has(file) || DYNAMIC_FAMILIES.some((p) => file.startsWith(p))) continue;
    errors.push(`dead asset (referenced nowhere, not on allow list): ${file}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`check-image-names: ${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`check-image-names: ok (${images.length} images, ${allowed.size} allow-listed)`);
