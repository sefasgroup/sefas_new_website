import { contact, WHATSAPP_URL } from "@/app/_configs/home";
import { uiText } from "@/app/_i18n/server";
import { cn } from "@/app/_libs/utils";
import { Button } from "../../_ui/Button";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Heading } from "../../_ui/Heading";
import { ContactForm } from "./ContactForm";

export function FinalCta({ seamless = false }: { seamless?: boolean }) {
  const t = uiText();
  return (
    <section
      id="contact"
      className={cn("bg-text-primary text-surface-base relative", !seamless && "border-surface-base/15 border-t")}
    >
      {seamless && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-full"
          style={{ height: "10rem", background: "linear-gradient(to top, var(--color-text-primary), transparent)" }}
        />
      )}
      <div className={cn("container-page grid gap-14 py-24 md:grid-cols-2 md:py-32", seamless && "pt-8 md:pt-12")}>
        <div>
          <Eyebrow>{t.home.getInTouch}</Eyebrow>
          <Heading light={t.home.ctaHeading[0]} strong={t.home.ctaHeading[1]} className="mt-6" />
          <p className="mt-6 max-w-md leading-relaxed opacity-70">
            {t.home.ctaBody}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={WHATSAPP_URL}>{t.common.chatWhatsApp}</Button>
            <Button href={`mailto:${contact.email}`} variant="inverse">
              {contact.email}
            </Button>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
