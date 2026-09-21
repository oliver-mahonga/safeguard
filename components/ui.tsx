import Link from 'next/link';
import type { ReactNode } from 'react';
import { site, waLink } from '@/lib/site';
import { Phone, WhatsApp } from './icons';

type ButtonProps = {
  href: string;
  children: ReactNode;
  tone?: 'hazard' | 'ink' | 'outline' | 'paper';
  className?: string;
  external?: boolean;
};

const tones: Record<string, string> = {
  hazard: 'bg-hazard text-ink border-ink hover:bg-ink hover:text-hazard',
  ink: 'bg-ink text-chalk border-ink hover:bg-pine hover:border-pine',
  outline: 'bg-transparent text-ink border-ink hover:bg-ink hover:text-chalk',
  paper: 'bg-paper text-ink border-ink hover:bg-hazard',
};

export function Button({ href, children, tone = 'hazard', className = '', external }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 border px-6 py-3.5 text-[0.95rem] font-semibold rounded-xs transition-colors duration-150 ${tones[tone]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function CallButton({ className = '', tone = 'hazard' }: { className?: string; tone?: 'hazard' | 'ink' | 'outline' | 'paper' }) {
  return (
    <Button href={site.phoneHref} tone={tone} className={className} external>
      <Phone className="h-4 w-4" />
      Call {site.phoneDisplay}
    </Button>
  );
}

export function WhatsAppButton({
  message = 'Hi Safeguard, I need help with pests at my place.',
  label = 'Message on WhatsApp',
  tone = 'outline',
  className = '',
}: {
  message?: string;
  label?: string;
  tone?: 'hazard' | 'ink' | 'outline' | 'paper';
  className?: string;
}) {
  return (
    <Button href={waLink(message)} tone={tone} className={className} external>
      <WhatsApp className="h-4 w-4" />
      {label}
    </Button>
  );
}

export function SectionHead({
  title,
  lead,
  align = 'left',
  light = false,
}: {
  title: string;
  lead?: string;
  align?: 'left' | 'center';
  light?: boolean;
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <h2
        className={`text-[2rem] sm:text-[2.6rem] ${light ? 'text-paper' : 'text-ink'}`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 text-[1.05rem] leading-[1.65] ${
            light ? 'text-chalk/80' : 'text-ink-soft'
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function Tape({ thin = false }: { thin?: boolean }) {
  return <div className={thin ? 'tape-thin' : 'tape'} aria-hidden="true" />;
}

export function Money({ value }: { value: number }) {
  return <span className="tnum">KSh {value.toLocaleString('en-KE')}</span>;
}