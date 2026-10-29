import { SmoothScroll } from "./_providers/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
