import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/app/_shell/Footer";
import { ArrowIcon } from "@/app/_components/Icons";
import { Header } from "@/app/_shell/Header";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { PackIcon } from "@/app/_features/products/components/PackIcon";
import { ProductTile } from "@/app/_features/products/components/ProductTile";
import { Wordmark } from "@/app/_features/products/components/Wordmark";
import { Button } from "@/app/_ui/Button";
import { FooterReveal } from "@/app/_ui/FooterReveal";
import { catalogue as CATALOGUE_EN } from "@/app/_configs/catalogue";
import { content } from "@/app/_content";
import { localHref, uiText, pageLang } from "@/app/_i18n/server";
import { pageMeta } from "@/app/_i18n/locales";
import { WHATSAPP_URL } from "@/app/_configs/home";
import { cn } from "@/app/_libs/utils";

type Params = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return CATALOGUE_EN.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const lang = await pageLang(params);
  const p = content().catalogue.catalogue.find((x) => x.slug === slug);
  return p ? pageMeta(lang, `/products/${slug}`, `${p.maker} ${p.mark} — ${p.type} | SEFAS Group`, p.summary) : {};
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  await pageLang(params);
  const { PACKS, catalogue, productsIn } = content().catalogue;
  const t = uiText();
  const tp = t.products;
  const product = catalogue.find((p) => p.slug === slug);
  if (!product) notFound();
  const range = t.ranges[product.range] ?? product.range;
  const siblings = productsIn(product.range).filter((p) => p.slug !== slug);
  const used = PACKS.filter((pk) => product.grades.some((g) => g.packs.includes(pk.id)));
  const dark = !!product.image;

  return (
    <>
      <Header />
      <main className="bg-surface-base relative z-10">
        <div id="top" aria-hidden />

        <section
          className={cn(
            "relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16",
            dark
              ? "bg-text-primary text-surface-base lg:flex lg:min-h-[44rem] lg:items-center"
              : "bg-text-primary/5",
          )}
        >
          {product.image && (
            <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
              <Image
                src={product.image.src}
                alt=""
                fill
                priority
                sizes="58vw"
                className="object-cover object-[70%_60%]"
              />
              <div className="from-text-primary via-text-primary/40 absolute inset-0 bg-linear-to-r via-20% to-transparent to-45%" />
            </div>
          )}
          <div className="container-page relative grid w-full gap-10 md:grid-cols-12 md:items-center md:gap-16">
            <div className="md:col-span-6">
              <Link
                href={localHref(`/products#${product.range.toLowerCase()}`)}
                className={cn(
                  "group label-mono inline-flex items-center gap-3 transition-colors",
                  dark
                    ? "text-surface-base/70 hover:text-surface-base"
                    : "text-text-muted hover:text-text-primary",
                )}
              >
                <span
                  className={cn(
                    "flex size-9 items-center justify-center rounded-sm border transition-colors",
                    dark
                      ? "border-surface-base/40 group-hover:bg-surface-base group-hover:text-text-primary"
                      : "border-text-primary/30 group-hover:bg-text-primary group-hover:text-surface-base",
                  )}
                >
                  <ArrowIcon className="size-4 rotate-180" />
                </span>
                {tp.backTo(range)}
              </Link>
              <h1 className="mt-8">
                <Wordmark
                  product={product}
                  large
                  invert={dark ? "brightness-0 invert" : undefined}
                />
              </h1>
              <p className="label-mono mt-5">{product.type}</p>
              <p
                className={cn(
                  "mt-4 max-w-xl text-lg leading-relaxed",
                  dark ? "text-surface-base/75" : "text-text-secondary",
                )}
              >
                {product.summary}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={localHref("/contact")} variant={dark ? "inverse" : "primary"}>
                  {t.common.requestQuote}
                </Button>
                {product.brochure && (
                  <Button
                    href={product.brochure}
                    variant={dark ? "outlineInverse" : "outline"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tp.brochure}
                  </Button>
                )}
              </div>
              {product.image && (
                <dl className="border-surface-base/25 mt-10 grid max-w-xl grid-cols-3 border-t pt-5">
                  <div>
                    <dt className="label-mono text-surface-base/60">{tp.gradesLabel}</dt>
                    <dd className="mt-1 text-2xl font-medium tracking-tight">
                      {product.grades.length || "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="label-mono text-surface-base/60">{tp.packOptions}</dt>
                    <dd className="mt-1 text-2xl font-medium tracking-tight">
                      {used.length || tp.bulk}
                    </dd>
                  </div>
                  <div>
                    <dt className="label-mono text-surface-base/60">{tp.range}</dt>
                    <dd className="mt-1 text-2xl font-medium tracking-tight">{range}</dd>
                  </div>
                </dl>
              )}
            </div>
            {!product.image && (
              <dl className="border-border-strong divide-border-default divide-y rounded-sm border md:col-span-6">
                <div className="flex justify-between gap-4 p-5">
                  <dt className="text-text-muted">{tp.type}</dt>
                  <dd className="text-right font-medium">{product.type}</dd>
                </div>
                <div className="flex justify-between gap-4 p-5">
                  <dt className="text-text-muted">{tp.range}</dt>
                  <dd className="text-right font-medium">{range}</dd>
                </div>
                {product.grades.length > 0 && (
                  <div className="flex justify-between gap-4 p-5">
                    <dt className="text-text-muted">{tp.gradesLabel}</dt>
                    <dd className="text-right font-medium">{product.grades.length}</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4 p-5">
                  <dt className="text-text-muted">{tp.packaging}</dt>
                  <dd className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-right font-medium">
                    {used.length > 0
                      ? used.map((pk) => (
                          <span key={pk.id} className="flex items-center gap-1.5">
                            <PackIcon pack={pk.id} className="text-accent size-4" />
                            {pk.label}
                          </span>
                        ))
                      : (product.supply ?? tp.onRequest)}
                  </dd>
                </div>
              </dl>
            )}
            {product.image && (
              <figure className="relative aspect-5/4 overflow-hidden rounded-sm md:col-span-6 lg:hidden">
                <Image
                  src={product.image.src}
                  alt={product.image.caption}
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </figure>
            )}
          </div>
        </section>

        <section className="container-page py-16 md:py-24">
          <h2 className="text-3xl leading-display font-medium tracking-tighter md:text-5xl">
            {product.grades.length ? tp.gradesAndPackaging : tp.supply}
          </h2>
          {product.grades.length > 0 ? (
            <>
              <ul className="border-border-default divide-border-default mt-8 divide-y border-y md:hidden">
                {product.grades.map((g) => (
                  <li key={g.name} className="py-4">
                    <p className="text-lg">{g.name}</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {used
                        .filter((pk) => g.packs.includes(pk.id))
                        .map((pk) => {
                          const size = pk.sizes.find(
                            (sz) => sz.label === product.range || sz.label === "Capacity",
                          );
                          return (
                            <li
                              key={pk.id}
                              className="bg-surface-raised flex items-center gap-1.5 rounded-sm px-2.5 py-1.5 text-sm"
                            >
                              <PackIcon pack={pk.id} className="text-accent size-4" />
                              {pk.label}
                              {size && (
                                <span className="label-mono text-text-muted">{size.value}</span>
                              )}
                            </li>
                          );
                        })}
                    </ul>
                  </li>
                ))}
              </ul>
              <div className="relative mt-8 hidden overflow-x-auto md:block">
                <table className="w-full min-w-xl text-left">
                  <thead className="bg-text-primary text-surface-base">
                    <tr>
                      <th scope="col" className="px-4 py-4 font-medium md:px-6">
                        {tp.grade}
                      </th>
                      {used.map((pk) => {
                        const size = pk.sizes.find(
                          (sz) => sz.label === product.range || sz.label === "Capacity",
                        );
                        return (
                          <th
                            key={pk.id}
                            scope="col"
                            className="w-28 px-3 py-4 text-center font-medium"
                          >
                            <PackIcon pack={pk.id} className="text-accent mx-auto size-5" />
                            <span className="mt-1.5 block text-sm">{pk.label}</span>
                            {size && (
                              <span className="label-mono block opacity-60">{size.value}</span>
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {product.grades.map((g) => (
                      <tr
                        key={g.name}
                        className="even:bg-text-primary/5 border-border-default hover:bg-accent/10 border-b transition-colors"
                      >
                        <th
                          scope="row"
                          className="px-4 py-3.5 text-lg font-normal whitespace-nowrap md:px-6"
                        >
                          {g.name}
                        </th>
                        {used.map((pk) => (
                          <td key={pk.id} className="px-3 py-3.5 text-center">
                            {g.packs.includes(pk.id) ? (
                              <span className="bg-accent inline-block size-2.5 rounded-full">
                                <span className="sr-only">{tp.availableIn(pk.label)}</span>
                              </span>
                            ) : (
                              <span className="text-text-muted">
                                <span aria-hidden>–</span>
                                <span className="sr-only">{tp.notIn(pk.label)}</span>
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {used.length > 0 && (
                <div className="mt-14">
                  <p className="label-mono text-text-muted">{tp.packaging}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                    {used.map((pk) => {
                      const size = pk.sizes.find(
                        (sz) => sz.label === product.range || sz.label === "Capacity",
                      );
                      return (
                        <li key={pk.id} className="border-border-default rounded-sm border">
                          <div className="bg-text-primary/5 relative aspect-square">
                            <Image
                              src={pk.image}
                              alt={pk.label}
                              fill
                              sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                              className="object-contain p-5"
                            />
                          </div>
                          <div className="p-4">
                            <p className="flex items-center gap-2 font-medium tracking-tight">
                              <PackIcon pack={pk.id} className="text-accent size-4" />
                              {pk.label}
                            </p>
                            <p className="text-text-secondary mt-1 text-sm">
                              {size?.value ?? t.common.sizeOnRequest}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <p className="text-text-secondary mt-4 max-w-xl text-lg leading-relaxed">
              {product.supply ?? tp.askSizes}
            </p>
          )}
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={WHATSAPP_URL} variant="outline">
              {tp.askWhatsApp}
            </Button>
          </div>
          <p className="text-text-muted mt-6 text-sm leading-relaxed">{tp.dataSheets}</p>
        </section>

        {siblings.length > 0 && (
          <section className="container-page border-border-default border-t pt-16 pb-28 md:pb-40">
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{tp.moreIn(range)}</h2>
            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
              {siblings.map((p) => (
                <li key={p.slug}>
                  <ProductTile product={p} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <FinalCta />
      </main>
      <FooterReveal>
        <Footer />
      </FooterReveal>
    </>
  );
}
