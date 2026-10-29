"use client";

import Image from "next/image";
import Link from "next/link";
import { type ServiceDetail, serviceImage } from "@/app/_configs/pages";
import { useLocalePath, useUi } from "@/app/_i18n/client";
import { Button } from "../../../_ui/Button";
import { GlassDialog } from "../../../_ui/GlassDialog";

export function ServiceCard({ service }: { service: ServiceDetail }) {
  const t = useUi();
  const lp = useLocalePath();
  return (
    <GlassDialog
      label={service.name}
      trigger={(open) => (
        <Link
          href={lp(`/services/${service.slug}`)}
          data-no-transition
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
            e.preventDefault();
            open();
          }}
          className="group border-border-default hover:bg-accent hover:text-surface-base flex h-full flex-col rounded-sm border p-6 transition-colors duration-300 hover:border-transparent"
        >
          <span className="text-xl font-medium tracking-tight">{service.name}</span>
          <span className="text-text-secondary group-hover:text-surface-base/85 mt-3 text-sm leading-relaxed">
            {service.summary}
          </span>
          <span className="label-sans mt-auto pt-6">{t.common.learnMore}</span>
        </Link>
      )}
    >
      <div className="p-3">
        <div className="bg-text-primary text-surface-base relative aspect-2/1 overflow-hidden rounded-sm">
          <Image src={serviceImage(service.slug)} alt="" fill sizes="46rem" className="object-cover opacity-80" />
          <div className="from-text-primary/80 absolute inset-0 bg-linear-to-t to-transparent" />
          <p className="absolute bottom-5 left-6 text-3xl font-medium tracking-tighter md:text-4xl">
            {service.name}
          </p>
        </div>
      </div>

      <div className="px-6 pt-5 pb-8 md:px-9 md:pb-10">
        <p className="text-xl leading-snug font-medium tracking-tight">{service.summary}</p>
        <p className="label-mono text-text-muted mt-8">{t.services.howItWorks}</p>
        <ol className="divide-text-primary/10 border-text-primary/10 mt-4 divide-y border-y">
          {service.steps.map((step, i) => (
            <li key={step.title} className="flex gap-4 py-4">
              <span className="label-mono text-accent pt-1">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-medium tracking-tight">{step.title}</span>
                <span className="text-text-secondary mt-1 block text-sm leading-relaxed">{step.body}</span>
              </span>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Button href={lp("/contact")}>{t.services.book(service.name)}</Button>
        </div>
      </div>
    </GlassDialog>
  );
}
