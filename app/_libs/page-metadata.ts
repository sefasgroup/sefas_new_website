import type { Metadata } from "next";
import { pageMeta } from "@/app/_i18n/locales";
import { pageLang } from "@/app/_i18n/server";
import { ui } from "@/app/_i18n/ui";

type Section = "about" | "companies" | "blog" | "network" | "services" | "products";

export async function sectionMetadata(params: Promise<{ lang: string }>, section: Section): Promise<Metadata> {
  const lang = await pageLang(params);
  const t = ui(lang);
  return pageMeta(lang, `/${section}`, t.site.pageTitle(t[section].title), t[section].description);
}
