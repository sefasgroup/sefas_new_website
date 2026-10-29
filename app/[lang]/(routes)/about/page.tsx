import Image from "next/image";
import { PageShell } from "@/app/_components/PageShell";
import { TeamGrid } from "@/app/_components/TeamGrid";
import { Awards } from "@/app/_components/home/Awards";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { Milestones } from "@/app/_components/home/Milestones";
import { Eyebrow } from "@/app/_ui/Eyebrow";
import { Heading } from "@/app/_ui/Heading";
import { Parallax } from "@/app/_ui/Parallax";
import { Reveal } from "@/app/_ui/Reveal";
import { content } from "@/app/_content";
import { uiText, pageLang } from "@/app/_i18n/server";
import { sectionMetadata } from "@/app/_libs/page-metadata";

type Props = { params: Promise<{ lang: string }> };

export const generateMetadata = ({ params }: Props) => sectionMetadata(params, "about");

export default async function AboutPage({ params }: Props) {
  await pageLang(params);
  const { aboutPage } = content().pages;
  const { stats } = content().home;
  const t = uiText().about;
  return (
    <PageShell
      flush
      eyebrow={t.eyebrow}
      light={t.hero[0]}
      strong={t.hero[1]}
      image="/videos/pages/img-about.jpg"
      video="/videos/pages/about"
    >
      <section className="container-page grid gap-12 pt-28 md:grid-cols-12 md:pt-40">
        <div className="md:col-span-5">
          <Eyebrow>{t.story}</Eyebrow>
          <Heading light={t.storyHeading[0]} strong={t.storyHeading[1]} className="mt-6" />
        </div>
        <div className="text-text-secondary space-y-6 text-lg leading-relaxed md:col-span-6 md:col-start-7">
          {aboutPage.story.map((p) => (
            <Reveal key={p}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <div className="container-page mt-20">
        <ul className="border-border-default bg-border-default grid grid-cols-2 gap-px overflow-hidden rounded-sm border md:grid-cols-4">
          {stats.map((s) => (
            <li key={s.label} className="bg-surface-base p-6 md:p-8">
              <p className="text-4xl font-medium tracking-tighter md:text-5xl">
                {s.value.toLocaleString("en")}
                {s.suffix}
              </p>
              <p className="label-mono text-text-muted mt-3">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <section className="bg-text-primary text-surface-base relative mt-28 overflow-hidden md:mt-40">
        <Parallax>
          <Image
            src="/images/crew/img-warehouse.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-45"
          />
        </Parallax>
        <div className="container-page relative py-28 md:py-44">
          <Eyebrow>{t.vision}</Eyebrow>
          <p className="mt-8 max-w-4xl text-3xl leading-heading font-medium tracking-tighter md:text-6xl">
            {aboutPage.vision}
          </p>
        </div>
      </section>

      <section className="container-page pt-28 md:pt-40">
        <Eyebrow>{t.mission}</Eyebrow>
        <Heading
          light={t.missionHeading[0]}
          strong={t.missionHeading[1]}
          className="mt-6 max-w-3xl"
        />
        <ol className="border-border-default bg-border-default mt-14 grid gap-px overflow-hidden rounded-sm border sm:grid-cols-2 lg:grid-cols-5">
          {aboutPage.mission.map((m, i) => (
            <li key={m.name} className="bg-surface-base p-6 md:p-8">
              <p className="label-mono text-text-muted">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-10 text-2xl font-medium tracking-tight">{m.name}</p>
              <p className="text-text-secondary mt-3 leading-relaxed">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page grid gap-12 pt-28 md:grid-cols-12 md:pt-40">
        <div className="md:col-span-4">
          <Eyebrow>{t.values}</Eyebrow>
          <Heading light={t.valuesHeading[0]} strong={t.valuesHeading[1]} className="mt-6" />
        </div>
        <ul className="divide-border-default border-border-default divide-y border-y md:col-span-7 md:col-start-6">
          {aboutPage.values.map((v) => (
            <li key={v.name} className="grid gap-3 py-8 md:grid-cols-[12rem_1fr]">
              <p className="text-2xl font-medium tracking-tight">{v.name}</p>
              <p className="text-text-secondary leading-relaxed">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <Milestones />

      <section className="container-page pt-28 text-center md:pt-40">
        <Eyebrow className="justify-center">{t.team}</Eyebrow>
        <Heading light={t.teamHeading[0]} strong={t.teamHeading[1]} className="mt-6" />
        <TeamGrid />
      </section>

      <Awards />
      <FinalCta />
    </PageShell>
  );
}
