import { localePath, SITE_URL } from "@/app/_i18n/locales";
import { getLang } from "@/app/_i18n/server";

type Crumb = { name: string; path: string };

export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const lang = getLang();
  const json = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${localePath(lang, crumb.path)}`.replace(/\/$/, ""),
    })),
  }).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
