import { content } from "@/app/_content";
import { uiText } from "@/app/_i18n/server";
import { CountUp } from "../../_ui/CountUp";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Reveal } from "../../_ui/Reveal";
import { WordReveal } from "../../_ui/WordReveal";

export function Intro() {
  const { about, stats } = content().home;
  const t = uiText().home;
  return (
    <section id="about" className="container-page pt-24 md:pt-36">
      <div className="grid gap-10 md:grid-cols-12">
        <Eyebrow className="self-start md:col-span-3 md:mt-3">
          {t.inBrief}
        </Eyebrow>
        <div className="md:col-span-9">
          <p className="text-2xl leading-snug font-normal tracking-tight text-balance md:text-4xl">
            <WordReveal text={about.titleLight} /> <WordReveal text={about.titleStrong} delay={180} />{" "}
            <WordReveal text={about.body[0]} delay={360} step={18} />
          </p>
          <Reveal delay={600}>
            <p className="mt-8 max-w-2xl leading-relaxed text-text-secondary">{about.body[1]}</p>
          </Reveal>
        </div>
      </div>

      <dl className="mt-24 grid grid-cols-2 border-t border-border-default md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse border-b border-border-default py-8 pr-4 md:border-b-0">
            <dt className="label-mono mt-3 text-text-secondary">{stat.label}</dt>
            <dd className="text-5xl font-normal tracking-tighter md:text-7xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
