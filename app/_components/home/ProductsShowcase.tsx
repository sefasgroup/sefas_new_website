import Image from "next/image";
import { content } from "@/app/_content";
import { localHref, uiText } from "@/app/_i18n/server";
import { cn } from "@/app/_libs/utils";
import { Button } from "../../_ui/Button";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Parallax } from "../../_ui/Parallax";

export function ProductsShowcase() {
  const { home, catalogue } = content();
  const { products } = home;
  const { productsIn } = catalogue;
  const t = uiText();
  return (
    <section id="products" aria-label={t.home.whatWeSupply} className="pt-28 md:pt-40">
      <div className="container-page">
        <Eyebrow>{t.home.whatWeSupply}</Eyebrow>
      </div>

      <div className="mt-14">
        {products.map((product, i) => (
          <article
            key={product.name}
            className="bg-surface-base md:sticky md:top-0 md:h-svh md:not-last:mb-[60svh]"
            style={{ zIndex: i + 1 }}
          >
            <div className="container-page grid h-full gap-5 pt-6 pb-16 md:grid-cols-12 md:gap-8 md:pt-24 md:pb-8">
              <div className="flex gap-4 md:col-span-6">
                <div className="relative aspect-4/5 flex-1 overflow-hidden rounded-sm md:aspect-auto">
                  <Parallax>
                    <Image
                      src={product.image}
                      alt={`${t.ranges[product.name]} — ${product.brands}`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </Parallax>
                </div>
                <ol aria-hidden className="hidden flex-col justify-end gap-3 md:flex">
                  {products.map((other, j) => (
                    <li
                      key={other.name}
                      className={
                        j === i
                          ? "bg-text-primary h-8 w-1 rounded-full"
                          : "bg-text-muted size-1 rounded-full"
                      }
                    />
                  ))}
                </ol>
              </div>

              <div className="flex flex-col md:col-span-6">
                <div className="border-border-default flex flex-1 flex-col md:border-l md:pl-8">
                  <h3 className="text-5xl leading-display-tight font-medium tracking-tighter md:text-7xl">
                    {t.ranges[product.name]}
                  </h3>

                  <div className="mt-5 md:mt-auto">
                    {(() => {
                      const logos = [
                        ...new Map(
                          productsIn(product.name as Parameters<typeof productsIn>[0])
                            .filter((f) => f.logo)
                            .map((f) => [f.logo!.src, f]),
                        ).values(),
                      ];
                      return (
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:gap-x-5">
                          {logos.slice(0, 6).map((f, j) => (
                            <Image
                              key={f.slug}
                              src={f.logo!.src}
                              alt={`${f.maker} ${f.mark}`}
                              width={f.logo!.width}
                              height={f.logo!.height}
                              className={cn("h-7 w-auto max-w-28 object-contain md:h-8", j >= 3 && "max-md:hidden")}
                            />
                          ))}
                          {logos.length > 3 && (
                            <span className="label-mono text-text-muted md:hidden">{t.home.more(logos.length - 3)}</span>
                          )}
                          {logos.length > 6 && (
                            <span className="label-mono text-text-muted max-md:hidden">
                              {t.home.more(logos.length - 6)}
                            </span>
                          )}
                        </div>
                      );
                    })()}
                    <p className="mt-5 max-w-lg text-2xl leading-tight font-medium tracking-tight text-balance">
                      {product.headline}
                    </p>
                    <p className="text-text-secondary mt-4 max-w-lg leading-relaxed">
                      {product.body}
                    </p>
                    <Button
                      href={localHref(`/products#${product.name.toLowerCase()}`)}
                      variant="outline"
                      className="mt-6"
                    >
                      {t.home.discover(t.ranges[product.name].toLowerCase())}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
