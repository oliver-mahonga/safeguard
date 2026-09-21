import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/site-shell';
import { Button, CallButton, Money, WhatsAppButton } from '@/components/ui';
import { Check, pestIcons } from '@/components/icons';
import { services, site } from '@/lib/site';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} in Nairobi`,
    description: `${service.summary} From KSh ${service.from.toLocaleString('en-KE')}, with a warranty. Call ${site.phoneDisplay}.`,
  };
}

export default async function ServiceDetail({ params }: Params) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = pestIcons[service.icon];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <SiteShell>
      <section className="border-b border-rule">
        <div className="wrap py-12 lg:py-16">
          <nav className="text-[0.85rem] text-ink-soft">
            <Link href="/services" className="hover:text-ink">
              Services
            </Link>
            <span className="px-2">/</span>
            <span className="text-ink">{service.name}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <Icon className="h-12 w-12 text-field" />
              <h1 className="mt-5 text-[2.4rem] leading-[1.02] sm:text-[3.1rem]">{service.name}</h1>
              <p className="measure mt-5 text-[1.05rem] leading-[1.7] text-ink-soft">
                {service.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CallButton />
                <WhatsAppButton
                  message={`Hi Safeguard, I need ${service.name.toLowerCase()}. What will it cost?`}
                />
              </div>
            </div>

            <aside className="rounded-sm border border-ink bg-paper p-6 stack-shadow">
              <p className="text-[0.85rem] text-ink-soft">Price starts at</p>
              <p className="display mt-1 text-[2.2rem]">
                <Money value={service.from} />
              </p>
              <dl className="mt-5 space-y-3 border-t border-rule pt-5 text-[0.92rem]">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">Best for</dt>
                  <dd className="text-right font-medium">{service.short}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">Warranty</dt>
                  <dd className="text-right font-medium">{service.warranty}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">Availability</dt>
                  <dd className="text-right font-medium">Same day in Nairobi</dd>
                </div>
              </dl>
              <Button href="/contact" tone="hazard" className="mt-6 w-full">
                Book this treatment
              </Button>
            </aside>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-12 py-14 lg:grid-cols-2 lg:py-20">
        <div>
          <h2 className="text-[1.7rem]">How to know it is {service.name.toLowerCase()}</h2>
          <ul className="mt-6 space-y-4">
            {service.signs.map((sign) => (
              <li key={sign} className="flex gap-3 border-b border-rule pb-4 text-[0.98rem] leading-[1.6]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
                {sign}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[1.7rem]">What we do on the day</h2>
          <ol className="mt-6 space-y-4">
            {service.method.map((m, i) => (
              <li key={m} className="flex gap-4 border-b border-rule pb-4 text-[0.98rem] leading-[1.6]">
                <span className="display shrink-0 text-hazard">{String(i + 1).padStart(2, '0')}</span>
                {m}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-rule bg-chalk-deep py-14 lg:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-[1.7rem]">Prepare the space before we arrive</h2>
            <p className="measure mt-4 text-[0.98rem] leading-[1.7] text-ink-soft">
              Ten minutes of preparation makes the difference between a treatment that holds
              and one that fails. We send this list on WhatsApp once your visit is booked.
            </p>
          </div>
          <ul className="grid gap-3">
            {service.prep.map((p) => (
              <li key={p} className="flex items-start gap-3 border border-rule bg-paper p-4 text-[0.95rem]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-field" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-14 lg:py-20">
        <h2 className="text-[1.7rem]">Other treatments</h2>
        <div className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => {
            const OtherIcon = pestIcons[s.icon];
            return (
              <Link key={s.slug} href={`/services/${s.slug}`} className="bg-paper p-6 transition-colors hover:bg-chalk">
                <OtherIcon className="h-8 w-8 text-field" />
                <h3 className="mt-4 text-[1.1rem]">{s.name}</h3>
                <p className="mt-2 text-[0.88rem] text-ink-soft">
                  From <Money value={s.from} />
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-ink text-chalk">
        <div className="tape" aria-hidden="true" />
        <div className="wrap flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-[1.8rem] text-paper sm:text-[2.2rem]">
            Book {service.name.toLowerCase()} today
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="display rounded-xs border border-hazard bg-hazard px-6 py-3.5 text-[1.2rem] text-ink"
            >
              {site.phoneDisplay}
            </a>
            <Button href="/contact" tone="outline" className="border-chalk/40 text-chalk hover:bg-chalk hover:text-ink">
              Request a call back
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}