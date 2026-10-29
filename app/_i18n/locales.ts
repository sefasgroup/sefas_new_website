export const LANGS = ["en", "id"] as const;
export type Lang = (typeof LANGS)[number];

export const LANG_HEADER = "x-lang";

export const isLang = (value: string): value is Lang => (LANGS as readonly string[]).includes(value);

export function localePath(lang: Lang, href: string) {
  if (lang === "en" || !href.startsWith("/") || href.startsWith("//")) return href;
  return href === "/" ? "/id" : `/id${href}`;
}

export function barePath(pathname: string) {
  const match = /^\/(en|id)(?=\/|$)/.exec(pathname);
  return match ? pathname.slice(match[0].length) || "/" : pathname;
}

export const switchPath = (pathname: string, to: Lang) => localePath(to, barePath(pathname));

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sefasgroup.com";

const OG_LOCALE = { en: "en_US", id: "id_ID" } as const satisfies Record<Lang, string>;

export function pageMeta(lang: Lang, path: string, title: string, fullDescription: string) {
  const description =
    fullDescription.length > 160 ? `${fullDescription.slice(0, 157).replace(/\s+\S*$/, "")}…` : fullDescription;
  return {
    title,
    description,
    alternates: {
      canonical: localePath(lang, path),
      languages: { en: path, id: localePath("id", path), "x-default": path },
    },
    openGraph: {
      type: "website" as const,
      siteName: "SEFAS Group",
      url: localePath(lang, path),
      locale: OG_LOCALE[lang],
      alternateLocale: OG_LOCALE[lang === "en" ? "id" : "en"],
      title,
      description,
      images: [{ url: `/images/og/og-${lang}.jpg`, width: 1200, height: 630, alt: "SEFAS Group — Built on Trust. Driven by Progress." }],
    },
  };
}
