import Image from "next/image";
import { content } from "@/app/_content";
import { uiText } from "@/app/_i18n/server";
import { Eyebrow } from "../../_ui/Eyebrow";

export function Companies() {
  const { companies } = content().home;
  const t = uiText().home;
  return (
    <section id="companies" className="container-page pt-28 md:pt-40">
      <Eyebrow>{t.groupCompaniesEyebrow}</Eyebrow>
      <p className="mt-6 max-w-3xl text-2xl font-medium tracking-tight md:text-3xl">{t.groupCompaniesLine}</p>
      <ul className="mt-10 grid grid-cols-2 border-t border-l border-border-default md:grid-cols-4">
        {companies.map((company) => {
          const body = (
            <>
              <div className="relative flex h-9 items-center">
                {company.logo ? (
                  <Image src={company.logo} alt={company.name} fill sizes="240px" quality={100} className="object-contain object-left mix-blend-multiply" />
                ) : (
                  <span className="text-lg leading-tight font-medium tracking-tight">{company.name}</span>
                )}
              </div>
              <p className="mt-8 text-sm font-medium">
                {company.name}
                {company.url && <span aria-hidden className="text-accent"> ↗</span>}
              </p>
              {company.focus && <p className="label-mono mt-1 text-text-muted">{company.focus}</p>}
            </>
          );
          return (
            <li key={company.name} className="border-r border-b border-border-default transition-colors hover:bg-surface-raised">
              {company.url ? (
                <a href={company.url} target="_blank" rel="noopener noreferrer" className="block h-full p-6">
                  {body}
                </a>
              ) : (
                <div className="h-full p-6">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
