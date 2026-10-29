import type { Lang } from "./locales";

const STATUS_PAGES = {
  en: {
    notFound: {
      title: "Page not found",
      body: "The page you are looking for does not exist or has moved.",
      home: "Back to home",
    },
    error: {
      title: "Something went wrong",
      body: "An unexpected error stopped this page from loading. Try again, or contact us if it keeps happening.",
      retry: "Try again",
    },
  },
  id: {
    notFound: {
      title: "Halaman tidak ditemukan",
      body: "Halaman yang Anda cari tidak ada atau sudah dipindahkan.",
      home: "Kembali ke beranda",
    },
    error: {
      title: "Terjadi kesalahan",
      body: "Kesalahan tak terduga menghentikan halaman ini. Coba lagi, atau hubungi kami jika terus terjadi.",
      retry: "Coba lagi",
    },
  },
} as const satisfies Record<Lang, unknown>;

export const statusPages = (lang: Lang) => STATUS_PAGES[lang];
