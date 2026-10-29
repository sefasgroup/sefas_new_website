import Image from "next/image";
import type { Product } from "@/app/_configs/catalogue";
import { cn } from "@/app/_libs/utils";

export function Wordmark({
  product,
  invert,
  large,
  className,
}: {
  product: Pick<Product, "maker" | "mark" | "logo">;
  invert?: string;
  large?: boolean;
  className?: string;
}) {
  if (product.logo) {
    return (
      <Image
        src={product.logo.src}
        alt={`${product.maker} ${product.mark}`}
        width={product.logo.width}
        height={product.logo.height}
        className={cn(
          "w-auto max-w-full object-contain object-left transition-[filter] duration-300",
          large ? "h-16 md:h-20" : "h-14",
          invert,
          className,
        )}
      />
    );
  }

  return (
    <span className={cn("flex flex-col items-start", className)}>
      <span
        className={cn(
          "flex items-center gap-1.5 font-medium tracking-tight",
          large ? "text-xl" : "text-sm",
        )}
      >
        {product.maker === "Shell" && (
          <Image
            src="/images/brand/img-shell-pecten.svg"
            alt=""
            width={150}
            height={139}
            className={cn("w-auto transition-[filter] duration-300", large ? "h-6" : "h-4", invert)}
          />
        )}
        {product.maker}
      </span>
      <span
        className={cn(
          "mt-1 leading-display font-semibold tracking-tight uppercase italic",
          large ? "text-5xl md:text-7xl" : "text-2xl",
        )}
      >
        {product.mark}
      </span>
    </span>
  );
}
