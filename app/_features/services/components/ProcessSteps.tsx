"use client";

import { useUi } from "@/app/_i18n/client";
import { cn } from "@/app/_libs/utils";
import { Eyebrow } from "../../../_ui/Eyebrow";
import { useInView } from "../../../_ui/Reveal";

const FILL_MS = 1400;

export function ProcessSteps({ steps }: { steps: { title: string; body: string }[] }) {
  const { ref, inView } = useInView<HTMLOListElement>();
  const t = useUi().services;
  const n = steps.length;

  return (
    <section className="bg-text-primary text-surface-base mt-20 py-20 md:mt-28 md:py-28">
      <div className="container-page">
        <Eyebrow>{t.howItWorks}</Eyebrow>
        <p className="mt-6 max-w-2xl text-3xl leading-heading font-medium tracking-tighter md:text-5xl">
          {t.stepsLine(n)}
        </p>

        <ol
          ref={ref}
          className={cn(
            "relative mt-16 grid gap-12 md:gap-8",
            n > 3 ? "md:grid-cols-4" : "md:grid-cols-3",
          )}
        >
          <span
            aria-hidden
            className="bg-surface-base/15 absolute top-1 right-0 left-0 hidden h-px md:block"
          />
          <span
            aria-hidden
            className="bg-accent absolute top-1 left-0 hidden h-px w-full origin-left transition-transform ease-out motion-reduce:transition-none md:block"
            style={{ transform: `scaleX(${inView ? 1 : 0})`, transitionDuration: `${FILL_MS}ms` }}
          />
          {steps.map((step, i) => {
            const delay = Math.round((FILL_MS * i) / n);
            return (
              <li key={step.title} className="relative">
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-0 left-0 hidden size-2.5 rounded-full transition-colors duration-300 md:block",
                    inView ? "bg-accent" : "bg-surface-base/30",
                  )}
                  style={{ transitionDelay: `${delay}ms` }}
                />
                <p
                  className={cn(
                    "text-7xl leading-none font-medium tracking-tighter transition-colors duration-500 md:mt-10 md:text-8xl",
                    inView ? "text-accent" : "text-surface-base/15",
                  )}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div
                  className={cn(
                    "transition-all duration-700 ease-out motion-reduce:transition-none",
                    inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                  style={{ transitionDelay: `${delay + 150}ms` }}
                >
                  <h3 className="mt-6 text-2xl font-medium tracking-tight">{step.title}</h3>
                  <p className="text-surface-base/70 mt-3 max-w-xs leading-relaxed">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
