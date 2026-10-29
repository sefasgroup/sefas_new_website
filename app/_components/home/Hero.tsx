import { HOME_ONLY } from "@/app/_configs/launch";
import { content } from "@/app/_content";
import { resizedSrc } from "@/app/_libs/utils";
import { localHref, uiText } from "@/app/_i18n/server";
import { BackgroundVideo } from "../../_ui/BackgroundVideo";
import { Button } from "../../_ui/Button";
import { WordReveal } from "../../_ui/WordReveal";
import { Parallax } from "../../_ui/Parallax";
import { Eyebrow } from "../../_ui/Eyebrow";

const STRIP_GROUPS: { lockup?: string; companies: string[] }[] = [
  {
    lockup: "/images/brand/img-shell-lubricants-distributor-white.png",
    companies: [
      "Sefas Pelindotama",
      "Sefas Keliantama",
      "Tribina Panutan",
      "Sinergi Semesta Pratama",
      "Pancaputra Mitratama Mandiri",
    ],
  },
  {
    lockup: "/images/brand/img-shell-marine-distributor-white.webp",
    companies: ["Cahaya Samoedera Bersaudara", "Energi Hijau Samoedera Bersaudara"],
  },
  { lockup: "/images/brand/img-shell-licensee-white.png", companies: ["Isla Energy Indonesia"] },
  { companies: ["Blue Coolant Indonesia"] },
  { companies: ["Rekadaya Sarana Energi"] },
];

export function Hero() {
  const { companies, hero } = content().home;
  const t = uiText().home;
  const logoOf = (name: string) => companies.find((c) => c.name === name);
  const strip = STRIP_GROUPS.flatMap((group) => [
    ...(group.lockup
      ? [{ key: group.lockup, src: group.lockup, lockup: true, white: true, opens: true }]
      : []),
    ...group.companies.flatMap((name, i) => {
      const c = logoOf(name);
      const src = c?.logoWhite ?? c?.logo;
      return src
        ? [
            {
              key: name,
              src,
              lockup: false,
              white: !!c?.logoWhite,
              opens: !group.lockup && i === 0,
            },
          ]
        : [];
    }),
  ]);
  return (
    <section
      id="top"
      className="bg-text-primary text-surface-base sticky top-0 flex h-svh flex-col overflow-hidden"
    >
      <Parallax>
        <BackgroundVideo
          className="h-full w-full object-cover"
          poster={hero.video.poster}
          sources={hero.video.sources}
          phone
        />
      </Parallax>
      <div className="from-text-primary/85 via-text-primary/25 to-text-primary/40 absolute inset-0 bg-linear-to-t" />

      <div className="container-page relative flex flex-1 flex-col justify-end pt-24 pb-10 md:pb-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Eyebrow className="mb-6">{hero.eyebrow}</Eyebrow>
            <h1 className="max-w-2xl text-3xl leading-display font-medium tracking-tighter md:max-w-4xl md:text-4xl xl:text-5xl [@media(max-height:560px)]:text-2xl">
              <span className="block">
                <WordReveal text={hero.titleLight} />
              </span>
              <span className="block">
                <WordReveal
                  text={hero.titleStrong}
                  delay={hero.titleLight.split(" ").length * 45}
                />
              </span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-90 md:max-w-xl md:text-base [@media(max-height:560px)]:hidden">
              {hero.body}
            </p>
          </div>
          <Button
            href={HOME_ONLY ? "#contact" : localHref("/contact")}
            size="sm"
            className="shrink-0 self-start lg:self-auto"
          >
            {t.partnerWithUs}
          </Button>
        </div>
      </div>

      <div className="border-surface-base/15 relative border-t">
        <p className="sr-only">{t.groupCompanies(companies.map((c) => c.name).join(", "))}</p>
        <div
          aria-hidden
          className="overflow-hidden py-5 md:py-6"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul
            className="animate-marquee flex w-max items-center"
            style={{ animationDuration: "45s" }}
          >
            {[...strip, ...strip].map((logo, i) => (
              <li
                key={`${logo.key}-${i}`}
                className={`shrink-0 ${logo.opens ? "border-surface-base/25 mr-8 ml-12 border-l pl-20 md:mr-12 md:ml-16 md:pl-28" : "mx-8 md:mx-12"}`}
              >
                <img
                  src={resizedSrc(logo.src, 256)}
                  srcSet={`${resizedSrc(logo.src, 256)} 1x, ${resizedSrc(logo.src, 384)} 2x`}
                  fetchPriority="low"
                  alt=""
                  className={
                    logo.lockup
                      ? "h-8 w-auto md:h-9"
                      : `h-7 w-auto opacity-80 md:h-8 ${logo.white ? "" : "brightness-0 invert"}`
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
