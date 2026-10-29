#!/usr/bin/env bash
# Copies the vendor repository (sefasgroup/sefas-landing) into this repository.
# Only files tracked by git in the vendor repo are copied, so .env, node_modules
# and .next never come along. Files deleted upstream are deleted here too.
#
# Usage (Git Bash, from this folder):
#   bash sync-vendor.sh [ref] [vendor-path]
#   ref          vendor branch, tag or commit (default: main)
#   vendor-path  local clone of the vendor repo (default: ../sefas-landing)
set -euo pipefail

REF="${1:-main}"
VENDOR="${2:-../sefas-landing}"
HERE="$(cd "$(dirname "$0")" && pwd)"

# Files owned by this repo; everything else mirrors the vendor repo.
KEEP=(
  ".github/workflows/cpanel-package.yml"
  "DEPLOY-CPANEL.md"
  "sync-vendor.sh"
)

cd "$HERE"
if [ -n "$(git status --porcelain)" ]; then
  echo "This repo has uncommitted changes. Commit or discard them first." >&2
  exit 1
fi

git -C "$VENDOR" fetch --quiet origin
COMMIT="$(git -C "$VENDOR" rev-parse --verify "origin/$REF" 2>/dev/null || git -C "$VENDOR" rev-parse --verify "$REF")"
SHORT="$(git -C "$VENDOR" rev-parse --short "$COMMIT")"
echo "Syncing vendor $REF ($SHORT)"

git rm -rq --ignore-unmatch .
git checkout HEAD -- "${KEEP[@]}"
git -C "$VENDOR" archive "$COMMIT" | tar -x -f - -C "$HERE"
for f in "${KEEP[@]}"; do
  if git -C "$VENDOR" cat-file -e "$COMMIT:$f" 2>/dev/null; then
    echo "Warning: the vendor repo also has $f; this repo's copy was kept." >&2
  fi
done
git checkout HEAD -- "${KEEP[@]}"
printf 'ref: %s\ncommit: %s\n' "$REF" "$COMMIT" > VENDOR_COMMIT.txt
git add -A

if git diff --cached --quiet; then
  echo "Already up to date with vendor $SHORT."
  exit 0
fi
git commit --quiet -m "Sync vendor $REF ($SHORT)"
echo "Committed. Review with 'git show --stat', then 'git push'."
