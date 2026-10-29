"use client";

import { useId } from "react";
import { useUi } from "@/app/_i18n/client";
import { INDUSTRY_KEYS, type ContactInput } from "@/app/_server/contact-schema";
import { cn } from "@/app/_libs/utils";
import { SubmitButton } from "../../_ui/Button";
import { ContactField } from "./ContactField";
import { useContactSubmit } from "./useContactSubmit";

const fieldClass =
  "w-full rounded-sm border border-surface-base/25 bg-transparent px-4 py-3 text-surface-base placeholder:text-surface-base/40 focus:border-accent focus:outline-none aria-invalid:border-status-negative";

export function ContactForm() {
  const t = useUi();
  const f = t.home.form;
  const uid = useId();
  const { state, submitting, onSubmit } = useContactSubmit();

  const control = (name: keyof ContactInput) => {
    const id = `${uid}-${name}`;
    const invalid = Boolean(state.errors[name]);
    return { id, name, "aria-invalid": invalid || undefined, "aria-describedby": invalid ? `${id}-error` : undefined };
  };
  const errorText = (name: keyof ContactInput) => {
    const code = state.errors[name];
    return code ? f.errors[code] : undefined;
  };

  return (
    <form className="grid gap-4 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
      <ContactField id={`${uid}-name`} label={f.name} error={errorText("name")}>
        <input className={fieldClass} {...control("name")} placeholder="Budi Santoso" autoComplete="name" required />
      </ContactField>
      <ContactField id={`${uid}-email`} label={f.email} error={errorText("email")}>
        <input
          className={fieldClass}
          {...control("email")}
          type="email"
          placeholder={f.emailPlaceholder}
          autoComplete="email"
          required
        />
      </ContactField>
      <ContactField id={`${uid}-phone`} label={f.phone} hint={f.optional} error={errorText("phone")}>
        <input
          className={fieldClass}
          {...control("phone")}
          type="tel"
          placeholder={f.phonePlaceholder}
          autoComplete="tel"
        />
      </ContactField>
      <ContactField id={`${uid}-company`} label={f.company} hint={f.optional} error={errorText("company")}>
        <input
          className={fieldClass}
          {...control("company")}
          placeholder={f.companyPlaceholder}
          autoComplete="organization"
        />
      </ContactField>
      <ContactField id={`${uid}-industry`} label={f.industry} hint={f.optional} error={errorText("industry")}>
        <select className={fieldClass} {...control("industry")} defaultValue="">
          <option value="" disabled className="text-text-primary">
            {f.select}
          </option>
          {INDUSTRY_KEYS.map((key) => (
            <option key={key} value={key} className="text-text-primary">
              {f.industries[key]}
            </option>
          ))}
        </select>
      </ContactField>
      <ContactField id={`${uid}-location`} label={f.location} hint={f.optional} error={errorText("location")}>
        <input className={fieldClass} {...control("location")} placeholder="Balikpapan" />
      </ContactField>
      <ContactField id={`${uid}-message`} label={f.need} error={errorText("message")} className="sm:col-span-2">
        <textarea className={fieldClass} {...control("message")} rows={4} placeholder={f.needPlaceholder} required />
      </ContactField>
      <div aria-hidden className="sr-only">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <SubmitButton disabled={submitting} className="justify-self-start">
          {submitting ? f.sending : t.common.requestQuote}
        </SubmitButton>
        <p aria-live="polite" className={cn("text-sm", state.phase === "error" ? "text-status-negative" : "opacity-80")}>
          {state.notice ? f.status[state.notice] : null}
        </p>
      </div>
    </form>
  );
}
