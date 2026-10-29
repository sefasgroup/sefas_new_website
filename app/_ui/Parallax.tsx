"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/app/_libs/utils";

const OVERHANG = 0.25;

export function Parallax({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const frame = el?.parentElement;
    if (!el || !frame || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2);
      const max = rect.height * OVERHANG;
      const offset = Math.max(-max, Math.min(max, progress * max));
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
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
    <div ref={ref} className={cn("absolute inset-x-0 -top-1/4 -bottom-1/4 will-change-transform", className)}>
      {children}
    </div>
  );
}
