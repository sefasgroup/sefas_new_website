"use client";

import { useEffect, useRef, useState } from "react";

export function FooterReveal({ children }: { children: React.ReactNode }) {
  const inner = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ height: number; overflow: number } | null>(null);

  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    const measure = () =>
      setSize({ height: el.offsetHeight, overflow: el.offsetHeight - window.innerHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const fits = size !== null && size.overflow <= 0;
  const tall = size !== null && size.overflow > 0;

  return (
    <div
      className={tall ? "sticky" : "relative"}
      style={
        fits
          ? { height: size.height, clipPath: "inset(0 0 0 0)" }
          : tall
            ? { bottom: -size.overflow }
            : undefined
      }
    >
      <div ref={inner} className={fits ? "fixed inset-x-0 bottom-0" : undefined}>
        {children}
      </div>
    </div>
  );
}
