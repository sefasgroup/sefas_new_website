"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/_libs/utils";
import { useContent } from "@/app/_content/client";
import { useLocalePath, useUi } from "@/app/_i18n/client";
import { useLang } from "@/app/_i18n/LangProvider";
import { barePath, LANGS, switchPath } from "@/app/_i18n/locales";
import { Button } from "../_ui/Button";
import { HOME_ONLY } from "@/app/_configs/launch";

const contactHref = HOME_ONLY ? "#contact" : "/contact";

function lightness(color: string): number | null {
  const n = color.match(/[\d.]+/g)?.map(Number) ?? [];
  if (color.startsWith("oklab") || color.startsWith("oklch")) {
    const alpha = color.includes("/") ? n[n.length - 1] : 1;
    return alpha < 0.5 ? null : n[0];
  }
  if (color.startsWith("rgb")) {
    const [r, g, b, alpha = 1] = n;
    return alpha < 0.5 ? null : (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  }
  return null;
}

function darkBehind(header: HTMLElement): boolean {
  const y = header.getBoundingClientRect().top + 28;
  let dark = 0;
  for (const x of [0.25, 0.5, 0.75].map((f) => window.innerWidth * f)) {
    let l: number | null = null;
    for (const el of document.elementsFromPoint(x, y)) {
      if (header.contains(el) || el.closest(".pt")) continue;
      l = el.tagName === "VIDEO" ? 0 : lightness(getComputedStyle(el).backgroundColor);
      if (l !== null) break;
    }
    if ((l ?? 1) < 0.5) dark++;
  }
  return dark >= 2;
}

export function Header() {
  const pathname = usePathname();
  const t = useUi();
  const lp = useLocalePath();
  const { logo, nav } = useContent().home;
  const here = barePath(pathname);
  const contact = contactHref.startsWith("#") ? `${lp("/")}${contactHref}` : lp(contactHref);
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(true);
  const bar = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      if (bar.current) setOnDark(darkBehind(bar.current));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <header ref={bar} className="fixed inset-x-0 top-3 z-50 px-3 md:top-4">
      <div
        className={cn(
          "mx-auto rounded-md shadow-lg backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-500",
          nav.length > 0 ? "max-w-5xl" : "max-w-2xl",
          onDark ? "bg-text-primary/30 text-surface-base" : "bg-surface-base/35 text-text-primary",
        )}
      >
        <div className="flex h-14 items-center justify-between gap-6 pr-2 pl-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href={lp("/")} aria-label={t.header.home}>
              <Image
                src={logo}
                alt="SEFAS"
                width={1200}
                height={213}
                sizes="8.5rem"
                className="h-6 w-auto"
                priority
              />
            </Link>
            <span aria-hidden className="h-6 w-px bg-current opacity-25" />
            <Image
              src={onDark ? "/images/brand/img-shell-licensee-white.png" : "/images/brand/img-shell-licensee.png"}
              alt="Shell Licensee"
              width={623}
              height={128}
              sizes="7rem"
              className="h-5 w-auto sm:h-6"
              priority
            />
          </div>

          <nav aria-label={t.header.main} className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={lp(item.href)}
                aria-current={here === item.href ? "page" : undefined}
                className={cn(
                  "label-sans transition-opacity hover:opacity-100",
                  here === item.href ? "opacity-100" : "opacity-70",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitch pathname={pathname} className="hidden lg:flex" />
            <Button href={contact} size="sm" className="hidden md:inline-flex">
              {t.common.contactUs}
            </Button>
            <button
              type="button"
              className="label-sans rounded-sm border border-current/30 px-3 py-2 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? t.common.close : t.common.menu}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label={t.header.mobile}
            className="border-t border-current/15 px-4 pt-2 pb-6 lg:hidden"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={lp(item.href)}
                onClick={() => setOpen(false)}
                className="block border-b border-current/15 py-4 text-xl tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex items-center justify-between gap-4">
              <Button href={contact} onClick={() => setOpen(false)}>
                {t.common.contactUs}
              </Button>
              <LanguageSwitch pathname={pathname} className="flex" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function LanguageSwitch({ pathname, className }: { pathname: string; className?: string }) {
  const lang = useLang();
  const t = useUi();
  return (
    <div
      role="group"
      aria-label={t.header.language}
      className={cn("label-sans items-center rounded-sm border border-current/25 p-0.5", className)}
    >
      {LANGS.map((l) => (
        <Link
          key={l}
          href={switchPath(pathname, l)}
          hrefLang={l}
          lang={l}
          title={t.header.switchTo[l]}
          aria-current={l === lang ? "true" : undefined}
          className={cn(
            "rounded-xs px-2.5 py-1.5 transition-colors",
            l === lang ? "bg-current/15" : "opacity-55 hover:opacity-100",
          )}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
