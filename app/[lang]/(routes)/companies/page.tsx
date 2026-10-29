import { PageShell } from "@/app/_components/PageShell";
import { CompanyCard } from "@/app/_features/companies/components/CompanyCard";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { Network } from "@/app/_components/home/Network";
import { Eyebrow } from "@/app/_ui/Eyebrow";
import { Heading } from "@/app/_ui/Heading";
import { Reveal } from "@/app/_ui/Reveal";
import { content } from "@/app/_content";
import { uiText, pageLang } from "@/app/_i18n/server";
import { sectionMetadata } from "@/app/_libs/page-metadata";

type Props = { params: Promise<{ lang: string }> };

export const generateMetadata = ({ params }: Props) => sectionMetadata(params, "companies");

export default async function CompaniesPage({ params }: Props) {
  await pageLang(params);
  const { companies, network } = content().home;
  const { companyGroups, companyProfiles } = content().pages;
  const t = uiText().companies;
  return (
    <PageShell
      flush
      eyebrow={t.eyebrow}
      light={t.hero[0]}
      strong={t.hero[1]}
      image="/videos/pages/img-companies.jpg"
      video="/videos/pages/companies"
    >
      <section className="container-page grid gap-10 pt-28 md:grid-cols-12 md:pt-40">
        <div className="md:col-span-6">
          <Eyebrow>{t.group}</Eyebrow>
          <Heading
            light={t.heading[0]}
            strong={t.heading[1]}
            className="mt-6"
          />
        </div>
        <p className="text-text-secondary text-lg leading-relaxed md:col-span-5 md:col-start-8 md:self-end">
          {t.body}
        </p>
      </section>

      <div className="container-page mt-24 space-y-24 md:mt-32 md:space-y-36">
        {companyGroups.map((g) => {
          const members = companyProfiles.filter((c) => c.group === g.id);
          return (
            <section key={g.id}>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="label-mono text-text-muted">
                    {String(members.length).padStart(2, "0")} ·{" "}
                    {t.count(members.length)}
                  </p>
                  <h2 className="mt-4 text-3xl leading-display font-medium tracking-tighter md:text-4xl">
                    {g.label}
                  </h2>
                </div>
                <p className="text-text-secondary max-w-sm leading-relaxed">{g.body}</p>
              </div>

              <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {members.map((c, i) => (
                  <li key={c.name}>
                    <Reveal delay={(i % 3) * 100} className="h-full">
                      <CompanyCard
                        {...c}
                        logo={companies.find((x) => x.name === c.name)?.logo}
                        sites={network.sites.filter((s) => s.company === c.name)}
                      />
                    </Reveal>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <Network />
      <FinalCta />
    </PageShell>
  );
}
