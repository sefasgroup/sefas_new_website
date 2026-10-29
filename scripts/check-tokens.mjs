import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const EXCLUDED = new Set(["styles/brand.css", "styles/theme.css", "app/_components/Icons.tsx", "app/_server/brand-colours.ts"]);
const RAW = /#[0-9a-fA-F]{3,8}\b|\b(?:rgba?|hsla?|oklch)\(|\[[0-9.]+px\]/;

const files = execSync("git ls-files 'app/*.ts' 'app/*.tsx' 'styles/*.css'", { encoding: "utf8" })
  .split("\n")
  .filter((file) => file && !EXCLUDED.has(file));

const hits = [];
for (const file of files) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, index) => {
      if (RAW.test(line)) hits.push(`${file}:${index + 1}: ${line.trim()}`);
    });
}

const brandCss = readFileSync("styles/brand.css", "utf8");
const brandTs = readFileSync("app/_server/brand-colours.ts", "utf8");
for (const name of ["surface", "ink", "accent"]) {
  const css = new RegExp(`--brand-${name}:\\s*(#[0-9a-f]{6})`, "i").exec(brandCss)?.[1].toLowerCase();
  const ts = new RegExp(`${name}:\\s*"(#[0-9a-f]{6})"`, "i").exec(brandTs)?.[1].toLowerCase();
  if (!css || css !== ts) hits.push(`app/_server/brand-colours.ts: ${name} (${ts}) differs from --brand-${name} in styles/brand.css (${css})`);
}

if (hits.length) {
  console.error(`Hardcoded colour or size, use a token from styles/theme.css:\n${hits.join("\n")}`);
  process.exit(1);
}
