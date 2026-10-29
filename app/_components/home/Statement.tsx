"use client";

import { useEffect, useRef } from "react";
import { useContent } from "@/app/_content/client";
import { useLocalePath, useUi } from "@/app/_i18n/client";
import { Button } from "../../_ui/Button";
import { Eyebrow } from "../../_ui/Eyebrow";

const OPEN = 0.18;
const STEP = 60;

export function Statement() {
  const { statement } = useContent().home;
  const LINES = statement.lines;
  const t = useUi();
  const lp = useLocalePath();
  const outer = useRef<HTMLElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const copy = useRef<HTMLDivElement>(null);
  const lines = useRef<(HTMLParagraphElement | null)[]>([]);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const el = outer.current;
    if (!el) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let shown = -1;
    let playing = false;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const travel = el.offsetHeight - window.innerHeight;
      const p = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 1;

      const g = still ? 1 : Math.min(1, p / OPEN);
      const inset = 1 - g;
      card.current!.style.clipPath = `inset(${inset * 30}svh ${inset * 32}vw ${inset * 30}svh round ${inset * 8}px)`;
      copy.current!.style.opacity = String(Math.max(0, (g - 0.6) / 0.4));

      const rest = Math.min(1, Math.max(0, (p - OPEN) / (1 - OPEN)));
      const raw = Math.min(1, Math.max(0, (rest - 0.06) / 0.88)) * (LINES.length - 1);
      const f = Math.min(1, Math.max(0, (raw - Math.floor(raw) - 0.25) / 0.5));
      const t = Math.floor(raw) + f * f * (3 - 2 * f);
      lines.current.forEach((line, k) => {
        if (!line) return;
        const d = k - t;
        const a = Math.min(1, Math.abs(d));
        line.style.opacity = String(Math.max(0, 1 - Math.abs(d) * 1.4));
        line.style.filter = `blur(${a}px)`;
        line.style.transform = still
          ? "none"
          : `perspective(1000px) rotateX(${-d * STEP}deg) scale(${1 - a * 0.4})`;
      });

      const active = Math.round(t);
      const onScreen = rect.top < window.innerHeight && rect.bottom > 0;
      if (active !== shown || onScreen !== playing) {
        videos.current.forEach((v, k) => {
          if (!v) return;
          v.style.opacity = k === active ? "1" : "0";
          if (k === active && onScreen) v.play().catch(() => {});
          else v.pause();
        });
        shown = active;
        playing = onScreen;
      }
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
  }, [LINES.length]);

  return (
    <section
      ref={outer}
      id="services"
      aria-label={statement.eyebrow}
      className="relative mt-28 md:mt-40"
      style={{ height: `${120 + LINES.length * 70}svh` }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div ref={card} className="bg-text-primary absolute inset-0">
          {LINES.map((line, k) => (
            <video
              key={line.clip}
              ref={(v) => {
                videos.current[k] = v;
              }}
              className="absolute inset-0 size-full object-cover transition-opacity duration-700"
              style={{ opacity: k ? 0 : 1 }}
              poster={`/videos/promise/${line.clip}.jpg`}
              muted
              loop
              playsInline
              preload={k ? "metadata" : "auto"}
              aria-hidden
            >
              <source src={`/videos/promise/${line.clip}.mp4`} type="video/mp4" />
            </video>
          ))}
          <div className="bg-text-primary/60 absolute inset-0" />
        </div>

        <div
          ref={copy}
          className="text-surface-base absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          style={{ opacity: 0 }}
        >
          <Eyebrow className="justify-center">{statement.eyebrow}</Eyebrow>
          <ul className="sr-only">
            {LINES.map((line) => (
              <li key={line.clip}>
                {line.title} — {line.body}
              </li>
            ))}
          </ul>
          <div className="relative mt-10 h-64 w-full max-w-4xl md:h-72">
            {LINES.map((line, k) => (
              <p
                key={line.clip}
                ref={(p) => {
                  lines.current[k] = p;
                }}
                aria-hidden
                className="absolute inset-0 flex items-center justify-center text-4xl leading-display font-medium tracking-tighter text-balance md:text-6xl"
                style={{ opacity: k ? 0 : 1, transformOrigin: "50% 50% -6rem" }}
              >
                <span>
                  {line.title}
                  <span className="mx-auto mt-6 block max-w-md text-base leading-relaxed font-normal tracking-normal opacity-85 md:text-lg">
                    {line.body}
                  </span>
                </span>
              </p>
            ))}
          </div>
          <Button href={lp("/services")} variant="inverse" className="mt-10">
            {t.home.exploreServices}
          </Button>
        </div>
      </div>
    </section>
  );
}
