"use client";

import { useLang } from "./LangProvider";
import { localePath } from "./locales";
import { ui } from "./ui";

export const useUi = () => ui(useLang());
export function useLocalePath() {
  const lang = useLang();
  return (href: string) => localePath(lang, href);
}
