import Image from "next/image";
import { content } from "@/app/_content";
import { uiText } from "@/app/_i18n/server";
import { Eyebrow } from "../../../_ui/Eyebrow";
import { Heading } from "../../../_ui/Heading";
import { PackIcon } from "./PackIcon";

export function PackagingGrid() {
  const { PACKS } = content().catalogue;
  const t = uiText();
  return (
    <section className="container-page pt-28 pb-28 md:pt-40 md:pb-40">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <Eyebrow>{t.products.packaging}</Eyebrow>
          <Heading light={t.products.packagingHeading[0]} strong={t.products.packagingHeading[1]} className="mt-6" />
        </div>
        <p className="text-text-secondary leading-relaxed md:col-span-4 md:col-start-9">
          {t.products.packagingBody}
        </p>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {PACKS.map((pk) => (
          <li key={pk.id} className="border-border-default flex flex-col rounded-sm border">
            <div className="bg-text-primary/5 relative aspect-square">
              <Image
                src={pk.image}
                alt={pk.label}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                className="object-contain p-6"
              />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="flex items-center gap-2 font-medium tracking-tight">
                <PackIcon pack={pk.id} className="text-accent size-4" />
                {pk.label}
              </p>
              {pk.sizes.length > 0 ? (
                <dl className="divide-border-default border-border-default mt-3 divide-y border-t text-sm">
                  {pk.sizes.map((sz) => (
                    <div key={sz.label} className="flex justify-between gap-3 py-2">
                      <dt className="text-text-muted">{t.ranges[sz.label] ?? sz.label}</dt>
                      <dd className="text-right font-medium">{sz.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="border-border-default text-text-muted mt-3 border-t py-2 text-sm">
                  {t.common.sizeOnRequest}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
