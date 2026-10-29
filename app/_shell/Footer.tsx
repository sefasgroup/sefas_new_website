import { JOBS_URL } from "@/app/_configs/home";
import { HOME_ONLY } from "@/app/_configs/launch";
import Image from "next/image";
import Link from "next/link";
import { socials } from "@/app/_content/contact";
import { content } from "@/app/_content";
import { localHref, uiText } from "@/app/_i18n/server";
import { telHref } from "@/app/_libs/utils";
import { Button, isExternalHref } from "../_ui/Button";

const homeColumns = [
  [
    { key: "career", href: JOBS_URL },
    { key: "cookies", href: "/legal/cookies" },
  ],
] as const;

const pageColumns = [
  [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "companies", href: "/companies" },
    { key: "products", href: "/products" },
    { key: "services", href: "/services" },
    { key: "career", href: "https://career.sefasgroup.com/" },
    { key: "blog", href: "/blog" },
  ],
  [
    { key: "privacy", href: "/legal/privacy" },
    { key: "terms", href: "/legal/terms" },
    { key: "cookies", href: "/legal/cookies" },
  ],
] as const;

const columns = HOME_ONLY ? homeColumns : pageColumns;

export function Footer() {
  const { contact } = content().home;
  const t = uiText().footer;
  const home = localHref("/");
  return (
    <footer className="bg-accent text-surface-base">
      <div className="container-page py-14 md:py-20">
        <div className="border-surface-base/30 flex flex-wrap items-end justify-between gap-8 border-b pb-10 md:pb-14">
          <p className="text-5xl leading-display font-medium tracking-tighter md:text-7xl">
            {t.letsTalk}
          </p>
          <Button href={HOME_ONLY ? `${home}#contact` : localHref("/contact")} variant="dark">
            {uiText().common.contactUs}
          </Button>
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-12 md:pt-12">
          <address className="label-sans space-y-1 leading-relaxed not-italic md:col-span-5">
            <Image
              src="/images/brand/img-sefas-logo-white.png"
              alt="SEFAS"
              width={1200}
              height={213}
              className="mb-6 h-6 w-auto"
            />
            <p>SEFAS Group</p>
            <p>Jl. Cideng Timur No. 70</p>
            <p>Jakarta Pusat 10150, Indonesia</p>
            <p className="pt-3">
              <a href={`mailto:${contact.email}`} className="normal-case hover:underline">
                {contact.email}
              </a>
            </p>
            <p>
              <a href={telHref(contact.phone)} className="hover:underline">
                {contact.phone}
              </a>
            </p>
          </address>

          {columns.map((links, i) => (
            <ul key={i} className="label-sans space-y-4 md:col-span-2">
              {links.map((link) => (
                <li key={link.key}>
                  {isExternalHref(link.href) ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      {t.links[link.key]}
                    </a>
                  ) : (
                    <Link
                      href={localHref(link.href)}
                      className="opacity-80 transition-opacity hover:opacity-100"
                    >
                      {t.links[link.key]}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          ))}

          <div className="md:col-span-3">
            <p className="label-sans">{t.followUs}</p>
            <ul className="label-sans mt-4 space-y-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-80 transition-opacity hover:opacity-100"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-6 md:mt-20">
          <p className="label-sans opacity-70">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
