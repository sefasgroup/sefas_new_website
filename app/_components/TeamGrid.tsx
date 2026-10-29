"use client";

import Image from "next/image";
import { useContent } from "@/app/_content/client";
import { useUi } from "@/app/_i18n/client";
import { GlassDialog } from "../_ui/GlassDialog";

export function TeamGrid() {
  const { aboutPage } = useContent().pages;
  const t = useUi();
  return (
    <ul className="mx-auto mt-14 grid max-w-4xl gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {aboutPage.team.map((p) => (
        <li key={p.name}>
          <div className="from-surface-base via-accent/10 to-accent/35 relative aspect-square overflow-hidden rounded-sm bg-linear-to-b">
            <Image
              src={p.photo}
              alt={p.name}
              fill
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-bottom"
            />
          </div>
          <p className="mt-5 text-lg font-medium tracking-tight">{p.name}</p>
          <p className="text-text-secondary">{p.role}</p>
          <GlassDialog
            label={p.name}
            trigger={(open) => (
              <button
                type="button"
                onClick={open}
                className="label-sans border-border-strong hover:bg-text-primary hover:text-surface-base mt-5 cursor-pointer rounded-sm border px-4 py-2.5 transition-colors"
              >
                {t.common.viewBio}
              </button>
            )}
          >
            <div className="p-3">
              <div className="from-surface-base via-accent/10 to-accent/35 relative aspect-2/1 overflow-hidden rounded-sm bg-linear-to-b">
                <Image
                  src={p.photo}
                  alt=""
                  fill
                  sizes="24rem"
                  className="object-contain object-right-bottom"
                />
                <div className="absolute bottom-5 left-6" style={{ right: "50%" }}>
                  <p className="text-3xl leading-none font-medium tracking-tighter md:text-4xl">{p.name}</p>
                  <p className="label-mono text-text-secondary mt-2">{p.role}</p>
                </div>
              </div>
            </div>
            <p className="text-text-secondary px-6 pt-5 pb-8 leading-relaxed md:px-9 md:pb-10">{p.bio}</p>
          </GlassDialog>
        </li>
      ))}
    </ul>
  );
}
