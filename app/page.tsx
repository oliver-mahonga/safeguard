import Link from 'next/link';
import SiteShell from '@/components/site-shell';
import HeroBooker from '@/components/hero-booker';
import Faq from '@/components/faq';
import { Button, CallButton, Money, SectionHead, WhatsAppButton } from '@/components/ui';
import { Check, Clock, Pin, Shield, pestIcons } from '@/components/icons';
import { areas, priceTable, services, site, stats, testimonials } from '@/lib/site';

const promises = [
  'Written 6-month warranty on cockroach work',
  'One free follow-up visit included',
  'Safe for children and pets once the room is aired',
  'You pay after the job, by M-Pesa or cash',
];

const steps = [
  {
    title: 'You call or WhatsApp',
    body: 'Tell us the pest, the size of the place and your estate. We quote a fixed price on the spot.',
  },
  {
    title: 'We inspect on arrival',
    body: 'The technician checks harbourages, entry points and damp spots, then confirms the plan before touching anything.',
  },
  {
    title: 'Treatment, 1 to 4 hours',
    body: 'Gel bait, residual spray, traps or soil treatment depending on the pest. You stay out for the airing time we give you.',
  },
  {
    title: 'Follow-up and warranty',
    body: 'A free return visit clears the second hatch. If they come back inside the warranty, so do we.',
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      {/* Hero ---------------------------------------------------------- */}
      <section className="relative overflow-hidden border-b border-rule">
        <div className="wrap grid gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16 lg:py-20">
          <div>
            <p className="lift lift-1 flex items-center gap-2 text-[0.85rem] font-medium text-field">
              <Shield className="h-4 w-4" />
              {site.licence}
            </p>

            <h1 className="lift lift-2 mt-5 text-[2.6rem] leading-[0.98] sm:text-[3.4rem] lg:text-[4.1rem]">
              Cockroaches, bedbugs and rats, cleared properly the first time.
            </h1>

            <p className="lift lift-3 measure mt-6 text-[1.08rem] leading-[1.65] text-ink-soft">
              Safeguard treats homes, restaurants and offices across Nairobi with registered
              products, a fixed price agreed on the phone, and a warranty you can hold us to.
              Call before 3pm and we are usually there the same day.
            </p>

            <div className="lift lift-3 mt-8 flex flex-wrap gap-3">
              <CallButton />
              <WhatsAppButton />
            </div>

            <ul className="lift lift-4 mt-10 grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[0.95rem] text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-field" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="lift lift-4 lg:pt-2">
            <HeroBooker />
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.85rem] text-ink-soft">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-field" />
                Same-day in Nairobi
              </span>
              <span className="flex items-center gap-1.5">
                <Pin className="h-4 w-4 text-field" />
                Technicians based in town, Eastlands and Westlands
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* What we treat -------------------------------------------------- */}
      <section className="wrap py-16 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            title="What we get rid of"
            lead="Every pest needs a different method. Pick yours to see how the treatment actually works and what it costs."
          />
          <Link href="/pricing" className="border-b-2 border-hazard pb-0.5 font-semibold text-ink">
            See full price list
          </Link>
        </div>

        <div className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = pestIcons[s.icon];
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col bg-paper p-6 transition-colors hover:bg-chalk"
              >
                <Icon className="h-9 w-9 text-field" />
                <h3 className="mt-5 text-[1.18rem] text-ink">{s.name}</h3>
                <p className="mt-2 text-[0.9rem] text-ink-soft">{s.short}</p>
                <p className="mt-6 border-t border-rule pt-3 text-[0.9rem] font-semibold text-ink">
                  From <Money value={s.from} />
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Guarantee band -------------------------------------------------- */}
      <section className="bg-pine text-chalk">
        <div className="tape" aria-hidden="true" />
        <div className="wrap grid gap-12 py-16 lg:grid-cols-[1fr_0.9fr] lg:py-20">
          <div>
            <h2 className="text-[2rem] text-paper sm:text-[2.7rem]">
              If they come back inside the warranty, we come back free.
            </h2>
            <p className="measure mt-5 text-[1.05rem] leading-[1.7] text-chalk/75">
              Most people call us after somebody else sprayed the floor, took the money and
              vanished. That is why every job here ends with a written warranty, a follow-up
              visit already booked, and a service report you can show a landlord or a health
              inspector.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/pricing" tone="hazard">
                What it costs
              </Button>
              <Button href="/contact" tone="outline" className="border-chalk/40 text-chalk hover:bg-chalk hover:text-ink">
                Book an inspection
              </Button>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px self-start bg-chalk/15">
            {stats.map((s) => (
              <div key={s.label} className="bg-pine p-6">
                <dt className="display text-[1.9rem] text-hazard">{s.value}</dt>
                <dd className="mt-2 text-[0.88rem] leading-snug text-chalk/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Process --------------------------------------------------------- */}
      <section className="wrap py-16 lg:py-24">
        <SectionHead
          title="How a visit works"
          lead="Four steps, no surprises, and the price never changes once we are at your gate."
        />
        <ol className="mt-12 grid gap-px border-t border-rule md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="border-b border-rule pt-6 md:border-b-0 md:pr-6">
              <span className="display block text-[0.95rem] text-hazard">
                Step {i + 1}
              </span>
              <h3 className="mt-2 text-[1.2rem]">{step.title}</h3>
              <p className="mt-3 pb-6 text-[0.93rem] leading-[1.65] text-ink-soft">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Prices ---------------------------------------------------------- */}
      <section className="border-y border-rule bg-chalk-deep py-16 lg:py-24">
        <div className="wrap">
          <SectionHead
            title="Prices you can check before you call"
            lead="Residential treatment, all inclusive. Commercial work is quoted after a free site survey."
          />

          <div className="mt-10 overflow-x-auto border border-ink bg-paper">
            <table className="w-full min-w-[540px] text-left">
              <thead>
                <tr className="border-b border-ink bg-ink text-chalk">
                  <th className="px-5 py-4 text-[0.88rem] font-semibold">Size of space</th>
                  <th className="px-5 py-4 text-[0.88rem] font-semibold">Cockroaches</th>
                  <th className="px-5 py-4 text-[0.88rem] font-semibold">Bedbugs</th>
                  <th className="px-5 py-4 text-[0.88rem] font-semibold">Full fumigation</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row) => (
                  <tr key={row.space} className="border-b border-rule last:border-0">
                    <td className="px-5 py-4 text-[0.95rem] font-medium">{row.space}</td>
                    <td className="px-5 py-4 text-[0.95rem] tnum text-ink-soft">
                      <Money value={row.cockroaches} />
                    </td>
                    <td className="px-5 py-4 text-[0.95rem] tnum text-ink-soft">
                      <Money value={row.bedbugs} />
                    </td>
                    <td className="px-5 py-4 text-[0.95rem] tnum text-ink-soft">
                      <Money value={row.general} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[0.9rem] text-ink-soft">
            Includes inspection, treatment and one follow-up visit. {site.payment}
          </p>
        </div>
      </section>

      {/* Areas ----------------------------------------------------------- */}
      <section className="wrap py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            title="Where we work"
            lead="Nairobi and the towns around it. Outside this list, call and we will tell you honestly whether we can reach you."
          />
          <div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
              {areas.nairobi.map((a) => (
                <li key={a} className="flex items-center gap-2 text-[0.95rem] text-ink">
                  <span className="h-1.5 w-1.5 bg-hazard" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-rule pt-5 text-[0.95rem] text-ink-soft">
              We also travel to {areas.beyond.join(', ')} for scheduled work and contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials ---------------------------------------------------- */}
      <section className="border-t border-rule bg-paper py-16 lg:py-24">
        <div className="wrap">
          <SectionHead title="What clients say after the follow-up visit" />
          <div className="mt-10 grid gap-px border border-rule bg-rule lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col justify-between bg-paper p-7">
                <blockquote className="text-[1rem] leading-[1.7] text-ink">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-rule pt-4">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-[0.88rem] text-ink-soft">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ------------------------------------------------------------- */}
      <section className="wrap py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            title="Questions people ask before booking"
            lead="If yours is not here, ask on WhatsApp. A technician answers, not a bot."
          />
          <Faq />
        </div>
      </section>

      {/* Closing CTA ------------------------------------------------------ */}
      <section className="bg-ink text-chalk">
        <div className="tape" aria-hidden="true" />
        <div className="wrap flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div>
            <h2 className="text-[2rem] text-paper sm:text-[2.6rem]">
              The longer you wait, the more they breed.
            </h2>
            <p className="measure mt-4 text-[1.05rem] leading-[1.6] text-chalk/70">
              One call, a fixed price, and a technician at your door today.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="display rounded-xs border border-hazard bg-hazard px-7 py-4 text-[1.3rem] text-ink"
            >
              {site.phoneDisplay}
            </a>
            <WhatsAppButton
              tone="outline"
              className="border-chalk/40 text-chalk hover:bg-chalk hover:text-ink"
              label="Chat on WhatsApp"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}