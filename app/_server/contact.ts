import "server-only";
import type { ContactFailureCode, ContactInput } from "@/app/_server/contact-schema";
import { isMailEnabled, sendContactMail } from "./mail";

type ContactMode = "smtp" | "cms" | "both";

export type ContactOutcome =
  | { ok: true }
  | { ok: false; status: 501 | 502 | 503; code: Extract<ContactFailureCode, "not_implemented" | "send_failed" | "mail_disabled"> };

function contactMode(): ContactMode {
  const mode = process.env.CONTACT_MODE?.trim().toLowerCase();
  return mode === "cms" || mode === "both" ? mode : "smtp";
}

const errorField = (error: unknown, key: string) =>
  typeof error === "object" && error !== null ? String(Reflect.get(error, key) ?? "-") : "-";

async function submitBySmtp(input: ContactInput): Promise<ContactOutcome> {
  if (!isMailEnabled()) return { ok: false, status: 503, code: "mail_disabled" };
  try {
    await sendContactMail(input);
    return { ok: true };
  } catch (error) {
    console.error(`[contact] send failed code=${errorField(error, "code")} response=${errorField(error, "responseCode")}`);
    return { ok: false, status: 502, code: "send_failed" };
  }
}

export async function submitContact(input: ContactInput): Promise<ContactOutcome> {
  const mode = contactMode();
  switch (mode) {
    case "smtp":
      return submitBySmtp(input);
    case "cms":
    case "both":
      return { ok: false, status: 501, code: "not_implemented" };
  }
}
