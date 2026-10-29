"use client";

import { ActionButton } from "@/app/_ui/Button";
import { Heading } from "@/app/_ui/Heading";
import { useLang } from "@/app/_i18n/LangProvider";
import { statusPages } from "@/app/_i18n/status-pages";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  const t = statusPages(useLang()).error;
  return (
    <main id="main" className="bg-text-primary text-surface-base flex min-h-svh items-end">
      <div className="container-page pt-40 pb-16 md:pb-24">
        <Heading as="h1" light={t.title} className="max-w-4xl md:text-7xl" />
        <p className="mt-6 max-w-md leading-relaxed opacity-70">{t.body}</p>
        <ActionButton onClick={reset} className="mt-10">
          {t.retry}
        </ActionButton>
      </div>
    </main>
  );
}
