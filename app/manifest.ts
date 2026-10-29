import type { MetadataRoute } from "next";
import { BRAND } from "./_server/brand-colours";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SEFAS Group",
    short_name: "SEFAS",
    start_url: "/",
    display: "browser",
    theme_color: BRAND.accent,
    background_color: BRAND.surface,
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
