import { SHOW_CASE_STUDIES } from "@/app/_configs/launch";
import { cn } from "@/app/_libs/utils";
import { content } from "@/app/_content";
import { uiText } from "@/app/_i18n/server";
import { CountUp } from "../../_ui/CountUp";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Heading } from "../../_ui/Heading";
import { Reveal } from "../../_ui/Reveal";
import { TestimonialSlider } from "./TestimonialSlider";

export function Stories({ className }: { className?: string }) {
  const { caseStudies, testimonials } = content().home;
  const t = uiText().home;
  return (
    <section id="stories" className={cn("container-page pt-28 md:pt-40", className)}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Eyebrow>{t.stories}</Eyebrow>
          {SHOW_CASE_STUDIES && (
            <Heading
              light={t.storiesHeading[0]}
              strong={t.storiesHeading[1]}
              className="mt-6 max-w-3xl"
            />
          )}
        </div>
      </div>

      {SHOW_CASE_STUDIES && (
        <ul className="border-border-default mt-14 grid border-t md:grid-cols-3">
          {caseStudies.items.map((item, i) => (
            <li
              key={item.sector}
              className="border-border-default border-b md:border-r md:px-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <Reveal delay={i * 100} className="flex h-full flex-col py-10">
                <p className="label-mono text-text-secondary">{item.sector}</p>
                <p className="mt-8 text-7xl tracking-tighter md:text-8xl">
                  <CountUp value={Number(item.metric)} suffix={item.unit} />
                </p>
                <p className="mt-4 max-w-xs text-lg leading-snug">{item.result}</p>
                <p className="label-mono text-text-muted mt-auto pt-10">{item.client}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      )}

      <TestimonialSlider
        items={testimonials.items}
        className={SHOW_CASE_STUDIES ? undefined : "mt-10 border-t"}
      />
    </section>
  );
}
