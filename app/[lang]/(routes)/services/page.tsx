import Image from "next/image";
import { PageShell } from "@/app/_components/PageShell";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { Stories } from "@/app/_components/home/Stories";
import { Button } from "@/app/_ui/Button";
import { Eyebrow } from "@/app/_ui/Eyebrow";
import { Heading } from "@/app/_ui/Heading";
import { ServiceCard } from "@/app/_features/services/components/ServiceCard";
import { FloatingSectionNav } from "@/app/_ui/FloatingSectionNav";
import { content } from "@/app/_content";
import { localHref, uiText, pageLang } from "@/app/_i18n/server";
import { sectionMetadata } from "@/app/_libs/page-metadata";

type Props = { params: Promise<{ lang: string }> };

export const generateMetadata = ({ params }: Props) => sectionMetadata(params, "services");

export default async function ServicesPage({ params }: Props) {
  await pageLang(params);
  const { services } = content().home;
  const { servicesPage } = content().pages;
  const t = uiText().services;
  return (
    <PageShell
      flush
      eyebrow={t.eyebrow}
      light={t.hero[0]}
      strong={t.hero[1]}
      image="/videos/pages/img-services.jpg"
      video="/videos/pages/services"
    >
      <section className="container-page grid gap-10 pt-28 md:grid-cols-12 md:pt-40">
        <div className="md:col-span-6">
          <Eyebrow>{t.technical}</Eyebrow>
          <Heading
            light={t.heading[0]}
            strong={t.heading[1]}
            className="mt-6"
          />
        </div>
        <div className="md:col-span-5 md:col-start-8 md:self-end">
          <p className="text-text-secondary text-lg leading-relaxed">{servicesPage.intro}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {servicesPage.sectors.map((s) => (
              <li
                key={s}
                className="label-mono border-border-default text-text-secondary rounded-sm border px-3 py-1.5"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-20">
        <FloatingSectionNav
          label={t.nav}
          className="w-104"
          items={services.items.map((s, i) => ({
            id: servicesPage.categories[i].id,
            label: s.title,
          }))}
        />
        <div className="container-page mt-16 space-y-24 md:mt-24 md:space-y-36">
          {services.items.map((s, i) => {
            const category = servicesPage.categories[i];
            return (
              <section
                key={s.title}
                id={category.id}
                className="grid scroll-mt-28 gap-10 md:grid-cols-12"
              >
                <div
                  className={`relative aspect-4/5 overflow-hidden rounded-sm md:sticky md:top-28 md:col-span-5 md:self-start ${i % 2 ? "md:order-2 md:col-start-8" : ""}`}
                >
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div
                  className={`md:col-span-6 md:pt-6 ${i % 2 ? "md:col-start-1 md:row-start-1" : "md:col-start-7"}`}
                >
                  <h2 className="text-4xl leading-display font-medium tracking-tighter md:text-6xl">
                    {s.title}
                  </h2>
                  <p className="text-text-secondary mt-6 max-w-lg text-lg leading-relaxed">
                    {s.body}
                  </p>

                  <div className="mt-12 space-y-10">
                    {category.groups.map((g) => (
                      <div key={g.name || "all"}>
                        {g.name && (
                          <h3 className="border-border-strong mb-4 border-t pt-4 font-medium tracking-tight">
                            {g.name}
                          </h3>
                        )}
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {g.items.map((o) => (
                            <li key={o.slug}>
                              <ServiceCard service={o} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <div className="container-page mt-16 flex justify-end">
        <Button href={localHref("/contact")}>{t.talkToEngineer}</Button>
      </div>

      <Stories className="pb-28 md:pb-40" />
      <FinalCta />
    </PageShell>
  );
}
