import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/app/_shell/Footer";
import { Header } from "@/app/_shell/Header";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { Eyebrow } from "@/app/_ui/Eyebrow";
import { FooterReveal } from "@/app/_ui/FooterReveal";
import { Reveal } from "@/app/_ui/Reveal";
import { ShareButton } from "@/app/_ui/ShareButton";
import { insights as INSIGHTS_EN } from "@/app/_configs/home";
import { content } from "@/app/_content";
import { localHref, uiText, pageLang } from "@/app/_i18n/server";
import { pageMeta } from "@/app/_i18n/locales";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return INSIGHTS_EN.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const lang = await pageLang(params);
  const post = content().home.insights.find((p) => p.slug === slug);
  return post ? pageMeta(lang, `/blog/${slug}`, `${post.title} — SEFAS Group`, post.body) : {};
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  await pageLang(params);
  const { insights } = content().home;
  const t = uiText().blog;
  const post = insights.find((p) => p.slug === slug);
  if (!post) notFound();
  const others = insights.filter((p) => p.slug !== slug);

  return (
    <>
      <Header />
      <main className="bg-surface-base relative z-10">
        <div id="top" aria-hidden />

        <section className="bg-text-primary/5 pt-36 pb-16 md:pt-44 md:pb-24">
          <div className="container-page mx-auto max-w-3xl">
            <Eyebrow>
              {t.eyebrow} · {post.tag}
            </Eyebrow>
            <h1 className="mt-6 text-4xl leading-display font-medium tracking-tighter text-balance md:text-6xl">
              {post.title}
            </h1>
            <p className="text-text-secondary mt-6 max-w-xl text-lg leading-relaxed">{post.body}</p>
          </div>
        </section>

        <Reveal
          media
          className="container-page relative mt-0 aspect-16/9 overflow-hidden md:aspect-21/9"
        >
          <Image src={post.image} alt="" fill sizes="100vw" className="object-cover" />
        </Reveal>

        <article className="container-page grid gap-12 pt-16 pb-28 md:grid-cols-12 md:pt-24 md:pb-40">
          <aside className="space-y-8 md:sticky md:top-28 md:col-span-2 md:self-start">
            <div>
              <p className="label-mono text-text-muted">{t.date}</p>
              <p className="mt-2 text-sm">{post.date}</p>
            </div>
            <ShareButton />
            <div>
              <p className="label-mono text-text-muted">{t.category}</p>
              <p className="label-mono border-border-strong mt-3 inline-block rounded-sm border px-2 py-1">
                {post.tag}
              </p>
            </div>
          </aside>

          <div className="text-text-secondary space-y-6 text-lg leading-relaxed md:col-span-6 md:col-start-4">
            {post.article.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </article>

        <section className="container-page border-border-default border-t pt-16 pb-28 md:pb-40">
          <h2 className="text-3xl leading-display font-medium tracking-tighter md:text-5xl">
            {t.more}
          </h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {others.map((p) => (
              <li key={p.slug}>
                <Link
                  href={localHref(`/blog/${p.slug}`)}
                  className="group grid grid-cols-[8rem_1fr] items-center gap-6"
                >
                  <div className="relative aspect-4/3 overflow-hidden rounded-sm">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      sizes="8rem"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="label-mono text-text-muted">
                      {p.tag} · {p.date}
                    </p>
                    <p className="mt-2 text-xl leading-tight font-medium tracking-tight group-hover:underline">
                      {p.title}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <FinalCta />
      </main>
      <FooterReveal>
        <Footer />
      </FooterReveal>
    </>
  );
}
