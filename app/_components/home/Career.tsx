import { JOBS_URL } from "@/app/_configs/home";
import { uiText } from "@/app/_i18n/server";
import { Button } from "../../_ui/Button";
import { Eyebrow } from "../../_ui/Eyebrow";
import { CareerPhotos } from "./CareerPhotos";

const PHOTOS = [
  "/images/crew/img-career-grow.jpg",
  "/images/crew/img-career-belong.jpg",
  "/images/crew/img-career-legacy.jpg",
];

export function Career() {
  const t = uiText().home;
  return (
    <section id="career" className="mt-28 grid md:mt-40 md:grid-cols-12">
      <div className="bg-text-primary/5 flex flex-col justify-center px-4 py-16 md:col-span-7 md:px-16 md:py-24 xl:px-24">
        <Eyebrow>{t.careers}</Eyebrow>
        <h2 className="mt-6 max-w-xl text-4xl leading-display font-medium tracking-tighter md:text-6xl">
          {t.careersHeading}
        </h2>
        <p className="text-text-secondary mt-8 max-w-xl text-lg leading-relaxed">{t.careersBody}</p>
        <Button href={JOBS_URL} className="mt-10">
          {t.careersButton}
        </Button>
      </div>

      <div className="bg-text-primary relative min-h-[28rem] overflow-hidden md:col-span-5 md:min-h-0">
        <CareerPhotos photos={PHOTOS} words={t.careersWords} alt={t.careersPhoto} />
      </div>
    </section>
  );
}
