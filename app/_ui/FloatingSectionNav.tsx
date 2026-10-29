"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/_libs/utils";

type Item = { id: string; label: string };

export function FloatingSectionNav({
  items,
  label,
  className,
}: {
  items: Item[];
  label: string;
  className?: string;
}) {
  const [active, setActive] = useState(items[0]?.id);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);

  const ids = items.map((i) => i.id).join("|");

  useEffect(() => {
    const sections = ids
      .split("|")
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const mid = window.innerHeight / 2;
      const first = sections[0].getBoundingClientRect();
      const last = sections[sections.length - 1].getBoundingClientRect();
      setVisible(first.top < mid && last.bottom > 120);
      const current =
        sections.filter((s) => s.getBoundingClientRect().top < mid).pop() ?? sections[0];
      setActive(current.id);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  useEffect(() => {
    if (!open) return;
    const close = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  const index = Math.max(
    0,
    items.findIndex((i) => i.id === active),
  );
  const current = items[index];

  return (
    <nav
      ref={root}
      aria-label={label}
      onMouseLeave={() => setOpen(false)}
      className={cn(
        "group pointer-events-none fixed bottom-6 left-1/2 z-40 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      )}
    >
      <div
        className={cn(
          "pb-2",
          visible && "group-focus-within:pointer-events-auto group-hover:pointer-events-auto",
          visible && open && "pointer-events-auto",
        )}
      >
        <ul
          className={cn(
            "from-text-primary/55 to-text-primary/80 text-surface-base ring-surface-base/25 overflow-hidden rounded-md bg-linear-to-br p-1.5 shadow-xl ring-1 backdrop-blur-md backdrop-saturate-150 transition-all duration-300 ring-inset",
            "translate-y-2 opacity-0",
            "group-focus-within:translate-y-0 group-focus-within:opacity-100",
            "group-hover:translate-y-0 group-hover:opacity-100",
            open && "translate-y-0 opacity-100",
          )}
        >
          {items.map((item, i) => {
            const on = item.id === active;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={on ? "location" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-sm px-3 py-2.5 transition-colors",
                    on ? "bg-accent" : "hover:bg-surface-base/10",
                  )}
                >
                  <span className="truncate">{item.label}</span>
                  <span className="label-mono opacity-60">{String(i + 1).padStart(2, "0")}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={cn(
          "from-text-primary/55 to-text-primary/80 text-surface-base ring-surface-base/25 flex w-full cursor-pointer items-center justify-between rounded-md bg-linear-to-br px-5 py-4 shadow-xl ring-1 backdrop-blur-md backdrop-saturate-150 ring-inset",
          visible && "pointer-events-auto",
        )}
      >
        <span className="label-mono opacity-60">
          {String(index + 1).padStart(2, "0")}/{String(items.length).padStart(2, "0")}
        </span>
        <span className="relative mx-3 h-6 flex-1 overflow-hidden text-center">
          <span
            key={current?.id}
            className="absolute inset-0 animate-[fade-up_0.4s_ease-out_both] truncate motion-reduce:animate-none"
          >
            {current?.label}
          </span>
        </span>
        <svg
          viewBox="0 0 12 12"
          aria-hidden
          className="size-3 transition-transform duration-300 group-hover:rotate-180"
        >
          <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </nav>
  );
}
