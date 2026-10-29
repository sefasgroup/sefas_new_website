import "server-only";
import { BRAND } from "@/app/_server/brand-colours";
import { SITE_URL } from "@/app/_i18n/locales";
import { ui } from "@/app/_i18n/ui";
import type { ContactInput } from "@/app/_server/contact-schema";

export const oneLine = (value: string) => value.replace(/[\r\n\u2028\u2029]+/g, " ").trim();

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const SANS = "Roboto, Arial, Helvetica, sans-serif";
const PAGE_WIDTH = 600;
const GUTTER = 28;
const LABEL_WIDTH = 40;
const OFFER = "Product/Service Offer";
const LOGO_PATH = "/images/brand/img-sefas-email-logo.png";
const PREHEADER_LENGTH = 90;
const PREHEADER_PADDING = "&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;";

function mix(from: string, to: string, weight: number) {
  const channel = (hex: string, i: number) => parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16);
  const part = (i: number) =>
    Math.round(channel(from, i) * weight + channel(to, i) * (1 - weight))
      .toString(16)
      .padStart(2, "0");
  return `#${part(0)}${part(1)}${part(2)}`;
}

const { surface: SURFACE, ink: INK, accent: ACCENT, whatsapp: WHATSAPP, link: LINK, white: WHITE } = BRAND;
const HEADER = mix(INK, SURFACE, 0.88);
const MUTED = mix(INK, SURFACE, 0.6);
const RULE = mix(INK, SURFACE, 0.12);
const PANEL = mix(INK, WHITE, 0.02);
const TINT = mix(ACCENT, WHITE, 0.06);
const PILL = mix(ACCENT, WHITE, 0.09);
const SITE_HOST = new URL(SITE_URL).host;
const CONTACT_URL = `${SITE_URL}/#contact`;

function toWhatsAppNumber(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const international = phone.trim().startsWith("+") || digits.startsWith("62") ? digits : digits.replace(/^0/, "62");
  return international.length >= 9 && international.length <= 15 ? international : null;
}

function receivedAt() {
  const options = { timeZone: "Asia/Jakarta" } as const;
  const day = new Date().toLocaleDateString("id-ID", { ...options, dateStyle: "medium" });
  const time = new Date().toLocaleTimeString("id-ID", { ...options, hour: "2-digit", minute: "2-digit", hour12: false });
  return `${day}, ${time.replace(".", ":")} WIB`;
}

function details(input: ContactInput) {
  const labels = ui("id").home.form;
  const industry = input.industry ? labels.industries[input.industry] : "";
  return {
    name: oneLine(input.name),
    email: oneLine(input.email),
    phone: oneLine(input.phone ?? ""),
    company: oneLine(input.company ?? ""),
    industry,
    location: oneLine(input.location ?? ""),
  };
}

export function contactSubject(input: ContactInput) {
  const name = oneLine(input.name);
  const company = oneLine(input.company ?? "");
  return `[Website] ${OFFER} - ${name} (${company || "Personal"})`;
}

export function contactText(input: ContactInput) {
  const d = details(input);
  const wa = d.phone ? toWhatsAppNumber(d.phone) : null;
  const rows: [string, string][] = [
    ["Nama", d.name],
    ["Perusahaan/Personal", d.company || "Personal"],
    ["Email", d.email],
    ["Telepon", d.phone],
    ["Lokasi", d.location],
    ["Industri", d.industry],
    ["Subjek", OFFER],
  ];
  return [
    OFFER.toUpperCase(),
    "Pesan baru dari formulir kontak website",
    `Dikirim ${receivedAt()} melalui ${SITE_HOST}`,
    "",
    ...rows.filter(([, value]) => value !== "").map(([label, value]) => `${label}: ${value}`),
    "",
    "Pesan:",
    input.message,
    "",
    `Balas Email: ${d.email}`,
    ...(wa ? [`Chat WhatsApp: https://wa.me/${wa}`] : []),
    "",
    `Email otomatis dari formulir kontak ${CONTACT_URL}.`,
    `\u00a9 ${new Date().getFullYear()} Sefas Group`,
  ].join("\n");
}

type Details = ReturnType<typeof details>;

const infoRow = (name: string, html: string, first: boolean) =>
  `<tr><td valign="top" width="${LABEL_WIDTH}%" style="padding:10px 14px;${first ? "" : `border-top:1px solid ${RULE};`}background:${PANEL};font:14px/20px ${SANS};color:${MUTED}">${escapeHtml(name)}</td><td valign="top" style="padding:10px 14px;${first ? "" : `border-top:1px solid ${RULE};`}font:700 14px/20px ${SANS};color:${INK};overflow-wrap:anywhere;word-break:break-word">${html}</td></tr>`;

const link = (href: string, text: string, color: string = LINK, decoration = "underline") =>
  `<a href="${escapeHtml(href)}" style="color:${color};text-decoration:${decoration}">${escapeHtml(text)}</a>`;

const button = (href: string, text: string, filled: boolean) =>
  `<a href="${escapeHtml(href)}" style="display:inline-block;margin:0 10px 10px 0;padding:10px 22px;border-radius:999px;font:700 14px/20px ${SANS};text-decoration:none;border:2px solid ${filled ? ACCENT : WHATSAPP};background:${filled ? ACCENT : "white"};color:${filled ? "white" : WHATSAPP}">${escapeHtml(text)}</a>`;

