import { NextResponse, type NextRequest } from "next/server";
import { HOME_ONLY, LIVE_WHILE_HOME_ONLY } from "./app/_configs/launch";
import { LANG_HEADER } from "./app/_i18n/locales";

const TEMPORARY_REDIRECT = 307;
const PERMANENT_REDIRECT = 308;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const rest = pathname.replace(/^\/(en|id)(?=\/|$)/, "");
  if (HOME_ONLY && rest !== "" && rest !== "/" && !LIVE_WHILE_HOME_ONLY.includes(rest)) {
    const home = request.nextUrl.clone();
    home.pathname = pathname.startsWith("/id") ? "/id" : "/";
    return NextResponse.redirect(home, TEMPORARY_REDIRECT);
  }
  const indonesian = pathname === "/id" || pathname.startsWith("/id/");
  const headers = new Headers(request.headers);
  headers.set(LANG_HEADER, indonesian ? "id" : "en");
  if (indonesian) return NextResponse.next({ request: { headers } });

  const url = request.nextUrl.clone();
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, PERMANENT_REDIRECT);
  }
  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = { matcher: ["/((?!_next/|api/|.*\\..*).*)"] };
