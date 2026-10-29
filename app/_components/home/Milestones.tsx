"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useContent } from "@/app/_content/client";
import { useUi } from "@/app/_i18n/client";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Heading } from "../../_ui/Heading";

export function Milestones() {
  const { milestones } = useContent().home;
  const t = useUi().home;
  const section = useRef<HTMLElement>(null);
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = section.current;
    const items = list.current ? ([...list.current.children] as HTMLElement[]) : [];
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--line", "1");
      items.forEach((li) => li.style.setProperty("--p", "1"));
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      el.style.setProperty(
        "--line",
        String(Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height))),
      );
      items.forEach((li) => {
        const top = li.getBoundingClientRect().top;
        li.style.setProperty("--p", String(Math.min(1, Math.max(0, (vh - top) / (vh * 0.6)))));
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={section}
      id="milestones"
      className="bg-text-primary text-surface-base mt-28 overflow-hidden py-24 md:mt-40 md:py-32"
      style={{ ["--line" as string]: 0 }}
    >
      <div className="container-page text-center">
        <Eyebrow className="justify-center">{t.since1997}</Eyebrow>
        <Heading
          light={t.milestonesHeading[0]}
          strong={t.milestonesHeading[1]}
          className="mx-auto mt-6 max-w-3xl"
        />
      </div>

      <div className="container-page relative mt-20">
        <span
          aria-hidden
          className="bg-surface-base/40 absolute top-0 bottom-0 left-5 w-px origin-top md:left-1/2"
          style={{ transform: "scaleY(var(--line))" }}
        />
        <ol ref={list}>
          {milestones.map((m, i) => {
            const left = i % 2 === 0;
            const side = left ? -1 : 1;
            return (
              <li
                key={m.year}
                className={`relative pl-12 md:w-1/2 ${left ? "md:pr-16 md:pl-0" : "md:ml-auto md:pl-16"} ${i ? "mt-16 md:-mt-40" : ""}`}
                style={{ ["--p" as string]: 0 }}
              >
                <span
                  aria-hidden
                  className="bg-surface-base/40 absolute top-1/2 left-1 h-px w-11 origin-left md:hidden"
                  style={{ transform: "scaleX(var(--p))" }}
                />
                <span
                  aria-hidden
                  className="bg-accent absolute top-1/2 left-1 size-2 rounded-full md:hidden"
                  style={{ transform: "translate(-50%, -50%) scale(var(--p))" }}
                />
                <span
                  aria-hidden
                  className={`bg-surface-base/40 absolute top-60 hidden h-px w-16 md:block ${left ? "right-0 origin-right" : "left-0 origin-left"}`}
                  style={{ transform: "scaleX(var(--p))" }}
                />
                <span
                  aria-hidden
                  className={`bg-accent absolute top-60 hidden size-2 rounded-full md:block ${left ? "-right-1" : "-left-1"}`}
                  style={{ transform: "translateY(-50%) scale(var(--p))" }}
                />
                <div
                  className={`relative aspect-4/5 max-w-sm overflow-hidden rounded-sm ${left ? "md:ml-auto" : "md:mr-auto"}`}
                  style={{
                    opacity: "var(--p)",
                    transform: `translateX(calc((1 - var(--p)) * ${side * 3}rem))`,
                  }}
                >
                  <Image
                    src={m.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 24rem, 90vw"
                    className="object-cover"
                  />
                  <span className="bg-text-primary/30 ring-surface-base/30 absolute top-3 left-3 rounded-full px-3.5 py-1.5 text-lg font-medium tracking-tight ring-1 backdrop-blur-md ring-inset">
                    {m.year}
                  </span>
                  <div className="bg-text-primary/40 ring-surface-base/15 absolute inset-x-3 bottom-3 rounded-sm p-4 ring-1 backdrop-blur-xl backdrop-saturate-150 ring-inset">
                    <p className="label-mono text-surface-base/60">
                      {t.place} <span className="text-surface-base">{m.place}</span>
                    </p>
                    <span aria-hidden className="bg-surface-base/30 mt-3 block h-px" />
                    <p className="mt-3 text-xl leading-snug font-medium tracking-tight">
                      {m.title}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
