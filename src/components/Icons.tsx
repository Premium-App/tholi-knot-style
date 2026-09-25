import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function IconDiamond(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3 21 12l-9 9-9-9z" />
      <path d="M7.5 12 12 7.5l4.5 4.5L12 16.5z" />
    </svg>
  );
}

export function IconKnot(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 8c3.5 0 3.5 8 7 8s3.5-8 7-8" />
      <path d="M5 16c3.5 0 3.5-8 7-8s3.5 8 7 8" />
    </svg>
  );
}

export function IconLeather(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M8 7V6a4 4 0 0 1 8 0v1" />
      <path d="M10 12h4" />
    </svg>
  );
}

export function IconRuler(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="8" width="18" height="8" rx="1.5" />
      <path d="M7 8v3M11 8v3M15 8v3M19 8v3" />
    </svg>
  );
}

export function IconStar(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.4l-5.8 3.1 1.1-6.45-4.7-4.6 6.5-.95z" />
    </svg>
  );
}

export function IconStarHalf(p: P) {
  return (
    <svg viewBox="0 0 24 24" {...p}>
      <defs>
        <linearGradient id="halfStar">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <path
        fill="url(#halfStar)"
        d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.4l-5.8 3.1 1.1-6.45-4.7-4.6 6.5-.95z"
      />
    </svg>
  );
}

export function IconCheck(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="m4.5 12.5 4.5 4.5L19.5 6.5" />
    </svg>
  );
}

export function IconTruck(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M3 7h10v9H3z" />
      <path d="M13 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18.5" r="1.8" />
      <circle cx="17" cy="18.5" r="1.8" />
    </svg>
  );
}

export function IconReturn(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 9h11a4.5 4.5 0 0 1 0 9H9" />
      <path d="m8 5-4 4 4 4" />
    </svg>
  );
}

export function IconCash(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="2.5" y="6.5" width="19" height="11" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

export function IconBag(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 8h16l-1.2 11a2 2 0 0 1-2 1.8H7.2a2 2 0 0 1-2-1.8z" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function IconHeart(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9z" />
    </svg>
  );
}

export function IconTrophy(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
      <path d="M8 5H5.5a2.5 2.5 0 0 0 2.5 4M16 5h2.5a2.5 2.5 0 0 1-2.5 4" />
      <path d="M12 13v3M9 20h6M10 20l.5-4h3l.5 4" />
    </svg>
  );
}

export function IconGift(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="9" width="17" height="11" rx="1.5" />
      <path d="M3.5 13h17M12 9v11" />
      <path d="M12 9S9 3.5 6.8 5.4C5 7 8.5 9 12 9s7-2 5.2-3.6C15 3.5 12 9 12 9z" />
    </svg>
  );
}

export function IconClock(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconSparkle(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12 2.5l1.6 5.4 5.4 1.6-5.4 1.6L12 16.5l-1.6-5.4L5 9.5l5.4-1.6z" />
      <path d="M18.5 15l.8 2.3 2.2.7-2.2.7-.8 2.3-.8-2.3-2.2-.7 2.2-.7z" />
    </svg>
  );
}

export function IconWhatsApp(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M12.04 2C6.6 2 2.2 6.39 2.2 11.8c0 1.9.53 3.68 1.46 5.2L2 22l5.16-1.6a9.9 9.9 0 0 0 4.88 1.26c5.43 0 9.84-4.39 9.84-9.8S17.47 2 12.04 2Zm5.7 13.9c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.15-2.9-.6-2.27-.9-3.7-3.2-3.82-3.35-.12-.16-.9-1.2-.9-2.3 0-1.1.57-1.63.78-1.86.2-.23.44-.29.59-.29h.42c.14 0 .32-.05.5.38.17.44.6 1.5.65 1.6.05.11.09.24.01.39-.07.15-.15.25-.29.4-.15.15-.3.34-.43.45-.14.13-.29.27-.13.54.16.27.72 1.18 1.53 1.9 1.05.93 1.38 1.08 1.64 1.2.26.11.42.09.57-.06.16-.15.66-.75.84-1.01.17-.27.35-.22.58-.13.24.08 1.5.7 1.76.83.26.13.43.19.5.3.06.11.06.66-.19 1.34Z" />
    </svg>
  );
}

export function IconPhone(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a10 10 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2C11 19.5 4.5 13 4.5 5.5a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function IconFacebook(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.25-1.5 1.5-1.5H16.5V5c-.3-.04-1.3-.12-2.4-.12-2.4 0-4 1.45-4 4.1V11H7.7v3h2.4v7z" />
    </svg>
  );
}

export function IconInstagram(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTikTok(p: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13.2 3h2.6c.2 1.9 1.4 3.3 3.4 3.6v2.6c-1.3 0-2.5-.4-3.5-1.1v5.6a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .9.1v2.7a2.9 2.9 0 1 0 2 2.8z" />
    </svg>
  );
}

export function Stars({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${value} of 5`}>
      {[1, 2, 3, 4, 5].map((i) =>
        i <= value ? (
          <IconStar key={i} className="h-3.5 w-3.5" />
        ) : i - 0.5 <= value ? (
          <IconStarHalf key={i} className="h-3.5 w-3.5" />
        ) : (
          <IconStar key={i} className="h-3.5 w-3.5 opacity-25" />
        ),
      )}
    </span>
  );
}
