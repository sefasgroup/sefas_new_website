import { PageShell } from "@/app/_components/PageShell";
import { Companies } from "@/app/_components/home/Companies";
import { Network } from "@/app/_components/home/Network";
import { uiText, pageLang } from "@/app/_i18n/server";
import { sectionMetadata } from "@/app/_libs/page-metadata";

type Props = { params: Promise<{ lang: string }> };

export const generateMetadata = ({ params }: Props) => sectionMetadata(params, "network");

export default async function NetworkPage({ params }: Props) {
  await pageLang(params);
  const t = uiText().network;
  return (
    <PageShell eyebrow={t.eyebrow} light={t.hero[0]} strong={t.hero[1]} image="/images/crew/img-marine.jpg">
      <Network />
      <Companies />
    </PageShell>
  );
}
