"use client";

import { useLang } from "../_i18n/LangProvider";
import { getContent } from "@/app/_content";

export const useContent = () => getContent(useLang());
