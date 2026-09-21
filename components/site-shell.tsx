'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { areas, services, site, waLink } from '@/lib/site';
import { Close, Menu, Phone, Shield, WhatsApp } from './icons';

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Prices' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Book a visit' },
];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.short} home`}>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xs border ${
          light ? 'border-chalk/30 bg-pine-deep text-hazard' : 'border-ink bg-ink text-hazard'
        }`}
      >
        <Shield className="h-5 w-5" />
      </span>
      <span className="leading-none">
        <span
          className={`display block text-[1.35rem] ${light ? 'text-paper' : 'text-ink'}`}
        >
          Safeguard
        </span>
        <span
          className={`block text-[0.7rem] tracking-wide ${
            light ? 'text-chalk/60' : 'text-ink-soft'
          }`}
        >
          Fumigation &amp; pest control
        </span>
      </span>
    </Link>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-chalk">
      <div className="bg-pine text-chalk">
        <div className="wrap flex h-10 items-center justify-between text-[0.78rem]">
          <p className="truncate">Same-day service in Nairobi when you call before 3pm</p>
          <div className="hidden items-center gap-5 sm:flex">
            <span className="text-chalk/70">{site.hoursWeek}</span>
            <a href={site.phoneHref} className="flex items-center gap-1.5 font-semibold text-hazard">
              <Phone className="h-3.5 w-3.5" />
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-rule bg-chalk/95 backdrop-blur">
        <div className="wrap flex h-[72px] items-center justify-between gap-6">
          <Wordmark />

          <nav className="hidden items-center gap-7 text-[0.95rem] md:flex">
            {nav.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 pb-1 transition-colors ${
                  pathname.startsWith(item.href)
                    ? 'border-hazard text-ink'
                    : 'border-transparent text-ink-soft hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-[0.95rem] font-semibold text-ink"
            >
              <Phone className="h-4 w-4 text-field" />
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-xs border border-ink bg-hazard px-5 py-2.5 text-[0.9rem] font-semibold text-ink transition-colors hover:bg-ink hover:text-hazard"
            >
              Book a visit
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-xs border border-ink p-2 text-ink md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-pine text-chalk md:hidden">
          <div className="wrap flex h-[72px] items-center justify-between">
            <Wordmark light />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="rounded-xs border border-chalk/30 p-2"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <nav className="wrap flex flex-1 flex-col gap-1 overflow-y-auto pb-10 pt-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display border-b border-chalk/12 py-4 text-[1.7rem] text-paper"
              >
                {item.label}
              </Link>
            ))}
            <p className="pt-6 text-[0.8rem] text-chalk/60">What we get rid of</p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-[0.95rem] text-chalk/85">
              {services.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  {s.name}
                </Link>
              ))}
            </div>
            <a
              href={site.phoneHref}
              className="mt-8 flex items-center justify-center gap-2 rounded-xs bg-hazard px-5 py-4 font-semibold text-ink"
            >
              <Phone className="h-4 w-4" />
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}

      <main id="main" className="pb-20 md:pb-0">{children}</main>

      <footer className="bg-pine text-chalk">
        <div className="tape" aria-hidden="true" />
        <div className="wrap grid gap-10 py-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <Wordmark light />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-relaxed text-chalk/70">
              Licensed cockroach, bedbug, rodent and termite treatment for homes and
              businesses across Nairobi and central Kenya.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2 rounded-xs bg-hazard px-4 py-2.5 text-[0.9rem] font-semibold text-ink"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
              <a
                href={waLink('Hi Safeguard, I would like a quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xs border border-chalk/30 px-4 py-2.5 text-[0.9rem] font-semibold"
              >
                <WhatsApp className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[0.95rem] text-paper">Treatments</h3>
            <ul className="mt-4 space-y-2 text-[0.9rem] text-chalk/70">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-hazard">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.95rem] text-paper">Where we work</h3>
            <p className="mt-4 text-[0.9rem] leading-relaxed text-chalk/70">
              {areas.nairobi.slice(0, 10).join(', ')} and the rest of Nairobi.
            </p>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-chalk/70">
              Also {areas.beyond.join(', ')}.
            </p>
          </div>

          <div>
            <h3 className="text-[0.95rem] text-paper">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-[0.9rem] text-chalk/70">
              <li>
                <a href={site.phoneHref} className="font-semibold text-paper">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>{site.hoursWeek}</li>
              <li>{site.hoursSunday}</li>
              <li className="text-chalk/50">{site.payment}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-chalk/12">
          <div className="wrap flex flex-col gap-2 py-5 text-[0.8rem] text-chalk/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.legalName}. Nairobi, Kenya.</p>
            <p>{site.licence}</p>
          </div>
        </div>
      </footer>

      {/* Mobile action bar: the two things a worried customer actually needs */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink md:hidden">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 bg-hazard py-4 font-semibold text-ink"
        >
          <Phone className="h-4 w-4" />
          Call now
        </a>
        <a
          href={waLink('Hi Safeguard, I need help with pests at my place.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-ink py-4 font-semibold text-chalk"
        >
          <WhatsApp className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}