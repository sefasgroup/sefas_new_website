import { cn } from "@/app/_libs/utils";
import { ArrowIcon } from "../_components/Icons";

export const buttonVariants = {
  primary: {
    focus: "focus-visible:outline-accent",
    label: "bg-accent text-accent-fg",
    labelFill: "bg-text-primary",
    labelHover: "text-surface-base",
    square: "bg-text-primary text-surface-base",
    squareBorder: "border-accent",
    squareFill: "bg-accent",
    squareHover: "text-accent-fg",
  },
  inverse: {
    focus: "focus-visible:outline-surface-base",
    label: "bg-surface-base text-text-primary",
    labelFill: "bg-accent",
    labelHover: "text-accent-fg",
    square: "bg-accent text-accent-fg",
    squareBorder: "border-surface-base",
    squareFill: "bg-surface-base",
    squareHover: "text-text-primary",
  },
  dark: {
    focus: "focus-visible:outline-surface-base",
    label: "bg-text-primary text-surface-base",
    labelFill: "bg-surface-base",
    labelHover: "text-text-primary",
    square: "bg-surface-base text-text-primary",
    squareBorder: "border-text-primary",
    squareFill: "bg-text-primary",
    squareHover: "text-surface-base",
  },
  outlineInverse: {
    focus: "focus-visible:outline-surface-base",
    label: "border border-surface-base text-surface-base",
    labelFill: "bg-surface-base",
    labelHover: "text-text-primary",
    square: "bg-surface-base text-text-primary",
    squareBorder: "border-accent",
    squareFill: "bg-accent",
    squareHover: "text-accent-fg",
  },
  outline: {
    focus: "focus-visible:outline-text-primary",
    label: "border border-text-primary text-text-primary",
    labelFill: "bg-text-primary",
    labelHover: "text-surface-base",
    square: "bg-text-primary text-surface-base",
    squareBorder: "border-accent",
    squareFill: "bg-accent",
    squareHover: "text-accent-fg",
  },
};

const sizes = { md: { label: "h-12 px-5", square: "size-12" }, sm: { label: "h-10 px-4", square: "size-10" } };

const motion = "transition-all duration-700 ease-[cubic-bezier(0.85,0.09,0.15,0.91)]";

type Look = { variant?: keyof typeof buttonVariants; size?: keyof typeof sizes };

function Inner({ variant = "primary", size = "md", children }: Look & { children: React.ReactNode }) {
  const v = buttonVariants[variant];
  const s = sizes[size];
  return (
    <>
      <span className={cn("label-sans relative flex items-center overflow-hidden rounded-sm", s.label, v.label)}>
        <span aria-hidden className={cn("absolute inset-x-0 bottom-0 h-0 group-hover:h-full", motion, v.labelFill)} />
        <span className="relative block overflow-hidden">
          <span className={cn("block group-hover:-translate-y-full", motion)}>{children}</span>
          <span aria-hidden className={cn("absolute inset-0 translate-y-full group-hover:translate-y-0", motion, v.labelHover)}>
            {children}
          </span>
        </span>
      </span>
      <span aria-hidden className={cn("relative flex items-center justify-center overflow-hidden rounded-sm border", s.square, v.square, v.squareBorder)}>
        <span className={cn("absolute inset-x-0 bottom-0 h-0 group-hover:h-full", motion, v.squareFill)} />
        <ArrowIcon className={cn("relative size-4 group-hover:translate-x-[250%]", motion)} />
        <ArrowIcon className={cn("absolute size-4 -translate-x-[250%] group-hover:translate-x-0", motion, v.squareHover)} />
      </span>
    </>
  );
}

const shell = "group inline-flex items-stretch gap-1 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2";
const shellOf = (variant: keyof typeof buttonVariants = "primary") => cn(shell, buttonVariants[variant].focus);

const externalAttrs = { target: "_blank", rel: "noopener noreferrer" } as const;

export const isExternalHref = (href: string | undefined) => typeof href === "string" && /^https?:\/\//.test(href);

export function Button({ variant, size, className, children, ...props }: React.ComponentProps<"a"> & Look) {
  return (
    <a className={cn(shellOf(variant), className)} {...(isExternalHref(props.href) ? externalAttrs : {})} {...props}>
      <Inner variant={variant} size={size}>
        {children}
      </Inner>
    </a>
  );
}

export function ActionButton({ variant, size, className, children, ...props }: React.ComponentProps<"button"> & Look) {
  return (
    <button type="button" className={cn(shellOf(variant), "cursor-pointer", className)} {...props}>
      <Inner variant={variant} size={size}>
        {children}
      </Inner>
    </button>
  );
}

export function SubmitButton({ variant, size, className, children, ...props }: React.ComponentProps<"button"> & Look) {
  return (
    <button type="submit" className={cn(shellOf(variant), "cursor-pointer disabled:cursor-not-allowed disabled:opacity-60", className)} {...props}>
      <Inner variant={variant} size={size}>
        {children}
      </Inner>
    </button>
  );
}
