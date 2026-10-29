"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type State = "idle" | "cover" | "reveal";
const STRIPS = 5;
const COVER_MS = 820;

export function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const [state, setState] = useState<State>("idle");
  const stateRef = useRef<State>("idle");

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (
        !a ||
        !a.href ||
        a.target === "_blank" ||
        a.hasAttribute("download") ||
        a.hasAttribute("hreflang") ||
        a.hasAttribute("data-no-transition")
      )
        return;
      const url = new URL(a.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      if (stateRef.current !== "idle") return e.preventDefault();
      e.preventDefault();
      setState("cover");
      window.setTimeout(() => router.push(url.pathname + url.search + url.hash), COVER_MS);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useEffect(() => {
    if (stateRef.current !== "cover") return;
    const reveal = window.setTimeout(() => setState("reveal"), 120);
    const idle = window.setTimeout(() => setState("idle"), 1350);
    return () => {
      window.clearTimeout(reveal);
      window.clearTimeout(idle);
    };
  }, [pathname]);

  return (
    <div aria-hidden className="pt" data-state={state}>
      {["pt-row pt-row-dark", "pt-row"].map((row) => (
        <div key={row} className={row}>
          {Array.from({ length: STRIPS }, (_, i) => (
            <span key={i} className="pt-strip" style={{ ["--i" as string]: i }} />
          ))}
        </div>
      ))}
      <img src="/images/brand/img-sefas-logo-white.png" alt="" className="pt-logo" />
    </div>
  );
}
