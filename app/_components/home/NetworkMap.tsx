"use client";

import type { Map as MapLibreMap } from "maplibre-gl";
import { useEffect, useRef, useState } from "react";
import type { network as NETWORK_EN, Site } from "@/app/_configs/home";
import { useContent } from "@/app/_content/client";
import { useUi } from "@/app/_i18n/client";
import { cn } from "@/app/_libs/utils";

const MAP_STYLE = "https://tiles.openfreemap.org/styles/dark";

type Filter = (typeof NETWORK_EN.regions)[number] | "All";

function boundsOf(sites: Site[]): [[number, number], [number, number]] {
  const lngs = sites.map((s) => s.lng);
  const lats = sites.map((s) => s.lat);
  return [
    [Math.min(...lngs), Math.min(...lats)],
    [Math.max(...lngs), Math.max(...lats)],
  ];
}

function framePadding() {
  const wide = window.matchMedia("(min-width: 768px)").matches;
  return wide ? { top: 100, bottom: 60, right: 60, left: Math.round(window.innerWidth * 0.45) } : 40;
}

function pin(site: Site) {
  const el = document.createElement("button");
  el.type = "button";
  el.setAttribute("aria-label", `${site.city} — ${site.company}`);
  el.className = "group block size-8 cursor-pointer rounded-full";
  const disc = document.createElement("span");
  disc.className =
    "flex size-8 items-center justify-center rounded-full border border-surface-base/25 bg-text-primary/60 shadow-lg backdrop-blur-md transition-transform group-hover:scale-125 group-focus-visible:scale-125";
  const mark = document.createElement("img");
  mark.src = "/images/brand/img-sefas-mark.png";
  mark.alt = "";
  mark.className = "pointer-events-none size-4";
  disc.append(mark);
  el.append(disc);
  return el;
}

const degrees = (v: number, pos: string, neg: string) => `${Math.abs(v).toFixed(2)}° ${v < 0 ? neg : pos}`;

function el<K extends keyof HTMLElementTagNameMap>(tag: K, className: string, text?: string) {
  const node = document.createElement(tag);
  node.className = className;
  if (text) node.textContent = text;
  return node;
}

function popupContent(site: Site, logo: string | undefined, region: string) {
  const root = el("div", "w-72");
  if (logo) {
    const band = el("div", "flex h-14 items-center border-b border-surface-base/15 px-3");
    const img = el("img", "h-6 w-auto max-w-full object-contain brightness-0 invert");
    img.src = logo;
    img.alt = site.company;
    band.append(img);
    root.append(band);
  }
  const body = el("div", "px-3 pt-4 pb-3");
  const kind = el("p", "label-mono flex items-center gap-2 text-surface-base/60");
  kind.append(el("span", "size-1.5 bg-accent"), site.kind);
  body.append(
    kind,
    el("p", "mt-2 text-2xl leading-tight font-medium tracking-tighter text-surface-base", site.city),
    el("p", "mt-0.5 text-sm text-surface-base/70", site.company),
  );
  const where = el("p", "label-mono mt-4 flex justify-between gap-4 border-t border-surface-base/15 pt-3 text-surface-base/45");
  where.append(
    el("span", "", region),
    el("span", "whitespace-nowrap", `${degrees(site.lat, "N", "S")} ${degrees(site.lng, "E", "W")}`),
  );
  body.append(where);
  root.append(body);
  return root;
}

export function NetworkMap({ children }: { children: React.ReactNode }) {
  const { companies, network } = useContent().home;
  const t = useUi();
  const container = useRef<HTMLDivElement>(null);
  const map = useRef<MapLibreMap | null>(null);
  const [filter, setFilter] = useState<Filter>("All");
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && setNear(true), { rootMargin: "600px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!near) return;
    let cancelled = false;
    (async () => {
      const [maplibregl] = await Promise.all([import("maplibre-gl"), import("@/app/_libs/maplibre-css")]);
      if (cancelled || !container.current) return;
      maplibregl.setWorkerUrl("/vendor/maplibre-gl-worker.mjs");
      const instance = new maplibregl.Map({
        container: container.current,
        style: MAP_STYLE,
        bounds: boundsOf(network.sites),
        fitBoundsOptions: { padding: framePadding() },
        scrollZoom: false,
        dragPan: window.matchMedia("(pointer: fine)").matches,
        attributionControl: { compact: true },
      });
      instance.addControl(new maplibregl.NavigationControl({ showCompass: false }), "bottom-right");
      instance.on("style.load", () => {
        const root = getComputedStyle(document.documentElement);
        instance.setPaintProperty("background", "background-color", root.getPropertyValue("--brand-map-land").trim());
        instance.setPaintProperty("water", "fill-color", root.getPropertyValue("--brand-map-water").trim());
      });
      for (const site of network.sites) {
        const el = pin(site);
        const marker = new maplibregl.Marker({ element: el })
          .setLngLat([site.lng, site.lat])
          .setPopup(new maplibregl.Popup({ offset: 22, closeButton: false, maxWidth: "none", className: "site-popup" }).setDOMContent(popupContent(site, companies.find((c) => c.name === site.company)?.logo, t.regions[site.region] ?? site.region)))
          .addTo(instance);
        el.addEventListener("click", () => {
          const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          instance.flyTo({ center: marker.getLngLat(), zoom: Math.max(instance.getZoom(), 7), padding: framePadding(), animate: !reduced, duration: 1000 });
        });
      }
      map.current = instance;
    })();
    return () => {
      cancelled = true;
      map.current?.remove();
      map.current = null;
    };
  }, [near, companies, network.sites, t]);

  const select = (next: Filter) => {
    setFilter(next);
    const sites = next === "All" ? network.sites : network.sites.filter((s) => s.region === next);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    map.current?.fitBounds(boundsOf(sites), { padding: framePadding(), maxZoom: 8, animate: !reduced, duration: 1200 });
  };

  const filters: Filter[] = ["All", ...network.regions];

  return (
    <div className="relative flex flex-col-reverse md:block">
      <div className="h-[60svh] md:absolute md:inset-0 md:h-auto">
        <div ref={container} role="region" aria-label={t.home.networkMap} className="h-full w-full" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 hidden w-3/5 bg-linear-to-r from-text-primary via-text-primary/80 to-transparent md:block" />

      <div className="container-page relative py-20 md:pointer-events-none md:py-24">
        <div className="max-w-md md:pointer-events-auto">
          {children}

          <ul className="mt-8 border-t border-surface-base/20">
            {filters.map((f) => {
              const count = f === "All" ? network.sites.length : network.sites.filter((s) => s.region === f).length;
              return (
                <li key={f} className="border-b border-surface-base/20">
                  <button
                    type="button"
                    aria-pressed={filter === f}
                    onClick={() => select(f)}
                    className={cn(
                      "flex w-full items-baseline justify-between gap-4 py-3 text-left transition-opacity",
                      filter === f ? "opacity-100" : "opacity-50 hover:opacity-100",
                    )}
                  >
                    <span className="flex items-center gap-3">
                      <span aria-hidden className={cn("size-1.5", filter === f ? "bg-accent" : "bg-transparent")} />
                      <span className="label-mono">{t.regions[f] ?? f}</span>
                    </span>
                    <span className="text-2xl tracking-tighter">{count}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="label-mono mt-8 opacity-60">{t.home.globalReach}</p>
          <dl className="mt-4 grid grid-cols-3 gap-4">
            {network.global.map((g) => (
              <div key={g.label} className="flex flex-col-reverse">
                <dt className="label-mono mt-2 opacity-60">{g.label}</dt>
                <dd className="text-2xl tracking-tighter">{g.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
