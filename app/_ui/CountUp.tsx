"use client";

import { useEffect, useState } from "react";
import { useInView } from "./Reveal";

export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 1600;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      setShown(Math.round(value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {shown.toLocaleString("en-US")}
      {suffix && <span className="text-accent">{suffix}</span>}
    </span>
  );
}
