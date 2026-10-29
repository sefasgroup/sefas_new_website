import * as catalogueEn from "../_configs/catalogue";
import * as homeEn from "../_configs/home";
import * as pagesEn from "../_configs/pages";
import * as catalogueId from "../_configs/id/catalogue";
import * as homeId from "../_configs/id/home";
import * as pagesId from "../_configs/id/pages";
import type { Lang } from "../_i18n/locales";
import { getLang } from "../_i18n/server";

export interface Content {
  home: typeof homeEn;
  pages: typeof pagesEn;
  catalogue: typeof catalogueEn;
}

const CONTENT: Record<Lang, Content> = {
  en: { home: homeEn, pages: pagesEn, catalogue: catalogueEn },
  id: {
    home: homeId as Content["home"],
    pages: pagesId as Content["pages"],
    catalogue: catalogueId as Content["catalogue"],
  },
};

export const getContent = (lang: Lang): Content => CONTENT[lang];

export const content = () => getContent(getLang());
