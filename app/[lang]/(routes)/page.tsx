import { HOME_ONLY } from "@/app/_configs/launch";
import { BreadcrumbJsonLd } from "@/app/_components/BreadcrumbJsonLd";
import { Footer } from "@/app/_shell/Footer";
import { Header } from "@/app/_shell/Header";
import { FooterReveal } from "@/app/_ui/FooterReveal";
import { Awards } from "@/app/_components/home/Awards";
import { BusinessLines } from "@/app/_components/home/BusinessLines";
import { Career } from "@/app/_components/home/Career";
import { Companies } from "@/app/_components/home/Companies";
import { FinalCta } from "@/app/_components/home/FinalCta";
import { Hero } from "@/app/_components/home/Hero";
import { IndustryCases } from "@/app/_components/home/IndustryCases";
import { Insights } from "@/app/_components/home/Insights";
import { Intro } from "@/app/_components/home/Intro";
import { Network } from "@/app/_components/home/Network";
import { Stories } from "@/app/_components/home/Stories";
import { uiText, pageLang } from "@/app/_i18n/server";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  await pageLang(params);
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: uiText().footer.links.home, path: "/" }]} />
      <Header />
      <main className="bg-surface-base relative z-10">
        <Hero />
        <div className="bg-surface-base relative z-10">
          <Intro />
          <BusinessLines />
          <IndustryCases />
          <Companies />
          <Stories />
          <Awards />
          {!HOME_ONLY && <Insights />}
          <Career />
          <Network />
          <FinalCta />
        </div>
      </main>
      <FooterReveal>
        <Footer />
      </FooterReveal>
    </>
  );
}
