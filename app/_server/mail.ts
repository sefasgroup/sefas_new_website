import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import type { ContactInput } from "@/app/_server/contact-schema";
import { contactHtml, contactSubject, contactText, oneLine } from "./mail-template";

type MailConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  encryption: "tls" | "ssl" | "none";
  from: string;
  recipient: string;
};

const CONNECTION_TIMEOUT_MS = 10_000;
const SOCKET_TIMEOUT_MS = 15_000;
const SENDER_NAME = "sefasgroup.com Form Submission";

let transport: Transporter | undefined;
let warnedDisabled = false;

const parseEncryption = (raw: string | undefined): MailConfig["encryption"] => {
  const value = raw?.trim().toLowerCase();
  return value === "ssl" || value === "tls" ? value : "none";
};

function readConfig(): MailConfig | null {
  const env = process.env;
  const host = env.MAIL_HOST?.trim();
  const username = env.MAIL_USERNAME?.trim();
  const password = env.MAIL_PASSWORD;
  const from = env.MAIL_FROM_ADDRESS?.trim();
  const recipient = env.MAIL_RECIPIENT?.trim();
  const port = Number(env.MAIL_PORT);
  const isSmtp = (env.MAIL_MAILER?.trim() || "smtp") === "smtp";
  const hasValidPort = Number.isInteger(port) && port > 0;
  if (!isSmtp || !hasValidPort || !host || !username || !password || !from || !recipient) return null;
  return { host, port, username, password, encryption: parseEncryption(env.MAIL_ENCRYPTION), from, recipient };
}

export function isMailEnabled(): boolean {
  if (readConfig()) return true;
  if (!warnedDisabled) {
    warnedDisabled = true;
    console.warn("[mail] SMTP is not configured (MAIL_* env); the contact form answers 503.");
  }
  return false;
}

function getTransport(config: MailConfig): Transporter {
  transport ??= nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.encryption === "ssl",
    requireTLS: config.encryption === "tls",
    auth: { user: config.username, pass: config.password },
    connectionTimeout: CONNECTION_TIMEOUT_MS,
    greetingTimeout: CONNECTION_TIMEOUT_MS,
    socketTimeout: SOCKET_TIMEOUT_MS,
  });
  return transport;
}

export async function sendContactMail(input: ContactInput): Promise<void> {
  const config = readConfig();
  if (!config) throw new Error("mail is not configured");

  await getTransport(config).sendMail({
    from: config.from.includes("<") ? config.from : { name: SENDER_NAME, address: config.from },
    to: config.recipient,
    replyTo: oneLine(input.email),
    subject: contactSubject(input),
    text: contactText(input),
    html: contactHtml(input),
  });
}
