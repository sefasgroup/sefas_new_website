"use client";

import { catalogue } from "@/app/_configs/catalogue";
import { HOME_ONLY } from "@/app/_configs/launch";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useContent } from "@/app/_content/client";
import { useLocalePath, useUi } from "@/app/_i18n/client";
import { cn } from "@/app/_libs/utils";
import { Button } from "../../_ui/Button";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Heading } from "../../_ui/Heading";

function ProductLogos({ slugs, note, label, className }: { slugs: string[]; note?: string; label: string; className?: string }) {
  const families = slugs.map((s) => catalogue.find((p) => p.slug === s)).filter((p) => p?.logo);
  return (
    <ul aria-label={label} className={cn("flex flex-wrap items-center gap-x-5 gap-y-3", className)}>
      {families.map((p) => (
        <li key={p!.slug}>
          <Image
            src={p!.logo!.src}
            alt={`${p!.maker} ${p!.mark}`}
            width={p!.logo!.width}
            height={p!.logo!.height}
            className="h-7 w-auto max-w-28 object-contain md:h-8"
          />
        </li>
      ))}
      {note && <li className="text-text-secondary text-sm leading-snug italic">{note}</li>}
    </ul>
  );
}

export function IndustryCases() {
  const { industries } = useContent().home;
  const t = useUi();
  const lp = useLocalePath();
  const section = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = section.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const travel = el.offsetHeight - window.innerHeight;
      const p = travel > 0 ? Math.min(0.999, Math.max(0, -el.getBoundingClientRect().top / travel)) : 0;
      setActive(Math.floor(p * industries.length));
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
  }, [industries.length]);

  const jump = (i: number) => {
    const el = section.current;
    if (!el) return;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + (travel * (i + 0.5)) / industries.length, behavior: "smooth" });
  };

  const item = industries[active];

  return (
    <section id="industries" aria-label={t.home.industriesHeading.join(" ")} className="pt-28 md:pt-40">
      <div className="container-page">
        <Eyebrow>{t.home.industries}</Eyebrow>
        <Heading light={t.home.industriesHeading[0]} strong={t.home.industriesHeading[1]} className="mt-6 max-w-4xl" />
        <Button href={HOME_ONLY ? "#contact" : lp("/contact")} variant="outline" className="mt-8 md:hidden">
          {t.common.contactUs}
        </Button>
      </div>
      <div
        ref={section}
        className="relative hidden md:block"
        style={{ height: `${industries.length * 90 + 10}svh` }}
      >
        <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
          <div className="container-page grid flex-1 grid-cols-12 items-center gap-8 pt-28 pb-16">
            <ul className="col-span-3 space-y-5 text-right">
              {industries.map((p, i) => (
                <li key={p.name}>
                  <button
                    type="button"
                    onClick={() => jump(i)}
                    aria-current={i === active ? "step" : undefined}
                    className={cn(
                      "inline-flex cursor-pointer items-center gap-3 text-2xl tracking-tight transition-opacity duration-500",
                      i === active ? "opacity-100" : "opacity-25 hover:opacity-60",
                    )}
                  >
                    {i === active && <span aria-hidden className="size-1.5 rounded-full bg-accent" />}
                    {p.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="relative col-span-4 col-start-5 flex items-end gap-4">
              <div className="relative aspect-4/5 flex-1 overflow-hidden rounded-sm bg-text-primary">
                {industries.map((p, i) => (
                  <Image
                    key={p.name}
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="35vw"
                    className={cn(
                      "object-cover transition-all duration-700 ease-out",
                      i === active ? "scale-100 opacity-100" : "scale-105 opacity-0",
                    )}
                  />
                ))}
              </div>
              <ol aria-hidden className="flex flex-col gap-3 pb-1">
                {industries.map((p, i) => (
                  <li
                    key={p.name}
                    className={cn(
                      "w-1 rounded-full transition-all duration-500",
                      i === active ? "h-8 bg-text-primary" : "h-1 bg-text-muted",
                    )}
                  />
                ))}
              </ol>
            </div>

            <div key={item.name} className="col-span-4 col-start-9 animate-fade-up-slow motion-reduce:animate-none">
              <h4 className="text-lg font-semibold tracking-tight">{t.home.theChallenge}</h4>
              <p className="mt-3 max-w-md leading-relaxed text-text-secondary">{item.challenge}</p>
              <div className="my-6 h-px bg-border-default" />
              <h4 className="text-lg font-semibold tracking-tight">{t.home.howSefasHelps}</h4>
              <p className="mt-3 max-w-md leading-relaxed text-text-secondary">{item.solution}</p>
              {item.products && (
                <ProductLogos slugs={item.products} note={item.productsNote} label={t.home.whatWeSupply} className="mt-5 max-w-md" />
              )}
              <Button href={HOME_ONLY ? "#contact" : lp("/contact")} variant="outline" className="mt-8">
                {t.common.contactUs}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ul className="container-page mt-10 space-y-14 md:hidden">
        {industries.map((p) => (
          <li key={p.name}>
            <div className="relative aspect-4/5 overflow-hidden rounded-sm">
              <Image src={p.image} alt={p.alt} fill sizes="100vw" className="object-cover" />
            </div>
            <h3 className="mt-5 text-3xl font-medium tracking-tighter">{p.name}</h3>
            <p className="mt-3 leading-relaxed text-text-secondary">{p.challenge}</p>
            <p className="mt-3 leading-relaxed">{p.solution}</p>
            {p.products && <ProductLogos slugs={p.products} note={p.productsNote} label={t.home.whatWeSupply} className="mt-5" />}
          </li>
        ))}
      </ul>
    </section>
  );
}
