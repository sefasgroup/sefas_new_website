import Image from "next/image";
import { content } from "@/app/_content";
import { localHref, uiText } from "@/app/_i18n/server";
import { Button } from "../../_ui/Button";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Heading } from "../../_ui/Heading";
import { Reveal } from "../../_ui/Reveal";

export function Insights({ viewAll = true }: { viewAll?: boolean }) {
  const { insights } = content().home;
  const t = uiText();
  return (
    <section id="insights" className="container-page pt-28 md:pt-40">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>{t.home.insights}</Eyebrow>
          <Heading light={t.home.insightsHeading[0]} strong={t.home.insightsHeading[1]} className="mt-6" />
        </div>
        {viewAll && (
          <Button href={localHref("/blog")} variant="outline">
            {t.common.viewAll}
          </Button>
        )}
      </div>

      <ul className="mt-14 grid gap-4 md:grid-cols-3">
        {insights.map((post, i) => (
          <li key={post.title}>
            <Reveal media delay={i * 100} className="relative aspect-4/5 overflow-hidden rounded-sm bg-text-primary">
              <a href={localHref(`/blog/${post.slug}`)} className="group block size-full">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-sm bg-text-primary/45 p-5 text-surface-base ring-1 ring-surface-base/15 ring-inset backdrop-blur-xl backdrop-saturate-150 md:p-6">
                  <p className="text-xl leading-tight font-medium tracking-tight text-balance">{post.title}</p>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed opacity-75">{post.body}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="label-mono rounded-sm border border-surface-base/40 px-2 py-1">{post.tag}</span>
                    <span className="label-mono opacity-60">{post.date}</span>
                  </div>
                </div>
              </a>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
