import type { ComponentType, SVGProps } from 'react';
import type { IconKey } from '@/lib/site';

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: '0 0 32 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function Roach(p: P) {
  return (
    <svg {...base} {...p}>
      <ellipse cx="16" cy="18" rx="6.5" ry="9" />
      <path d="M16 9v18M9.5 12 4 8M9.5 18H3M10 24l-5 4M22.5 12 28 8M22.5 18H29M22 24l5 4" />
      <path d="M13.5 8.5 11 4M18.5 8.5 21 4" />
    </svg>
  );
}

export function Bedbug(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M6 24h20M8 24v-6a8 8 0 0 1 16 0v6" />
      <path d="M8 18h16" />
      <circle cx="16" cy="12" r="3" />
      <path d="M16 9V7M13.5 10 12 8.5M18.5 10 20 8.5" />
    </svg>
  );
}

export function Rat(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 22c0-5 4-8 9-8s8 2.5 8 6.5c0 2.5-2 3.5-4 3.5H7a3 3 0 0 1-3-2Z" />
      <circle cx="23.5" cy="14.5" r="4.5" />
      <circle cx="25" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <path d="M21 10.5a2.5 2.5 0 1 1 3.5-2" />
      <path d="M5 21c-1.5 1.5-3 1.5-3 4" />
    </svg>
  );
}

export function Termite(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 16h7M20 16h7" />
      <ellipse cx="16" cy="16" rx="4" ry="8" />
      <path d="M16 8V5M13 6l-2-2M19 6l2-2M9 12l-4-2M9 20l-4 2M23 12l4-2M23 20l4 2" />
    </svg>
  );
}

export function Mosquito(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M16 12v12l-3 4M16 24l3 4" />
      <path d="M6 8c4 0 9 2 10 4M26 8c-4 0-9 2-10 4" />
      <circle cx="16" cy="10" r="2.5" />
      <path d="M14 8 10 4M18 8l4-4M8 18l8-4M24 18l-8-4" />
    </svg>
  );
}

export function Flea(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M13 22a7 7 0 1 1 9-9" />
      <circle cx="11" cy="24" r="3" />
      <path d="M22 13c3-1 6 1 6 4M8 21 4 25M14 26l-1 4M18 18l5 2" />
    </svg>
  );
}

export function Spray(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M11 12h8v16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z" />
      <path d="M13 12V8h4v4M17 6h4M21 6v3M25 4l2-1M25 9l2 1M25 6.5h2.5" />
      <path d="M11 19h8" />
    </svg>
  );
}

export function Building(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M5 28V9l10-5 10 5v19" />
      <path d="M2 28h28" />
      <path d="M11 28v-7h10v7M11 12h3M18 12h3M11 16h3M18 16h3" />
    </svg>
  );
}

export function Shield(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M16 3 5 7v9c0 7 4.7 11.5 11 13 6.3-1.5 11-6 11-13V7Z" />
      <path d="m11 16 3.5 3.5L22 12" />
    </svg>
  );
}

export function Phone(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M10 3H6a3 3 0 0 0-3 3c0 12.7 10.3 23 23 23a3 3 0 0 0 3-3v-4l-7-3-3 4a20.6 20.6 0 0 1-10-10l4-3Z" />
    </svg>
  );
}

export function WhatsApp(p: P) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...p}>
      <path d="M16 3C8.8 3 3 8.8 3 16c0 2.4.7 4.7 1.9 6.7L3 29l6.5-1.8A13 13 0 1 0 16 3Zm0 2.4a10.6 10.6 0 1 1-5.5 19.6l-.4-.2-3.5 1 1-3.4-.3-.4A10.6 10.6 0 0 1 16 5.4Zm-4.6 5c-.2 0-.6.1-.9.5-.3.4-1.2 1.1-1.2 2.8s1.3 3.2 1.4 3.4c.2.2 2.4 3.8 6 5.2 3 1.2 3.6 1 4.2.9.7 0 2.1-.8 2.4-1.7.3-.9.3-1.6.2-1.7l-.8-.4-2-1c-.3-.1-.5-.2-.7.2l-1 1.3c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-2.6-1.6 9.7 9.7 0 0 1-1.8-2.2c-.2-.3 0-.5.1-.7l.6-.6.3-.6v-.6l-1-2.4c-.2-.6-.5-.5-.7-.5h-.8Z" />
    </svg>
  );
}

export function Mail(p: P) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="7" width="26" height="18" rx="2" />
      <path d="m3 9 13 9 13-9" />
    </svg>
  );
}

export function Pin(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M16 29s10-8.6 10-16a10 10 0 1 0-20 0c0 7.4 10 16 10 16Z" />
      <circle cx="16" cy="13" r="3.5" />
    </svg>
  );
}

export function Clock(p: P) {
  return (
    <svg {...base} {...p}>
      <circle cx="16" cy="16" r="13" />
      <path d="M16 8v8.5l5.5 3.5" />
    </svg>
  );
}

export function Check(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="m5 17 7 7L27 8" />
    </svg>
  );
}

export function Menu(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M4 9h24M4 16h24M4 23h24" />
    </svg>
  );
}

export function Close(p: P) {
  return (
    <svg {...base} {...p}>
      <path d="M7 7 25 25M25 7 7 25" />
    </svg>
  );
}

export const pestIcons: Record<IconKey, ComponentType<P>> = {
  roach: Roach,
  bedbug: Bedbug,
  rat: Rat,
  termite: Termite,
  mosquito: Mosquito,
  flea: Flea,
  spray: Spray,
  building: Building,
};