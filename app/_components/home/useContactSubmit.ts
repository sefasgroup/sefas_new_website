"use client";

import { useState } from "react";
import {
  collectErrors,
  contactSchema,
  errorResponseSchema,
  type ContactErrors,
  type ContactInput,
} from "@/app/_server/contact-schema";

const FIELDS = ["name", "email", "phone", "company", "industry", "location", "message"] as const satisfies readonly (keyof ContactInput)[];

type Notice = "success" | "rateLimited" | "unavailable" | "failed" | "fixErrors";
type FormState = { phase: "idle" | "submitting" | "success" | "error"; errors: ContactErrors; notice: Notice | null };

const idle: FormState = { phase: "idle", errors: {}, notice: null };

function noticeForStatus(status: number): Notice {
  if (status === 429) return "rateLimited";
  if (status === 503) return "unavailable";
  return "failed";
}

function focusFirstInvalid(form: HTMLFormElement, errors: ContactErrors) {
  const first = FIELDS.find((name) => errors[name]);
  const element = first ? form.elements.namedItem(first) : null;
  if (element instanceof HTMLElement) element.focus();
}

export function useContactSubmit() {
  const [state, setState] = useState<FormState>(idle);
  const submitting = state.phase === "submitting";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const read = (name: string) => {
      const value = data.get(name);
      return typeof value === "string" ? value : "";
    };
    const payload = { ...Object.fromEntries(FIELDS.map((name) => [name, read(name)])), website: read("website") };

    setState({ phase: "submitting", errors: {}, notice: null });

    const checked = contactSchema.safeParse(payload);
    if (!checked.success) {
      const errors = collectErrors(checked.error);
      setState({ phase: "error", errors, notice: "fixErrors" });
      focusFirstInvalid(form, errors);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        form.reset();
        setState({ phase: "success", errors: {}, notice: "success" });
        return;
      }
      if (response.status === 422) {
        const body = errorResponseSchema.safeParse(await response.json().catch(() => null));
        if (body.success) {
          setState({ phase: "error", errors: body.data.errors, notice: "fixErrors" });
          focusFirstInvalid(form, body.data.errors);
          return;
        }
      }
      setState({ phase: "error", errors: {}, notice: noticeForStatus(response.status) });
    } catch {
      setState({ phase: "error", errors: {}, notice: "failed" });
    }
  }

  return { state, submitting, onSubmit };
}
