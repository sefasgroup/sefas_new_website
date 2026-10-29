"use client";

import { useEffect, useRef } from "react";
import { resizedSrc } from "@/app/_libs/utils";

type Source = { src: string; media?: string };

export function BackgroundVideo({
  sources,
  poster,
  phone = false,
  className,
}: {
  sources: readonly Source[];
  poster: string;
  phone?: boolean;
  className?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = video.current;
    if (!el) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onPhone = window.matchMedia("(max-width: 767px)").matches;
    if (reduced || connection?.saveData || (onPhone && !phone)) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.play().catch(() => {});
      else el.pause();
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [phone]);

  return (
    <video ref={video} className={className} poster={resizedSrc(poster, 1920)} muted loop playsInline preload="metadata" aria-hidden>
      {sources.map((s) => (
        <source key={s.src} src={s.src} media={s.media} type="video/mp4" />
      ))}
    </video>
  );
}
