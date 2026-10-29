"use client";

import { useState, useSyncExternalStore } from "react";
import { useLocalePath, useUi } from "@/app/_i18n/client";

const KEY = "sefas-cookie-consent";
const subscribe = (onChange: () => void) => {
  window.addEventListener("storage", onChange);
  return () => window.removeEventListener("storage", onChange);
};
const readChoice = () => {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return "unavailable";
  }
};

export function CookieBanner() {
  const t = useUi().common;
  const href = useLocalePath();
  const stored = useSyncExternalStore(subscribe, readChoice, () => null);
  const [answered, setAnswered] = useState(false);

  const answer = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, choice);
    } catch {}
    setAnswered(true);
  };

  if (stored !== null || answered) return null;
  return (
    <div
      role="region"
      aria-label={t.cookiePolicy}
      className="bg-text-primary text-surface-base fixed inset-x-4 bottom-4 z-60 rounded-sm p-5 shadow-xl md:right-auto md:left-6 md:max-w-md"
    >
      <p className="mb-2 text-base font-medium">{t.cookieTitle}</p>
      <p className="text-sm leading-relaxed">
        {t.cookieNotice}{" "}
        <a href={href("/legal/cookies")} className="underline underline-offset-2">
          {t.cookiePolicy}
        </a>
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => answer("accepted")}
          className="label-sans bg-accent text-accent-fg hover:bg-accent-hover rounded-sm px-4 py-2.5"
        >
          {t.cookieAccept}
        </button>
        <button
          type="button"
          onClick={() => answer("declined")}
          className="label-sans border-surface-base/30 rounded-sm border px-4 py-2.5"
        >
          {t.cookieDecline}
        </button>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `try{if(localStorage.getItem(${JSON.stringify(KEY)})!==null)document.currentScript.parentElement.hidden=true}catch(e){document.currentScript.parentElement.hidden=true}`,
        }}
      />
    </div>
  );
}
