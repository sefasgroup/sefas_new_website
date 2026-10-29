import { headers } from "next/headers";
import { Footer } from "@/app/_shell/Footer";
import { Header } from "@/app/_shell/Header";
import { Button } from "@/app/_ui/Button";
import { Eyebrow } from "@/app/_ui/Eyebrow";
import { FooterReveal } from "@/app/_ui/FooterReveal";
import { Heading } from "@/app/_ui/Heading";
import { WHATSAPP_URL } from "@/app/_configs/home";
import { localHref, uiText, getLang, pageLang } from "@/app/_i18n/server";
import { statusPages } from "@/app/_i18n/status-pages";

export default async function NotFound() {
  await pageLang(Promise.resolve({ lang: (await headers()).get("x-lang") ?? "en" }));
  const t = statusPages(getLang()).notFound;
  return (
    <>
      <Header />
      <main id="main" className="bg-text-primary text-surface-base relative z-10 flex min-h-svh items-end">
        <div className="container-page pt-40 pb-16 md:pb-24">
          <Eyebrow>404</Eyebrow>
          <Heading as="h1" light={t.title} className="mt-6 max-w-4xl md:text-7xl" />
          <p className="mt-6 max-w-md leading-relaxed opacity-70">{t.body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={localHref("/")}>{t.home}</Button>
            <Button href={WHATSAPP_URL} variant="inverse">
              {uiText().common.chatWhatsApp}
            </Button>
          </div>
        </div>
      </main>
      <FooterReveal>
        <Footer />
      </FooterReveal>
    </>
  );
}
