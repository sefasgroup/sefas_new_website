import { cn } from "@/app/_libs/utils";

const marks = {
  circle: "size-5 rounded-full bg-current",
  square: "size-4.5 bg-current",
  ring: "size-5 rounded-full border-3 border-current",
  diamond: "size-4 rotate-45 bg-current",
  bars: "h-5 w-1.5 bg-current shadow-[0.5rem_0_0_currentColor,1rem_0_0_currentColor] mr-4",
};

export function PlaceholderLogo({ name, mark }: { name: string; mark: keyof typeof marks }) {
  return (
    <span className="flex items-center gap-2.5 text-text-secondary">
      <span aria-hidden className={cn("shrink-0", marks[mark])} />
      <span className="text-lg font-semibold tracking-tight">{name}</span>
    </span>
  );
}
