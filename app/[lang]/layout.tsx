import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../../styles/index.css";
import { roboto } from "../_libs/fonts";
import { Providers } from "../providers";
import { CookieBanner } from "../_shell/CookieBanner";
import { PageTransition } from "../_shell/PageTransition";
import { WhatsAppButton } from "../_shell/WhatsAppButton";
import { Splash } from "../_shell/Splash";
import { LangProvider } from "../_i18n/LangProvider";
import { contact } from "../_configs/home";
import { organization, postalAddress, socials } from "../_content/contact";
import { isLang, type Lang, LANGS, pageMeta, SITE_URL } from "../_i18n/locales";
import { ui } from "../_i18n/ui";

export const generateStaticParams = () => LANGS.map((lang) => ({ lang }));

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = ui(lang).site;
  return { metadataBase: new URL(SITE_URL), ...pageMeta(lang, "/", t.title, t.description) };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const jsonLd = (lang: Lang) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: organization.name,
      url: SITE_URL,
      logo: `${SITE_URL}/images/brand/img-sefas-logo.png`,
      foundingDate: organization.foundingDate,
      email: contact.email,
      telephone: contact.phone,
      address: postalAddress,
      sameAs: socials.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: organization.name,
      inLanguage: lang === "en" ? "en-US" : "id-ID",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
});

export default async function RootLayout({ children, params }: Props & { children: React.ReactNode }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return (
    <html lang={lang} className={roboto.variable} suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }} />
        <LangProvider lang={lang}>
          <Splash />
          <CookieBanner />
          <Providers>{children}</Providers>
          <PageTransition />
          <WhatsAppButton />
        </LangProvider>
      </body>
    </html>
  );
}
