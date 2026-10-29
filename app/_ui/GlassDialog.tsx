"use client";

import { useEffect, useState } from "react";
import { useUi } from "@/app/_i18n/client";
import { cn } from "@/app/_libs/utils";

const EASE = "cubic-bezier(0.77, 0, 0.18, 1)";
const PANEL_MS = 800;

export function GlassDialog({
  label,
  trigger,
  children,
}: {
  label: string;
  trigger: (open: () => void) => React.ReactNode;
  children: React.ReactNode;
}) {
  const t = useUi();
  const [dialog, setDialog] = useState<HTMLDialogElement | null>(null);
  const [shown, setShown] = useState(false);
  const [still, setStill] = useState(false);

  const open = () => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    dialog?.showModal();
    dialog?.getBoundingClientRect();
    setShown(true);
  };
  const close = () => setShown(false);

  useEffect(() => {
    if (shown) document.documentElement.style.overflow = "hidden";
  }, [shown]);

  useEffect(
    () => () => {
      document.documentElement.style.overflow = "";
    },
    [],
  );

  useEffect(() => {
    if (shown || !dialog?.open) return;
    const id = window.setTimeout(
      () => {
        dialog.close();
        document.documentElement.style.overflow = "";
      },
      still ? 0 : PANEL_MS,
    );
    return () => window.clearTimeout(id);
  }, [shown, still, dialog]);

  return (
    <>
      {trigger(open)}

      <dialog
        ref={setDialog}
        aria-label={label}
        data-lenis-prevent
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        className="m-0 h-svh max-h-none w-screen max-w-none overflow-hidden bg-transparent p-0 text-left backdrop:bg-transparent"
      >
        <div
          onClick={close}
          className={cn(
            "bg-text-primary/40 absolute inset-0 backdrop-blur-sm transition-opacity duration-400 motion-reduce:transition-none",
            shown ? "opacity-100" : "opacity-0",
          )}
          style={{ transitionDelay: shown ? "0ms" : "400ms" }}
        />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-4">
          <div
            data-lenis-prevent
            className="bg-surface-base/80 text-text-primary ring-surface-base/70 pointer-events-auto relative max-h-[90svh] w-[min(46rem,100%)] overflow-y-auto rounded-md shadow-2xl ring-1 backdrop-blur-2xl backdrop-saturate-150 ring-inset"
            style={{
              transform: shown ? "translateY(0)" : "translateY(-100vh)",
              transition: still ? "none" : `transform ${PANEL_MS}ms ${EASE}`,
              transitionDelay: shown ? "200ms" : "0ms",
            }}
          >
            {children}

            <button
              type="button"
              onClick={close}
              aria-label={t.common.close}
              className={cn(
                "bg-surface-base/60 text-text-primary ring-surface-base/70 absolute top-6 right-6 flex size-10 cursor-pointer items-center justify-center rounded-sm text-xl ring-1 backdrop-blur-md transition-opacity duration-500 ring-inset",
                shown ? "opacity-100" : "opacity-0",
              )}
              style={{ transitionDelay: shown ? "700ms" : "0ms" }}
            >
              ×
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
