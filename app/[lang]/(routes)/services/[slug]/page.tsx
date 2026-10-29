import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/app/_components/PageShell";
import { ProcessSteps } from "@/app/_features/services/components/ProcessSteps";
import { ServiceCard } from "@/app/_features/services/components/ServiceCard";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { Button } from "@/app/_ui/Button";
import { Eyebrow } from "@/app/_ui/Eyebrow";
import { serviceDetails as SERVICES_EN, serviceImage } from "@/app/_configs/pages";
import { content } from "@/app/_content";
import { localHref, uiText, pageLang } from "@/app/_i18n/server";
import { pageMeta } from "@/app/_i18n/locales";
import { ui } from "@/app/_i18n/ui";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return SERVICES_EN.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const lang = await pageLang(params);
  const s = content().pages.serviceDetails.find((x) => x.slug === slug);
  return s ? pageMeta(lang, `/services/${slug}`, ui(lang).services.metaTitle(s.name), s.summary) : {};
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  await pageLang(params);
  const { services } = content().home;
  const { serviceDetails } = content().pages;
  const t = uiText().services;
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) notFound();
  const category = services.items[service.categoryIndex];
  const others = serviceDetails.filter((s) => s.category === service.category && s.slug !== slug);

  return (
    <PageShell flush eyebrow={category.title} light={service.name} image={serviceImage(service.slug)}>
      <section className="container-page grid gap-10 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-7">
          <nav aria-label={t.breadcrumb} className="label-mono text-text-muted">
            <Link href={localHref("/services")} className="hover:text-text-primary">
              {t.title}
            </Link>{" "}
            ·{" "}
            <Link href={localHref(`/services#${service.category}`)} className="hover:text-text-primary">
              {category.title}
            </Link>
            {service.group && <> · {service.group}</>}
          </nav>
          <p className="mt-6 text-2xl leading-snug tracking-tight md:text-3xl">{service.summary}</p>
        </div>
        <div className="md:col-span-4 md:col-start-9 md:self-end">
          <Button href={localHref("/contact")}>{t.book(service.name)}</Button>
        </div>
      </section>

      <ProcessSteps steps={service.steps} />

      {others.length > 0 && (
        <section className="container-page pt-20 pb-28 md:pt-28 md:pb-40">
          <Eyebrow>{t.others(category.title)}</Eyebrow>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <ServiceCard service={o} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <FinalCta />
    </PageShell>
  );
}
