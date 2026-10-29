"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function CareerPhotos({ photos, words, alt }: { photos: string[]; words: string[]; alt: string }) {
  const [[active, prev], setShown] = useState([0, 0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setShown(([n]) => [(n + 1) % photos.length, n]), 5000);
    return () => clearInterval(id);
  }, [photos.length]);

  return (
    <>
      {photos.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          fill
          sizes="(min-width: 768px) 42vw, 100vw"
          className={`object-cover ${i === active ? "z-1 opacity-100 transition-opacity duration-1000 ease-in-out" : i === prev ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="from-text-primary/60 absolute inset-0 z-2 bg-linear-to-t to-transparent to-50%" />
      <p
        key={active}
        className="text-surface-base absolute bottom-6 left-6 z-3 animate-fade-up text-3xl font-medium tracking-tight motion-reduce:animate-none md:bottom-10 md:left-10 md:text-5xl"
      >
        {words[active]}
      </p>
    </>
  );
}
