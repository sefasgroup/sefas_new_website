import { cn } from "@/app/_libs/utils";

type ContactFieldProps = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
};

export function ContactField({ id, label, hint, error, className, children }: ContactFieldProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label htmlFor={id} className="label-mono opacity-60">
        {label}
        {hint && <span className="ml-2 normal-case opacity-70">({hint})</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-status-negative text-sm">
          {error}
        </p>
      )}
    </div>
  );
}
