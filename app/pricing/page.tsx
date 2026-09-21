import type { Metadata } from 'next';
import SiteShell from '@/components/site-shell';
import Faq from '@/components/faq';
import { Button, CallButton, Money, SectionHead, WhatsAppButton } from '@/components/ui';
import { Check } from '@/components/icons';
import { faqs, plans, priceTable, services, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Fumigation prices in Nairobi',
  description:
    'Fumigation and pest control prices in Kenya. Cockroach treatment from KSh 3,500, bedbugs from KSh 4,000, business contracts from KSh 12,000 a month. Pay by M-Pesa after the job.',
};

const factors = [
  {
    title: 'The pest',
    body: 'Bedbugs and termites take longer and need a second visit, so they cost more than a kitchen roach job.',
  },
  {
    title: 'The size of the space',
    body: 'We price per space, not per room, so a two bedroom is one price whether we treat two rooms or four.',
  },
  {
    title: 'How long it has run',
    body: 'An infestation that has spread to neighbouring units needs more product and sometimes a shared treatment.',
  },
  {
    title: 'Access and timing',
    body: 'Night work for restaurants and weekend work for offices carries a small call-out charge, agreed upfront.',
  },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="border-b border-rule">
        <div className="wrap py-14 lg:py-20">
          <h1 className="max-w-3xl text-[2.6rem] leading-[1] sm:text-[3.4rem]">
            Fixed prices, agreed before we leave the office.
          </h1>
          <p className="measure mt-6 text-[1.08rem] leading-[1.65] text-ink-soft">
            No inspection fee, no surprise charges at the gate, no pressure to upgrade. You
            hear the price on the phone and that is the price you pay, by M-Pesa or cash,
            after the work is done.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallButton />
            <WhatsAppButton label="Ask for a quote" />
          </div>
        </div>
      </section>

      {/* Plans ------------------------------------------------------------ */}
      <section className="wrap py-14 lg:py-20">
        <div className="grid gap-px border border-rule bg-rule lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-8 ${plan.featured ? 'bg-pine text-chalk' : 'bg-paper'}`}
            >
              {plan.featured ? (
                <span className="mb-4 inline-flex w-fit rounded-xs bg-hazard px-3 py-1 text-[0.78rem] font-semibold text-ink">
                  Most homes choose this
                </span>
              ) : null}
              <h2 className={`text-[1.5rem] ${plan.featured ? 'text-paper' : 'text-ink'}`}>
                {plan.name}
              </h2>
              <p
                className={`mt-3 text-[0.95rem] leading-relaxed ${
                  plan.featured ? 'text-chalk/75' : 'text-ink-soft'
                }`}
              >
                {plan.description}
              </p>

              <p className="display mt-6 text-[2rem]">
                <span className={plan.featured ? 'text-hazard' : 'text-ink'}>{plan.price}</span>
              </p>
              <p className={`text-[0.85rem] ${plan.featured ? 'text-chalk/60' : 'text-ink-soft'}`}>
                {plan.unit}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.93rem]">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? 'text-hazard' : 'text-field'}`}
                    />
                    <span className={plan.featured ? 'text-chalk/90' : 'text-ink'}>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                tone={plan.featured ? 'hazard' : 'outline'}
                className="mt-8 w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Table ------------------------------------------------------------ */}
      <section className="border-y border-rule bg-chalk-deep py-14 lg:py-20">
        <div className="wrap">
          <SectionHead
            title="Residential price list"
            lead="All prices include the inspection, the treatment and one follow-up visit."
          />

          <div className="mt-10 overflow-x-auto border border-ink bg-paper">
            <table className="w-full min-w-[540px] text-left">
              <thead>
                <tr className="bg-ink text-chalk">
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
                    <td className="px-5 py-4 text-[0.95rem] text-ink-soft">
                      <Money value={row.cockroaches} />
                    </td>
                    <td className="px-5 py-4 text-[0.95rem] text-ink-soft">
                      <Money value={row.bedbugs} />
                    </td>
                    <td className="px-5 py-4 text-[0.95rem] text-ink-soft">
                      <Money value={row.general} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(2).map((s) => (
              <div key={s.slug} className="bg-paper p-5">
                <p className="text-[0.9rem] font-medium">{s.name}</p>
                <p className="display mt-2 text-[1.3rem]">
                  <Money value={s.from} />
                </p>
                <p className="mt-1 text-[0.8rem] text-ink-soft">starting price</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What changes the price ------------------------------------------- */}
      <section className="wrap py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead
            title="What moves the price"
            lead="So you know what we are asking about on the phone."
          />
          <dl className="grid gap-px border border-rule bg-rule sm:grid-cols-2">
            {factors.map((f) => (
              <div key={f.title} className="bg-paper p-6">
                <dt className="text-[1.05rem] font-semibold">{f.title}</dt>
                <dd className="mt-2 text-[0.93rem] leading-[1.65] text-ink-soft">{f.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-pine text-chalk">
        <div className="tape" aria-hidden="true" />
        <div className="wrap grid gap-10 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <h2 className="text-[2rem] text-paper">Paying is simple</h2>
            <p className="measure mt-4 text-[1.02rem] leading-[1.7] text-chalk/75">
              {site.payment} Businesses on contract are invoiced monthly and can pay by bank
              transfer. Every job comes with a receipt and, where you need one, a signed
              certificate of fumigation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" tone="hazard">
                Book a visit
              </Button>
              <WhatsAppButton
                tone="outline"
                className="border-chalk/40 text-chalk hover:bg-chalk hover:text-ink"
                label="Ask a question"
              />
            </div>
          </div>
          <div className="rounded-sm border border-chalk/20 bg-pine-deep p-7">
            <h3 className="text-[1.2rem] text-paper">Landlords and agents</h3>
            <p className="mt-3 text-[0.95rem] leading-[1.7] text-chalk/70">
              Treating several units at once brings the per-unit price down sharply. Send the
              number of units and the estate and we will quote the block.
            </p>
            <h3 className="mt-7 text-[1.2rem] text-paper">Students and hostels</h3>
            <p className="mt-3 text-[0.95rem] leading-[1.7] text-chalk/70">
              Shared rooms are priced per room with a group rate when three or more rooms in
              the same building book together.
            </p>
          </div>
        </div>
      </section>

      <section className="wrap py-14 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHead title="Price questions" />
          <Faq items={faqs.slice(2, 6)} />
        </div>
      </section>
    </SiteShell>
  );
}