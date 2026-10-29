import { cn } from "@/app/_libs/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("label-mono flex items-center gap-3", className)}>
      <span aria-hidden className="size-1.5 bg-accent" />
      <span>{children}</span>
    </p>
  );
}
