import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/app/_components/BreadcrumbJsonLd";
import { Footer } from "@/app/_shell/Footer";
import { Header } from "@/app/_shell/Header";
import { Eyebrow } from "@/app/_ui/Eyebrow";
import { FooterReveal } from "@/app/_ui/FooterReveal";
import { content } from "@/app/_content";
import { uiText, getLang, pageLang } from "@/app/_i18n/server";
import { cookiePolicy, type PolicyBlock } from "@/app/_i18n/cookie-policy";
import { pageMeta } from "@/app/_i18n/locales";
import { ui } from "@/app/_i18n/ui";

const SLUGS = ["privacy", "terms", "cookies"] as const;
type Slug = (typeof SLUGS)[number];
type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const lang = await pageLang(params);
  const t = ui(lang);
  if (!SLUGS.includes(slug as Slug)) return {};
  if (slug === "cookies") {
    const policy = cookiePolicy(lang);
    return {
      ...pageMeta(lang, "/legal/cookies", t.site.pageTitle(policy.title), policy.description),
      robots: { index: false },
    };
  }
  return { title: t.site.pageTitle(t.footer.links[slug as Slug]), robots: { index: false } };
}

export default async function LegalPage({ params }: Params) {
  const { slug } = await params;
  await pageLang(params);
  if (!SLUGS.includes(slug as Slug)) notFound();
  const t = uiText();
  const { email } = content().home.contact;
  const policy = slug === "cookies" ? cookiePolicy(getLang()) : null;
  return (
    <>
      <BreadcrumbJsonLd
        crumbs={[
          { name: t.footer.links.home, path: "/" },
          { name: t.footer.links[slug as Slug], path: `/legal/${slug}` },
        ]}
      />
      <Header />
      <main className="bg-surface-base relative z-10">
        <section className="container-page min-h-[70svh] pt-40 pb-28 md:pt-48 md:pb-40">
          <Eyebrow>{t.legal.eyebrow}</Eyebrow>
          <h1 className="mt-6 max-w-3xl text-5xl leading-display font-medium tracking-tighter md:text-7xl">
            {t.footer.links[slug as Slug]}
          </h1>
          {policy ? (
            <PolicyText policy={policy} email={email} />
          ) : (
            <p className="text-text-secondary mt-8 max-w-xl text-lg leading-relaxed">
              {t.legal.pending}{" "}
              <a href={`mailto:${email}`} className="text-text-primary underline underline-offset-2">
                {email}
              </a>
              .
            </p>
          )}
        </section>
      </main>
      <FooterReveal>
        <Footer />
      </FooterReveal>
    </>
  );
}

function WithEmail({ text, email }: { text: string; email: string }) {
  const [before, after] = text.split("{email}");
  if (after === undefined) return text;
  return (
    <>
      {before}
      <a href={`mailto:${email}`} className="text-text-primary underline underline-offset-2">
        {email}
      </a>
      {after}
    </>
  );
}

function Block({ block, email }: { block: PolicyBlock; email: string }) {
  if (block.type === "subheading") {
    return <h3 className="text-text-primary mt-8 text-xl font-medium tracking-tight">{block.text}</h3>;
  }
  if (block.type === "table") {
    return (
      <div className="border-border-default mt-6 overflow-x-auto rounded-sm border">
        <table className="w-full min-w-160 text-left text-base">
          <thead className="bg-surface-raised">
            <tr>
              {block.head.map((cell) => (
                <th key={cell} scope="col" className="label-mono text-text-muted px-4 py-3 font-normal">
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]} className="border-border-default border-t align-top">
                {row.map((cell, i) => (
                  <td key={cell} className={i === 0 ? "text-text-primary px-4 py-4 font-medium whitespace-nowrap" : "px-4 py-4"}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <p className="mt-4">
      <WithEmail text={block.text} email={email} />
    </p>
  );
}

function PolicyText({ policy, email }: { policy: ReturnType<typeof cookiePolicy>; email: string }) {
  return (
    <div className="text-text-secondary mt-8 max-w-3xl text-lg leading-relaxed">
      <p className="label-mono text-text-muted">
        {policy.updatedLabel}: {policy.updated}
      </p>
      <p className="mt-6">{policy.intro}</p>
      {policy.sections.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="text-text-primary text-2xl font-medium tracking-tight md:text-3xl">{section.heading}</h2>
          {section.blocks.map((block, i) => (
            <Block key={i} block={block} email={email} />
          ))}
        </section>
      ))}
    </div>
  );
}
