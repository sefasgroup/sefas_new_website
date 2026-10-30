"use client";

import { useEffect, useRef, useState } from "react";
import { awards as AWARDS_EN } from "@/app/_configs/home";
import { useContent } from "@/app/_content/client";
import { useUi } from "@/app/_i18n/client";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Heading } from "../../_ui/Heading";

const N = AWARDS_EN.length;
const HOLD_MS = 1700;
const GLIDE_MS = 1000;

const CENTRE_SCALE = 1.3;
const ROW_EM = 2.9;
const ROW_EM_PHONE = 4.4;

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

function rowStyle(d: number, rowEm = ROW_EM) {
  const a = Math.abs(d);
  const opacity = a <= 1 ? 1 - 0.7 * a : Math.max(0, 0.3 - 0.2 * (a - 1));
  const scale =
    a <= 1 ? CENTRE_SCALE - (CENTRE_SCALE - 0.9) * a : Math.max(0.84, 0.9 - 0.06 * (a - 1));
  return {
    transform: `translateY(calc(-50% + ${d * rowEm}em)) scale(${scale})`,
    opacity: String(opacity),
    filter: `blur(${Math.min(a, 2) * 0.6}px)`,
    "--source": String(Math.max(0, 1 - 2 * a)),
  };
}

function splitSource(by: string) {
  const at = by.lastIndexOf(" · ");
  return at > 0 && /^\d{4}$/.test(by.slice(at + 3))
    ? { source: by.slice(0, at), year: by.slice(at + 3) }
    : { source: by };
}

function applyRow(row: HTMLElement, style: ReturnType<typeof rowStyle>) {
  row.style.transform = style.transform;
  row.style.opacity = style.opacity;
  row.style.filter = style.filter;
  row.style.setProperty("--source", style["--source"]);
}

function distance(i: number, p: number) {
  let d = (((i - p) % N) + N) % N;
  if (d > N / 2) d -= N;
  return d;
}

const phoneLine = {
  opacity: "var(--source)",
  fontSize: "0.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  width: "max-content",
  maxWidth: "77%",
};

export function Awards() {
  const { awards } = useContent().home;
  const t = useUi().home;
  const [active, setActive] = useState(0);
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const rows = Array.from(list.current?.querySelectorAll("li") ?? []);
    const wide = window.matchMedia("(min-width: 768px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rowEm = wide ? ROW_EM : ROW_EM_PHONE;
    if (!wide && list.current) list.current.style.height = "16.5em";
    rows.forEach((row, i) => applyRow(row, rowStyle(distance(i, 0), rowEm)));
    if (reduced) return;

    const start = performance.now();
    let shown = 0;
    let frame = 0;
    const tick = (now: number) => {
      const t = now - start;
      const step = Math.floor(t / (HOLD_MS + GLIDE_MS));
      const into = t - step * (HOLD_MS + GLIDE_MS);
      const p = step + (into < HOLD_MS ? 0 : easeInOut((into - HOLD_MS) / GLIDE_MS));
      rows.forEach((row, i) => applyRow(row, rowStyle(distance(i, p), rowEm)));
      const nearest = Math.round(p) % N;
      if (nearest !== shown) {
        shown = nearest;
        setActive(nearest);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="awards"
      aria-label={t.recognition}
      className="container-page grid grid-cols-1 content-center gap-10 pt-28 pb-12 md:min-h-svh md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:pt-0 md:pb-0"
    >
      <div>
        <Eyebrow>{t.recognition}</Eyebrow>
        <Heading
          light={t.recognitionHeading[0]}
          strong={t.recognitionHeading[1]}
          className="mt-6 md:hidden"
        />
        <p className="text-text-secondary mt-3 max-w-56 text-sm leading-relaxed max-md:hidden">
          {t.recognitionLine}
        </p>
      </div>

      <div
        className="relative tracking-tighter md:w-[17em]"
        style={{ fontSize: "clamp(1.25rem, 2.75vw, 3rem)" }}
      >
        <ol
          ref={list}
          aria-label={t.awards}
          className="relative overflow-hidden"
          style={{
            height: "13.5em",
            maskImage: "linear-gradient(transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage: "linear-gradient(transparent, black 20%, black 80%, transparent)",
          }}
        >
          {awards.map((award, i) => {
            const { source, year } = splitSource(award.by);
            return (
              <li
                key={`${award.name}-${award.by}`}
                aria-current={i === active || undefined}
                className="absolute inset-x-0 top-1/2 text-center leading-none font-medium whitespace-nowrap will-change-transform"
                style={rowStyle(distance(i, 0)) as React.CSSProperties}
              >
                <span>{award.name}</span>
                <span
                  className="label-mono text-text-secondary absolute bottom-full text-center whitespace-normal md:hidden"
                  style={{ ...phoneLine, marginBottom: "0.4rem" }}
                >
                  {source}
                </span>
                {year && (
                  <span
                    className="label-mono text-text-secondary absolute top-full text-center text-[0.5rem] whitespace-normal md:text-[0.625rem]"
                    style={{ ...phoneLine, fontSize: undefined, marginTop: "0.4rem" }}
                  >
                    {year}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      <p
        key={active}
        className="label-mono text-text-secondary max-w-56 animate-[fade-up_0.6s_ease-out_both] motion-reduce:animate-none max-md:hidden md:text-right"
        style={{ marginLeft: "auto" }}
        aria-live="polite"
      >
        {splitSource(awards[active].by).source}
      </p>
    </section>
  );
}
