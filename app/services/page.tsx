import type { Metadata } from 'next';
import Link from 'next/link';
import SiteShell from '@/components/site-shell';
import { Button, CallButton, Money, SectionHead, WhatsAppButton } from '@/components/ui';
import { pestIcons } from '@/components/icons';
import { services } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Fumigation and pest control services in Nairobi',
  description:
    'Cockroach, bedbug, rodent, termite, mosquito and flea treatment for homes and businesses in Nairobi. Fixed prices from KSh 3,500 with a written warranty.',
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-rule">
        <div className="wrap py-14 lg:py-20">
          <h1 className="max-w-3xl text-[2.6rem] leading-[1] sm:text-[3.4rem]">
            Every pest has a method. We use the right one.
          </h1>
          <p className="measure mt-6 text-[1.08rem] leading-[1.65] text-ink-soft">
            Spraying everything with one chemical is why infestations come back. Below is what
            each treatment involves, what it costs and how long it holds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton />
            <WhatsAppButton />
          </div>
        </div>
      </section>

      <div className="wrap py-14 lg:py-20">
        <div className="grid gap-px border border-rule bg-rule">
          {services.map((s) => {
            const Icon = pestIcons[s.icon];
            return (
              <article
                key={s.slug}
                className="grid gap-6 bg-paper p-7 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-10 md:p-9"
              >
                <Icon className="h-10 w-10 text-field" />

                <div>
                  <h2 className="text-[1.5rem]">{s.name}</h2>
                  <p className="measure mt-3 text-[0.98rem] leading-[1.7] text-ink-soft">
                    {s.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[0.88rem] text-ink">
                    {s.method.slice(0, 3).map((m) => (
                      <li key={m} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-hazard" aria-hidden="true" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="shrink-0 md:w-48 md:text-right">
                  <p className="text-[0.85rem] text-ink-soft">From</p>
                  <p className="display text-[1.7rem]">
                    <Money value={s.from} />
                  </p>
                  <p className="mt-1 text-[0.82rem] text-ink-soft">{s.warranty}</p>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-4 inline-flex rounded-xs border border-ink px-5 py-2.5 text-[0.9rem] font-semibold transition-colors hover:bg-ink hover:text-chalk"
                  >
                    Read the details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <section className="bg-pine text-chalk">
        <div className="tape" aria-hidden="true" />
        <div className="wrap grid gap-8 py-16 lg:grid-cols-2 lg:items-center lg:py-20">
          <SectionHead
            light
            title="Not sure which one you need?"
            lead="Send a photo of what you are seeing, or describe the bites. A technician tells you what it is and what it costs, free."
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <WhatsAppButton
              tone="hazard"
              label="Send a photo on WhatsApp"
              message="Hi Safeguard, I am sending a photo of what I am seeing at my place. What is it and what will it cost to treat?"
            />
            <Button href="/contact" tone="outline" className="border-chalk/40 text-chalk hover:bg-chalk hover:text-ink">
              Book an inspection
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}