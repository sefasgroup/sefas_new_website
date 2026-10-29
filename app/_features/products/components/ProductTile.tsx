import Link from "next/link";
import type { Product } from "@/app/_configs/catalogue";
import { localHref, uiText } from "@/app/_i18n/server";
import { Wordmark } from "./Wordmark";

export function ProductTile({ product }: { product: Product }) {
  const grades = product.grades.length;
  return (
    <Link
      href={localHref(`/products/${product.slug}`)}
      className="group border-border-default hover:bg-accent hover:text-surface-base focus-visible:bg-accent focus-visible:text-surface-base relative flex aspect-square flex-col overflow-hidden rounded-sm border p-4 transition-colors duration-300 hover:border-transparent"
    >
      <svg
        viewBox="0 0 40 41"
        aria-hidden
        className="absolute top-3 right-3 size-3.5 opacity-30 transition-opacity duration-300 group-hover:opacity-100"
      >
        <path
          fill="currentColor"
          d="m26.83 17.57c.63.27 1.03.87 1.03 1.57v9.7h3.63V8.77H11.47v3.63h9.83c.7 0 1.3.4 1.57 1.07.27.67.13 1.37-.37 1.87l-14 13.7 2.53 2.57 13.97-13.7c.5-.5 1.2-.63 1.83-.37z"
        />
      </svg>

      <div className="flex h-1/2 items-center justify-center px-4 transition-transform duration-300 ease-out group-hover:translate-y-1/4">
        <Wordmark
          product={product}
          invert="group-hover:brightness-0 group-hover:invert"
          className="h-11 object-center"
        />
      </div>

      <div className="mt-auto transition-all duration-300 group-hover:translate-y-1/2 group-hover:opacity-0">
        <p className="text-text-secondary line-clamp-3 text-xs leading-snug">{product.summary}</p>
      </div>

      <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="label-mono border-surface-base/50 rounded-sm border px-2 py-1">
          {product.type}
        </span>
        {grades > 0 && (
          <span className="label-mono border-surface-base/50 rounded-sm border px-2 py-1">
            {grades} {uiText().products.grades(grades)}
          </span>
        )}
      </div>
    </Link>
  );
}
