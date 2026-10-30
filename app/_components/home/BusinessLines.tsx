import { HOME_ONLY } from "@/app/_configs/launch";
import Image from "next/image";
import { content } from "@/app/_content";
import { localHref, uiText } from "@/app/_i18n/server";
import { resizedSrc } from "@/app/_libs/utils";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Pinned } from "../../_ui/Pinned";

type Line = ReturnType<typeof content>["home"]["businessLines"][number];

export function BusinessLines() {
  const { businessLines, companies } = content().home;
  const logoOf = (name: string) => companies.find((c) => c.name === name)?.logo;
  const t = uiText().home;
  const steps = businessLines.length - 1;
  const number = (n: number) => String(n + 1).padStart(2, "0");

  const heading = (
    <h2 className="text-3xl leading-display font-medium tracking-tighter text-balance uppercase xl:text-5xl">
      {t.businessesHeading.join(" ")}
    </h2>
  );

  const card = (line: Line, n: number) => (
    <div
      className={`flex h-full flex-col rounded-sm p-6 md:p-10 lg:short:p-6 ${n % 2 ? "bg-text-primary text-surface-base" : "bg-surface-raised"}`}
    >
      <div className="flex flex-1 flex-col justify-between gap-10 lg:short:gap-4">
        <p className="text-accent text-7xl leading-none font-medium tracking-tighter xl:text-8xl lg:short:text-[clamp(2.5rem,8svh,4.5rem)] xl:short:text-[clamp(2.5rem,8svh,4.5rem)]">
          {number(n)}
        </p>
        <div>
          <h3 className="text-3xl leading-none font-medium tracking-tight uppercase xl:text-4xl">
            {line.name}
          </h3>
          <p className="mt-4 max-w-md leading-snug opacity-80">{line.body}</p>
          <ul className="mt-6 text-sm lg:short:grid lg:short:grid-cols-2 lg:short:gap-x-6">
            {line.links.map((link) => (
              <li key={link.href}>
                {HOME_ONLY ? (
                  <span className="block border-t border-current/20 py-2.5">{link.label}</span>
                ) : (
                  <a
                    href={localHref(link.href)}
                    className="hover:text-accent flex items-center justify-between border-t border-current/20 py-2.5 transition-colors"
                  >
                    {link.label}
                    <span aria-hidden>→</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
          <ul className="mt-8 grid grid-cols-3 items-center gap-x-6 gap-y-4">
            {line.companies.map((name) => {
              const logo = logoOf(name);
              return (
                <li key={name}>
                  {logo ? (
                    <img
                      src={resizedSrc(logo, 256)}
                      srcSet={`${resizedSrc(logo, 256)} 1x, ${resizedSrc(logo, 384)} 2x`}
                      loading="lazy"
                      alt={name}
                      className={`h-6 w-auto max-w-full object-contain object-left xl:h-7 ${n % 2 ? "brightness-0 invert" : "mix-blend-multiply"}`}
                    />
                  ) : (
                    <span className="label-mono opacity-70">{name}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div id="businesses" className="mt-28 md:mt-40">
      <Pinned
        screens={businessLines.length}
        className="hidden lg:block"
        frameClassName="flex items-center pt-16"
      >
        <div className="container-page w-full">
          <Eyebrow className="mb-6">{t.businesses}</Eyebrow>
          <div className="grid h-[min(78svh,50rem)] short:h-[calc(100svh-6rem-2.75rem)] w-full grid-cols-2 gap-4">
            <div className="bg-text-primary text-surface-base relative flex flex-col justify-between overflow-hidden rounded-sm p-10 xl:p-14">
              {businessLines.map((line, n) => (
                <Image
                  key={line.name}
                  src={line.image}
                  alt={line.alt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                  style={{
                    opacity: n
                      ? `clamp(0, calc((var(--p) * ${steps} - ${n} + 0.9) * 1.6), 1)`
                      : undefined,
                  }}
                />
              ))}
              <div className="from-text-primary/80 to-text-primary/70 absolute inset-0 bg-linear-to-b via-transparent" />
              <div className="relative">{heading}</div>
              <div className="bg-surface-base/15 relative h-0.5">
                <div
                  className="bg-surface-base absolute inset-0 origin-left"
                  style={{
                    transform: `scaleX(calc(${1 / businessLines.length} + var(--p) * ${steps / businessLines.length}))`,
                  }}
                />
              </div>
            </div>

            <div className="relative overflow-hidden rounded-sm">
              {businessLines.map((line, n) => (
                <div
                  key={line.name}
                  className="absolute inset-0 will-change-transform"
                  style={{
                    transform: n
                      ? `translateY(clamp(0%, calc((${n} - 0.3 - var(--p) * ${steps}) * 180%), 110%))`
                      : undefined,
                  }}
                >
                  {card(line, n)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Pinned>

      <section className="container-page space-y-3 lg:hidden">
        <Eyebrow className="pb-3">{t.businesses}</Eyebrow>
        <div className="bg-text-primary text-surface-base relative flex aspect-4/3 items-end overflow-hidden rounded-sm p-6 md:aspect-video md:p-10">
          <Image
            src={businessLines[0].image}
            alt={businessLines[0].alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="from-text-primary/80 absolute inset-0 bg-linear-to-t to-transparent" />
          <div className="relative">{heading}</div>
        </div>
        {businessLines.map((line, n) => (
          <div key={line.name}>{card(line, n)}</div>
        ))}
      </section>
    </div>
  );
}
