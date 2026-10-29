import Image from "next/image";
import { uiText } from "@/app/_i18n/server";
import { cn } from "@/app/_libs/utils";

export function ShellBadge({ className, small }: { className?: string; small?: boolean }) {
  const [line1, line2] = uiText().common.shellDistributor;
  return (
    <p className={cn("flex items-center gap-3", className)}>
      <Image src="/images/brand/img-shell-pecten.svg" alt="Shell" width={150} height={139} className={small ? "h-8 w-auto md:h-9" : "h-11 w-auto md:h-14"} />
      <span className={cn("leading-heading font-semibold tracking-tight", small ? "text-sm" : "text-base md:text-lg")}>
        {line1}
        <br />
        {line2}
      </span>
    </p>
  );
}
