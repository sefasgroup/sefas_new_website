import { content } from "@/app/_content";
import { uiText } from "@/app/_i18n/server";
import { cn } from "@/app/_libs/utils";
import Image from "next/image";
import { Footer } from "../_shell/Footer";
import { Header } from "../_shell/Header";
import { Eyebrow } from "../_ui/Eyebrow";
import { FooterReveal } from "../_ui/FooterReveal";
import { Heading } from "../_ui/Heading";
import { Parallax } from "../_ui/Parallax";

export function PageShell({
  eyebrow,
  light,
  strong,
  image,
  video,
  flush = false,
  half = false,
  titleHidden = false,
  children,
}: {
  eyebrow?: string;
  light: string;
  strong?: string;
  image: string;
  video?: string;
  flush?: boolean;
  half?: boolean;
  titleHidden?: boolean;
  children: React.ReactNode;
}) {
  const { hero } = content().home;
  return (
    <>
      <Header />
      <main className={cn("bg-surface-base relative z-10", !flush && "pb-28 md:pb-40")}>
        <section
          id="top"
          className={cn(
            "bg-text-primary text-surface-base sticky top-0 flex flex-col justify-end overflow-hidden",
            half ? "h-[50svh] min-h-96" : "h-svh min-h-120",
          )}
        >
          <Parallax>
            {video ? (
              <video
                className="h-full w-full object-cover opacity-70"
                poster={image}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden
              >
                <source
                  src={`${video}-2k.mp4`}
                  media={hero.video.sources[1].media}
                  type="video/mp4"
                />
                <source src={`${video}-1080.mp4`} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-70"
              />
            )}
          </Parallax>
          <div
            className={cn(
              "absolute inset-0 bg-linear-to-t",
              half
                ? "from-text-primary via-text-primary/40 to-text-primary/40"
                : "from-text-primary/80 via-text-primary/20 to-text-primary/40",
            )}
          />
          <div className="container-page relative pb-8">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Heading
              as="h1"
              light={light}
              strong={strong}
              className={cn("max-w-4xl md:text-7xl", eyebrow && "mt-5", titleHidden && "sr-only")}
            />
            {!half && (
              <a
                href="#content"
                className="group border-surface-base/20 mt-12 flex items-center justify-between border-t pt-5"
              >
                <span className="border-surface-base/40 group-hover:bg-surface-base group-hover:text-text-primary flex size-9 items-center justify-center overflow-hidden rounded-sm border transition-colors">
                  <ScrollArrow />
                </span>
                <span className="label-mono opacity-80">{uiText().common.scrollToExplore}</span>
              </a>
            )}
          </div>
        </section>
        <div id="content" className="bg-surface-base relative z-10">
          {children}
        </div>
      </main>
      <FooterReveal>
        <Footer />
      </FooterReveal>
    </>
  );
}

function ScrollArrow() {
  return (
    <svg
      viewBox="0 0 9 11"
      aria-hidden
      className="animate-scroll-arrow h-2.5 w-2 motion-reduce:animate-none"
    >
      <path d="M4.5 10V0M.5 6l4 4 4-4" fill="none" stroke="currentColor" />
    </svg>
  );
}
