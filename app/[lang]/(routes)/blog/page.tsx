import { PageShell } from "@/app/_components/PageShell";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { Insights } from "@/app/_components/home/Insights";
import { uiText, pageLang } from "@/app/_i18n/server";
import { sectionMetadata } from "@/app/_libs/page-metadata";

type Props = { params: Promise<{ lang: string }> };

export const generateMetadata = ({ params }: Props) => sectionMetadata(params, "blog");

export default async function BlogPage({ params }: Props) {
  await pageLang(params);
  const t = uiText().blog;
  return (
    <PageShell
      eyebrow={t.eyebrow}
      light={t.hero[0]}
      strong={t.hero[1]}
      image="/images/crew/img-warehouse.jpg"
      flush
    >
      <Insights viewAll={false} />
      <div className="pt-28 md:pt-40">
        <FinalCta />
      </div>
    </PageShell>
  );
}
