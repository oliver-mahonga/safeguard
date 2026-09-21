'use client';

import { useState } from 'react';
import { faqs } from '@/lib/site';

export default function Faq({ items = faqs }: { items?: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-rule">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-rule">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span className="display text-[1.05rem] sm:text-[1.2rem] text-ink">
                  {item.q}
                </span>
                <span
                  className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-xs border border-ink text-ink transition-colors ${
                    isOpen ? 'bg-ink text-hazard' : 'bg-transparent'
                  }`}
                  aria-hidden="true"
                >
                  {isOpen ? '–' : '+'}
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-[grid-template-rows] duration-200 ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="measure pb-6 text-[0.98rem] leading-[1.7] text-ink-soft">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}