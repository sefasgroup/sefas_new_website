import type { Product } from "@/app/_configs/catalogue";
import { uiText } from "@/app/_i18n/server";
import { ProductTile } from "./ProductTile";

export function RangeBlock({
  name,
  body,
  families,
}: {
  name: string;
  body: string;
  families: Product[];
}) {
  const types = [...new Set(families.map((f) => f.type))];
  const t = uiText();

  return (
    <section id={name.toLowerCase()} className="grid scroll-mt-28 gap-10 md:grid-cols-12">
      <div className="md:sticky md:top-28 md:col-span-5 md:self-start lg:col-span-4">
        <h2 className="text-4xl leading-display font-medium tracking-tighter md:text-5xl">{t.ranges[name] ?? name}</h2>
        <p className="text-text-secondary mt-4 leading-snug">{body}</p>

        {types.length > 1 && (
          <div className="border-border-strong mt-6 border-t pt-4">
            <h3 className="font-medium tracking-tight">{t.products.types}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {types.map((t) => (
                <li
                  key={t}
                  className="border-border-strong rounded-full border px-2.5 py-1 text-xs"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ul className="grid grid-cols-2 gap-3 md:col-span-7 lg:col-span-8 lg:grid-cols-3 xl:grid-cols-4">
        {families.map((f) => (
          <li key={f.slug}>
            <ProductTile product={f} />
          </li>
        ))}
      </ul>
    </section>
  );
}