function documentHead(title: string) {
  return [
    "<!doctype html>",
    `<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><title>${escapeHtml(title)}</title></head>`,
    `<body style="margin:0;padding:0;background:${SURFACE}">`,
  ].join("\n");
}

function preheaderBlock(d: Details, message: string) {
  const text = `${d.name}${d.company ? ` · ${d.company}` : ""}: ${oneLine(message).slice(0, PREHEADER_LENGTH)}`;
  return `<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${SURFACE}">${escapeHtml(text)}${PREHEADER_PADDING}</div>`;
}

function openFrame() {
  return [
    `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${SURFACE}"><tr><td align="center" style="padding:24px 12px">`,
    `<table role="presentation" width="${PAGE_WIDTH}" cellpadding="0" cellspacing="0" style="width:100%;max-width:${PAGE_WIDTH}px;border-collapse:separate;border:1px solid ${RULE};border-radius:14px;overflow:hidden;background:white">`,
  ].join("\n");
}

function headerBlock() {
  return [
    `<tr><td style="background:${HEADER};padding:18px ${GUTTER}px">`,
    `<img src="${escapeHtml(SITE_URL + LOGO_PATH)}" width="192" height="34" alt="sefas" style="display:block;border:0;font:italic 800 28px/34px Arial,Helvetica,sans-serif;color:${ACCENT}">`,
    `</td></tr>`,
    `<tr><td style="height:4px;line-height:4px;font-size:0;background:${ACCENT}">&nbsp;</td></tr>`,
  ].join("\n");
}

function titleBlock() {
  return [
    `<tr><td style="padding:24px ${GUTTER}px 4px">`,
    `<span style="display:inline-block;padding:4px 12px;border-radius:999px;background:${PILL};font:700 12px/16px ${SANS};letter-spacing:0.5px;color:${ACCENT}">${OFFER.toUpperCase()}</span>`,
    `<h1 style="margin:18px 0 8px;font:700 24px/30px ${SANS};color:${INK}">Pesan baru dari formulir kontak website</h1>`,
    `<div style="font:14px/20px ${SANS};color:${MUTED}">Dikirim ${escapeHtml(receivedAt())} melalui ${link(SITE_URL, SITE_HOST)}</div>`,
    `</td></tr>`,
  ].join("\n");
}

function detailsBlock(d: Details) {
  const rows = [
    infoRow("Nama", escapeHtml(d.name), true),
    infoRow("Perusahaan/Personal", escapeHtml(d.company || "Personal"), false),
    infoRow("Email", link(`mailto:${d.email}`, d.email, ACCENT, "none"), false),
    d.phone && infoRow("Telepon", escapeHtml(d.phone), false),
    d.location && infoRow("Lokasi", escapeHtml(d.location), false),
    d.industry && infoRow("Industri", escapeHtml(d.industry), false),
    infoRow("Subjek", OFFER, false),
  ]
    .filter(Boolean)
    .join("");
  return `<tr><td style="padding:20px ${GUTTER}px 4px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border:1px solid ${RULE};border-radius:8px;overflow:hidden">${rows}</table></td></tr>`;
}

function messageBlock(message: string) {
  return [
    `<tr><td style="padding:20px ${GUTTER}px 4px">`,
    `<div style="padding-bottom:8px;font:700 12px/16px ${SANS};letter-spacing:1px;text-transform:uppercase;color:${MUTED}">Pesan</div>`,
    `<div style="padding:14px 20px;border-left:4px solid ${ACCENT};border-radius:0 8px 8px 0;background:${TINT};font:15px/24px ${SANS};color:${INK};white-space:pre-wrap">${escapeHtml(message)}</div>`,
    `</td></tr>`,
  ].join("\n");
}

function actionsBlock(d: Details, wa: string | null, subject: string) {
  const replySubject = encodeURIComponent(`Re: ${subject}`);
  const waText = encodeURIComponent(
    `Halo ${d.name}, terima kasih sudah menghubungi SEFAS. Kami menerima permintaan Anda dan ingin membantu lebih lanjut.`,
  );
  return [
    `<tr><td style="padding:24px ${GUTTER}px 4px">`,
    `${button(`mailto:${d.email}?subject=${replySubject}`, "Balas Email", true)}${wa ? button(`https://wa.me/${wa}?text=${waText}`, "Chat WhatsApp", false) : ""}`,
    `</td></tr>`,
    `<tr><td style="padding:4px ${GUTTER}px 24px;font:13px/20px ${SANS};color:${MUTED}">Tombol "Balas Email" atau tombol Reply di aplikasi email langsung membalas ke ${link(`mailto:${d.email}`, d.email)}.</td></tr>`,
  ].join("\n");
}

function footerBlock() {
  return `<tr><td style="padding:16px ${GUTTER}px 20px;border-top:1px solid ${RULE};font:13px/20px ${SANS};color:${MUTED}">Email otomatis dari formulir kontak ${link(CONTACT_URL, CONTACT_URL, MUTED)}.<br>&copy; ${new Date().getFullYear()} Sefas Group</td></tr>`;
}

const closeFrame = "</table></td></tr></table></body></html>";

export function contactHtml(input: ContactInput) {
  const d = details(input);
  const wa = d.phone ? toWhatsAppNumber(d.phone) : null;
  return [
    documentHead(contactSubject(input)),
    preheaderBlock(d, input.message),
    openFrame(),
    headerBlock(),
    titleBlock(),
    detailsBlock(d),
    messageBlock(input.message),
    actionsBlock(d, wa, contactSubject(input)),
    footerBlock(),
    closeFrame,
  ].join("\n");
}
