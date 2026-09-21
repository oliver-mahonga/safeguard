import type { Metadata } from 'next';
import SiteShell from '@/components/site-shell';
import QuoteForm from '@/components/quote-form';
import Faq from '@/components/faq';
import { SectionHead } from '@/components/ui';
import { Clock, Mail, Phone, Pin, WhatsApp } from '@/components/icons';
import { areas, faqs, site, waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Book a fumigation visit in Nairobi',
  description:
    'Book cockroach, bedbug, rodent or termite treatment in Nairobi. Call 0746 378 772, WhatsApp us, or request a call back and we quote a fixed price.',
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="border-b border-rule">
        <div className="wrap grid gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div>
            <h1 className="text-[2.5rem] leading-[1.02] sm:text-[3.2rem]">
              Tell us what you are seeing and we will handle it.
            </h1>
            <p className="measure mt-5 text-[1.05rem] leading-[1.7] text-ink-soft">
              Calling is fastest. If you are at work or in a meeting, leave your details and a
              technician rings you back with a fixed price.
            </p>

            <div className="mt-8 grid gap-px border border-ink bg-rule">
              <a href={site.phoneHref} className="flex items-center gap-4 bg-paper p-5 transition-colors hover:bg-chalk">
                <Phone className="h-6 w-6 text-field" />
                <span>
                  <span className="block text-[0.82rem] text-ink-soft">Call us</span>
                  <span className="display block text-[1.4rem]">{site.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={waLink('Hi Safeguard, I need a fumigation quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-paper p-5 transition-colors hover:bg-chalk"
              >
                <WhatsApp className="h-6 w-6 text-field" />
                <span>
                  <span className="block text-[0.82rem] text-ink-soft">WhatsApp, photos welcome</span>
                  <span className="display block text-[1.4rem]">{site.phoneDisplay}</span>
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 bg-paper p-5 transition-colors hover:bg-chalk">
                <Mail className="h-6 w-6 text-field" />
                <span>
                  <span className="block text-[0.82rem] text-ink-soft">Email, for written quotes</span>
                  <span className="block text-[1.05rem] font-semibold">{site.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 bg-paper p-5">
                <Clock className="h-6 w-6 text-field" />
                <span>
                  <span className="block text-[0.82rem] text-ink-soft">Working hours</span>
                  <span className="block text-[1rem] font-medium">{site.hoursWeek}</span>
                  <span className="block text-[0.9rem] text-ink-soft">{site.hoursSunday}</span>
                </span>
              </div>
              <div className="flex items-center gap-4 bg-paper p-5">
                <Pin className="h-6 w-6 text-field" />
                <span>
                  <span className="block text-[0.82rem] text-ink-soft">Where we come from</span>
                  <span className="block text-[1rem] font-medium">
                    Nairobi, with technicians in Westlands, town and Eastlands
                  </span>
                </span>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      <section className="wrap py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            title="Areas we cover"
            lead="Same-day visits across Nairobi. Scheduled visits to the towns around it."
          />
          <div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
              {areas.nairobi.map((a) => (
                <li key={a} className="flex items-center gap-2 text-[0.95rem]">
                  <span className="h-1.5 w-1.5 bg-hazard" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-rule pt-5 text-[0.95rem] text-ink-soft">
              Also serving {areas.beyond.join(', ')}.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper py-14 lg:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead title="Before you book" />
          <Faq items={faqs.slice(0, 4)} />
        </div>
      </section>
    </SiteShell>
  );
}