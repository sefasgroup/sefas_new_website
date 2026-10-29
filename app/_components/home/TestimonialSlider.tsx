"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useUi } from "@/app/_i18n/client";
import { cn } from "@/app/_libs/utils";

type Quote = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  video?: string;
};

export function TestimonialSlider({
  items,
  className,
}: {
  items: readonly Quote[];
  className?: string;
}) {
  const t = useUi().home;
  const [{ at, prev }, setSlide] = useState({ at: 0, prev: -1 });
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [onScreen, setOnScreen] = useState(false);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const nearObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStill(matchMedia("(prefers-reduced-motion: reduce)").matches);
        setNear(true);
      },
      { rootMargin: "600px 0px" },
    );
    const viewObserver = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    nearObserver.observe(el);
    viewObserver.observe(el);
    return () => {
      nearObserver.disconnect();
      viewObserver.disconnect();
    };
  }, []);
  const go = (step: number) =>
    setSlide((s) => ({ prev: s.at, at: (s.at + step + items.length) % items.length }));
  const current = items[at];

  return (
    <div
      ref={root}
      className={cn("border-border-default grid border-b md:grid-cols-12", className)}
      onFocus={(e) => e.target.matches(":focus-visible") && setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="border-border-default flex flex-col gap-8 py-10 md:col-span-4 md:border-r md:pr-10">
        <div className="bg-surface-raised relative aspect-4/5 overflow-hidden rounded-sm">
          {items.map((item, n) => {
            const shown = `absolute inset-0 h-full w-full object-cover ${
              n === at
                ? "z-10 animate-wipe-up motion-reduce:animate-none"
                : n === prev
                  ? "z-0"
                  : "opacity-0"
            }`;
            const loaded =
              near && !still && (n === at || n === prev || n === (at + 1) % items.length);
            return item.video ? (
              <video
                key={item.video}
                className={shown}
                poster={near ? item.image : undefined}
                src={loaded ? item.video : undefined}
                autoPlay={loaded}
                muted
                loop
                playsInline
                preload={n === at && loaded ? "auto" : "none"}
                aria-hidden
              />
            ) : (
              <Image
                key={item.image}
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className={shown}
              />
            );
          })}
          <div aria-hidden className="bg-surface-base/30 absolute inset-x-4 bottom-4 z-20 h-0.5">
            <div
              key={at}
              className="animate-fill bg-surface-base h-full origin-left"
              style={{ animationDuration: "5s", animationPlayState: paused || !onScreen ? "paused" : "running" }}
              onAnimationEnd={() => go(1)}
            />
          </div>
        </div>
      </div>

      <figure className="border-border-default flex flex-col border-t py-10 md:col-span-8 md:border-t-0 md:pl-14">
        <p className="label-mono text-text-secondary flex items-center gap-3">
          <span aria-hidden className="bg-accent h-1.5 w-4 rounded-full" />
          {t.partnersSay}
        </p>
        <blockquote
          key={at}
          aria-live="polite"
          className="mt-10 animate-fade-up-slow text-3xl leading-tight font-normal tracking-tight text-balance motion-reduce:animate-none md:text-4xl"
        >
          {current.quote}
        </blockquote>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-8 pt-14">
          <div className="flex gap-2">
            {[
              [-1, t.prevQuote, "←"],
              [1, t.nextQuote, "→"],
            ].map(([step, label, arrow]) => (
              <button
                key={label}
                type="button"
                onClick={() => go(step as number)}
                aria-label={label as string}
                className="border-border-strong hover:bg-text-primary hover:text-surface-base flex size-11 cursor-pointer items-center justify-center rounded-sm border transition-colors"
              >
                <span aria-hidden>{arrow}</span>
              </button>
            ))}
          </div>
          <figcaption
            key={at}
            className="flex animate-[fade-up_0.7s_0.15s_ease-out_both] flex-col items-end text-right motion-reduce:animate-none"
          >
            <p className="text-lg font-medium tracking-tight">{current.name}</p>
            <p className="label-mono text-text-muted mt-2">
              {current.role} · {current.company}
            </p>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
