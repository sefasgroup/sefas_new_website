import { headers } from "next/headers";
import "../styles/index.css";
import { roboto } from "./_libs/fonts";
import { Providers } from "./providers";
import { LANG_HEADER } from "./_i18n/locales";
import { LangProvider } from "./_i18n/LangProvider";
import NotFound from "./[lang]/(routes)/not-found";

export default async function RootNotFound() {
  const lang = (await headers()).get(LANG_HEADER) === "id" ? "id" : "en";
  return (
    <html lang={lang} className={roboto.variable} suppressHydrationWarning>
      <body>
        <LangProvider lang={lang}>
          <Providers>
            <NotFound />
          </Providers>
        </LangProvider>
      </body>
    </html>
  );
}
