import { z } from "zod";

z.config({ jitless: true });

export const INDUSTRY_KEYS = [
  "mining",
  "marine",
  "manufacturing",
  "fleet",
  "construction",
  "power",
  "agriculture",
  "other",
] as const;


const required = (max: number) => z.string("required").trim().min(1, "required").max(max, "too_long");
const optional = (max: number) => z.string("invalid").trim().max(max, "too_long").optional();

export const contactSchema = z.object({
  name: required(120),
  email: z.string("required").trim().min(1, "required").max(254, "too_long").pipe(z.email("invalid_email")),
  phone: optional(40),
  company: optional(160),
  industry: z.enum(INDUSTRY_KEYS, "invalid").or(z.literal("")).optional(),
  location: optional(120),
  message: required(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;

const FIELD_CODES = ["required", "too_long", "invalid_email", "invalid"] as const;
type FieldCode = (typeof FIELD_CODES)[number];
export type ContactErrors = Partial<Record<keyof ContactInput, FieldCode>>;

const isFieldCode = (value: string): value is FieldCode => (FIELD_CODES as readonly string[]).includes(value);
const isContactField = (value: unknown): value is keyof ContactInput =>
  typeof value === "string" && value in contactSchema.shape;

export function collectErrors(error: z.ZodError): ContactErrors {
  const errors: ContactErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0];
    if (!isContactField(field) || errors[field]) continue;
    errors[field] = isFieldCode(issue.message) ? issue.message : "invalid";
  }
  return errors;
}

export const errorResponseSchema = z.object({ errors: z.partialRecord(contactSchema.keyof(), z.enum(FIELD_CODES)) });

export type ContactFailureCode =
  | "bad_request"
  | "payload_too_large"
  | "unsupported_media_type"
  | "rate_limited"
  | "mail_disabled"
  | "send_failed"
  | "not_implemented";

export type ContactResponse =
  | { received: true }
  | { errors: ContactErrors }
  | { code: ContactFailureCode };
