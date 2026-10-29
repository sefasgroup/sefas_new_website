import { collectErrors, contactSchema, type ContactResponse } from "@/app/_server/contact-schema";
import { createSlidingWindowLimiter } from "@/app/_server/rate-limit";
import { submitContact } from "@/app/_server/contact";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 16 * 1024;

const MINUTE_MS = 60_000;
const HOUR_MS = 60 * MINUTE_MS;

const PER_MINUTE_LIMIT = 5;
const PER_HOUR_LIMIT = 20;

const limiter = createSlidingWindowLimiter([
  { limit: PER_MINUTE_LIMIT, windowMs: MINUTE_MS },
  { limit: PER_HOUR_LIMIT, windowMs: HOUR_MS },
]);

const reply = (body: ContactResponse, status = 200, headers?: HeadersInit) => Response.json(body, { status, headers });

const clientIp = (request: Request) => request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

async function readBody(request: Request): Promise<string | null> {
  const declared = Number(request.headers.get("content-length"));
  if (declared > MAX_BODY_BYTES || !request.body) return null;
  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let received = 0;
  let text = "";
  for (;;) {
    const { done, value } = await reader.read();
    if (done) return text + decoder.decode();
    received += value.byteLength;
    if (received > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    text += decoder.decode(value, { stream: true });
  }
}

function parseJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return undefined;
  }
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return reply({ code: "unsupported_media_type" }, 415);
  }

  const text = await readBody(request);
  if (text === null) return reply({ code: "payload_too_large" }, 413);

  const body = parseJson(text);
  if (typeof body !== "object" || body === null || Array.isArray(body)) return reply({ code: "bad_request" }, 400);

  const honeypot = Reflect.get(body, "website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") return reply({ received: true });

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return reply({ errors: collectErrors(parsed.error) }, 422);

  const limit = await limiter.check(clientIp(request));
  if (!limit.allowed) {
    return reply({ code: "rate_limited" }, 429, { "Retry-After": String(limit.retryAfterSeconds) });
  }

  const outcome = await submitContact(parsed.data);
  if (!outcome.ok) return reply({ code: outcome.code }, outcome.status);
  return reply({ received: true });
}
