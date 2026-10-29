import { uiText } from "@/app/_i18n/server";
import { Eyebrow } from "../../_ui/Eyebrow";
import { Heading } from "../../_ui/Heading";
import { NetworkMap } from "./NetworkMap";

export function Network() {
  const t = uiText().home;
  return (
    <section id="network" className="mt-28 bg-text-primary text-surface-base md:mt-40 [#contact+&]:mt-0">
      <NetworkMap>
        <Eyebrow>{t.network}</Eyebrow>
        <Heading light={t.networkHeading[0]} strong={t.networkHeading[1]} className="mt-6 md:text-5xl" />
        <p className="mt-5 max-w-md leading-relaxed opacity-70">
          {t.networkBody}
        </p>
      </NetworkMap>
    </section>
  );
}
