import type { Metadata } from "next";
import { PageShell } from "@/app/_components/PageShell";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { Network } from "@/app/_components/home/Network";
import { uiText, pageLang } from "@/app/_i18n/server";
import { pageMeta } from "@/app/_i18n/locales";
import { ui } from "@/app/_i18n/ui";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lang = await pageLang(params);
  const t = ui(lang);
  return pageMeta(lang, "/contact", t.site.pageTitle(t.contact.title), t.contact.description);
}

export default async function ContactPage({ params }: Props) {
  await pageLang(params);
  const t = uiText().contact;
  return (
    <PageShell flush half titleHidden light={t.hero[0]} strong={t.hero[1]} image="/images/crew/img-fleet.jpg">
      <FinalCta seamless />
      <Network />
    </PageShell>
  );
}
