"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/app/_libs/utils";

export function Pinned({
  screens,
  className,
  frameClassName,
  children,
  ...props
}: { screens: number; frameClassName?: string } & React.ComponentProps<"section">) {
  const outer = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = outer.current;
    const inner = frame.current;
    if (!el || !inner) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      inner.style.setProperty("--p", "1");
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const travel = el.offsetHeight - window.innerHeight;
      const p = travel > 0 ? Math.min(1, Math.max(0, -el.getBoundingClientRect().top / travel)) : 1;
      inner.style.setProperty("--p", p.toFixed(4));
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
    <section ref={outer} className={cn("relative", className)} style={{ height: `${screens * 100}svh` }} {...props}>
      <div ref={frame} className={cn("sticky top-0 h-svh overflow-hidden", frameClassName)} style={{ ["--p" as string]: 0 }}>
        {children}
      </div>
    </section>
  );
}
