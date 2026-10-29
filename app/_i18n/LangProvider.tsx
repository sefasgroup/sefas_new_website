"use client";

import { createContext, useContext } from "react";
import type { Lang } from "./locales";

const LangContext = createContext<Lang>("en");

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LangContext value={lang}>{children}</LangContext>;
}

export const useLang = () => useContext(LangContext);
