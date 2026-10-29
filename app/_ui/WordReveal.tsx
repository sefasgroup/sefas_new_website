"use client";

import { useInView } from "./Reveal";

export function WordReveal({
  text,
  className,
  delay = 0,
  step = 45,
}: {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const words = text.split(" ");
  return (
    <span ref={ref} data-visible={inView} className={className}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => (
        <span key={i} aria-hidden className="word-reveal" style={{ transitionDelay: `${delay + i * step}ms` }}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}
