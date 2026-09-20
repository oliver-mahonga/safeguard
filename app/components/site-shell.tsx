'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f9f4df_0%,_#f6f3eb_35%,_#f2f6ee_100%)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-[#f7f4ed]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Safeguard home">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-lime-500 text-lg font-black text-white shadow-lg shadow-emerald-900/20">
              S
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-[0.2em] text-slate-900">SAFEGUARD</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-emerald-700">Fumigation</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-emerald-700">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm sm:inline-flex hover:border-emerald-300 hover:text-emerald-700"
            >
              Free estimate
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:scale-[1.02]"
            >
              Book now
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="rounded-full border border-slate-300 bg-white p-2 text-slate-700 md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
          >
            ☰
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-slate-200 bg-white/90 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-2 py-2 hover:bg-emerald-50 hover:text-emerald-700">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-[#f6f2ea]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-lime-500 text-sm font-black text-white">S</div>
            <span className="font-bold uppercase tracking-[0.2em] text-slate-900">Safeguard</span>
          </div>
          <div>© 2026 Safeguard Fumigation. All rights reserved.</div>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-emerald-700">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
