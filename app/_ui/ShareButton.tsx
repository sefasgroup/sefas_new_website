"use client";

import { useState } from "react";
import { useUi } from "@/app/_i18n/client";

export function ShareButton() {
  const t = useUi().blog;
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="label-mono border-border-strong hover:bg-text-primary hover:text-surface-base inline-flex cursor-pointer items-center gap-2 rounded-sm border px-3 py-2 transition-colors"
    >
      <svg viewBox="0 0 16 16" aria-hidden className="size-3.5">
        <path
          d="M6.5 9.5 9.5 6.5M7 4.5l1.2-1.2a2.5 2.5 0 0 1 3.5 3.5L10.5 8M9 11.5l-1.2 1.2a2.5 2.5 0 0 1-3.5-3.5L5.5 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      {copied ? t.copied : t.share}
    </button>
  );
}
