import type { Pack } from "@/app/_configs/catalogue";

const PATHS: Record<Pack, React.ReactNode> = {
  drum: (
    <>
      <rect x="5" y="2.5" width="14" height="19" rx="2.5" />
      <path
        d="M5 8.5h14M5 15.5h14"
        fill="none"
        stroke="var(--color-surface-base)"
        strokeWidth="1.2"
      />
    </>
  ),
  pail: (
    <>
      <path d="M4 7h16l-1.6 13.5a1.5 1.5 0 0 1-1.5 1.5H7.1a1.5 1.5 0 0 1-1.5-1.5Z" />
      <path
        d="M5 7c0-3.3 3.2-5 7-5s7 1.7 7 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </>
  ),
  ibc: (
    <>
      <rect x="3.5" y="2.5" width="17" height="16" rx="1" />
      <path
        d="M9.2 2.5v16M14.8 2.5v16M3.5 10.5h17"
        fill="none"
        stroke="var(--color-surface-base)"
        strokeWidth="1.2"
      />
      <path d="M3 20h18v1.5H3z" />
    </>
  ),
  greaseTank: (
    <>
      <path d="M6 5h12v15a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" />
      <path d="M9 2h6v3H9z" />
      <path d="M14 13l3 3-4 2" fill="none" stroke="var(--color-surface-base)" strokeWidth="1.2" />
    </>
  ),
  skid: (
    <>
      <rect x="2.5" y="6" width="19" height="11" rx="5.5" />
      <path d="M2 19h20v1.5H2z" />
      <path d="M12 6v11" fill="none" stroke="var(--color-surface-base)" strokeWidth="1.2" />
    </>
  ),
  jerrycan: (
    <>
      <path d="M6 5h9l3 3v12.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20.5Z" />
      <path d="M8.5 2.5h4V5h-4z" />
    </>
  ),
};

export function PackIcon({ pack, className }: { pack: Pack; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      {PATHS[pack]}
    </svg>
  );
}
