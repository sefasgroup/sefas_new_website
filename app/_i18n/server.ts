import { cache } from "react";
import { isLang, localePath, type Lang } from "./locales";
import { ui } from "./ui";

const store = cache(() => ({ lang: "en" as Lang }));

export const getLang = () => store().lang;

export async function pageLang(params: Promise<{ lang: string }>) {
  const { lang } = await params;
  const resolved = isLang(lang) ? lang : "en";
  store().lang = resolved;
  return resolved;
}

export const uiText = () => ui(getLang());
export const localHref = (href: string) => localePath(getLang(), href);
