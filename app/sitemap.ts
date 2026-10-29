import type { MetadataRoute } from "next";
import { localePath, SITE_URL } from "./_i18n/locales";

const LIVE_PATHS = ["/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return LIVE_PATHS.flatMap((path) => {
    const languages = { en: SITE_URL + path, id: SITE_URL + localePath("id", path) };
    return [
      { url: languages.en, alternates: { languages } },
      { url: languages.id, alternates: { languages } },
    ];
  });
}
