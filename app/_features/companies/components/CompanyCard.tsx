"use client";

import Image from "next/image";
import { useUi } from "@/app/_i18n/client";
import { ActionButton, Button } from "../../../_ui/Button";
import { GlassDialog } from "../../../_ui/GlassDialog";

type Site = { city: string; kind: string };

export function CompanyCard({
  name,
  since,
  focus,
  body,
  website,
  logo,
  sites,
}: {
  name: string;
  since: string;
  focus: string;
  body: string;
  website?: string;
  logo?: string;
  sites: Site[];
}) {
  const t = useUi();
  return (
    <GlassDialog
      label={name}
      trigger={(open) => (
        <div className="group border-border-default hover:bg-surface-raised relative flex h-full min-h-80 w-full flex-col items-center rounded-sm border px-8 pt-14 pb-10 text-center transition-colors duration-300">
          <span className="relative h-16 w-48">
            {logo && <Image src={logo} alt={t.companies.logo(name)} fill sizes="192px" className="object-contain" />}
          </span>
          <span className="mt-10 text-lg font-medium tracking-tight">{name}</span>
          <span className="text-text-secondary mt-2 max-w-64 text-sm leading-relaxed">{focus}</span>
          <span className="mt-auto pt-10">
            <ActionButton
              onClick={open}
              variant="outline"
              size="sm"
              aria-label={t.common.readMoreAbout(name)}
              className="after:absolute after:inset-0 after:content-['']"
            >
              {t.common.readMore}
            </ActionButton>
          </span>
        </div>
      )}
    >
      <div className="px-6 pt-10 pb-8 md:px-10 md:pb-10">
        <div className="relative h-14 w-44">
          {logo && <Image src={logo} alt="" fill sizes="176px" className="object-contain object-left" />}
        </div>
        <p className="label-mono text-text-muted mt-10">{t.companies.since(since)}</p>
        <h3 className="mt-3 text-3xl leading-tight font-medium tracking-tighter md:text-4xl">{name}</h3>
        <p className="label-mono text-text-muted mt-3">{focus}</p>
        <p className="text-text-secondary mt-6 leading-relaxed">{body}</p>
        {website && (
          <Button href={website} target="_blank" rel="noopener noreferrer" className="mt-8">
            {t.companies.visitWebsite}
          </Button>
        )}

        {sites.length > 0 && (
          <>
            <p className="label-mono text-text-muted mt-10">{t.companies.sites}</p>
            <ul className="divide-text-primary/10 border-text-primary/10 mt-4 divide-y border-y">
              {sites.map((s) => (
                <li key={s.city} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-medium tracking-tight">{s.city}</span>
                  <span className="text-text-secondary text-sm">{s.kind}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </GlassDialog>
  );
}
