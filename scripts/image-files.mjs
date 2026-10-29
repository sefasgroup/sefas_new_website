import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export const ROOT = join(import.meta.dirname, "..");
export const IMAGE_EXT = /\.(jpe?g|png|webp|avif|svg|gif)$/i;
const TEXT_EXT = /\.(tsx?|mjs|cjs|js|jsx|css|md|json|ya?ml|txt|html|xml)$/i;
const SKIP = /^(docs\/|public\/vendor\/|pnpm-lock\.yaml$|scripts\/image-(rename-map|allow|redirects)\.json$|scripts\/(check-image-names|rename-images|image-files)\.mjs$)/;

export const readJson = (rel) => JSON.parse(readFileSync(join(ROOT, rel), "utf8"));

const git = (...args) => execFileSync("git", args, { cwd: ROOT, encoding: "utf8", maxBuffer: 1 << 28 });

export const trackedFiles = () =>
  git("ls-files", "-z", "--cached", "--others", "--exclude-standard")
    .split("\0")
    .filter((f) => f && existsSync(join(ROOT, f)));

export const textFiles = () => trackedFiles().filter((f) => TEXT_EXT.test(f) && !SKIP.test(f));

export const publicImages = () =>
  trackedFiles().filter((f) => /^public\/(images|videos)\//.test(f) && IMAGE_EXT.test(f));

export const urlOf = (publicPath) => publicPath.replace(/^public/, "");
export const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
export const tokenRe = (url) => new RegExp(`${escapeRe(url)}(?![A-Za-z0-9_-])`, "g");
export { git };
