import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, "")}`;

export const resizedSrc = (src: string, width: number) => `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
