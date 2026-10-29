import { PageShell } from "@/app/_components/PageShell";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { Eyebrow } from "@/app/_ui/Eyebrow";
import { Heading } from "@/app/_ui/Heading";
import { FloatingSectionNav } from "@/app/_ui/FloatingSectionNav";
import { ShellBadge } from "@/app/_ui/ShellBadge";
import { content } from "@/app/_content";
import { uiText, pageLang } from "@/app/_i18n/server";
import { sectionMetadata } from "@/app/_libs/page-metadata";
import { PackagingGrid } from "@/app/_features/products/components/PackagingGrid";
import { RangeBlock } from "@/app/_features/products/components/RangeBlock";

type Props = { params: Promise<{ lang: string }> };

export const generateMetadata = ({ params }: Props) => sectionMetadata(params, "products");

export default async function ProductsPage({ params }: Props) {
  await pageLang(params);
  const { products } = content().home;
  const { productsIn } = content().catalogue;
  const t = uiText();
  return (
    <PageShell
      flush
      eyebrow={t.products.eyebrow}
      light={t.products.hero[0]}
      strong={t.products.hero[1]}
      image="/videos/pages/img-products.jpg"
      video="/videos/pages/products"
    >
      <section className="container-page grid gap-10 pt-28 md:grid-cols-12 md:pt-40">
        <div className="md:col-span-6">
          <Eyebrow>{t.products.whatWeSupply}</Eyebrow>
          <Heading
            light={t.products.heading[0]}
            strong={t.products.heading[1]}
            className="mt-6"
          />
        </div>
        <div className="md:col-span-5 md:col-start-8 md:self-end">
          <ShellBadge />
          <p className="text-text-secondary mt-6 text-lg leading-relaxed">
            {t.products.body}
          </p>
        </div>
      </section>

      <div className="mt-14">
        <FloatingSectionNav
          label={t.products.ranges}
          items={products.map((p) => ({ id: p.name.toLowerCase(), label: t.ranges[p.name] }))}
        />
        <div className="container-page mt-16 space-y-24 md:mt-24 md:space-y-36">
          {products.map((p) => (
            <RangeBlock
              key={p.name}
              name={p.name}
              body={p.body}
              families={productsIn(p.name as Parameters<typeof productsIn>[0])}
            />
          ))}
        </div>
      </div>

      <PackagingGrid />
      <FinalCta />
    </PageShell>
  );
}
