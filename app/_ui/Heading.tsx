import { cn } from "@/app/_libs/utils";
import { WordReveal } from "./WordReveal";

export function Heading({
  light,
  strong,
  as: Tag = "h2",
  className,
}: {
  light: string;
  strong?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag className={cn("text-4xl leading-display font-medium tracking-tighter text-balance md:text-6xl", className)}>
      <WordReveal text={light} />{" "}
      {strong && <WordReveal text={strong} delay={light.split(" ").length * 45} />}
    </Tag>
  );
}
