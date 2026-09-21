import type { Metadata } from 'next';
import SiteShell from '@/components/site-shell';
import { Button, CallButton, SectionHead, WhatsAppButton } from '@/components/ui';
import { Check } from '@/components/icons';
import { site, stats } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Safeguard Fumigation',
  description:
    'A Nairobi pest control team of licensed technicians working with PCPB-registered products, written warranties and service reports accepted by public health inspectors.',
};

const standards = [
  {
    title: 'Registered products only',
    body: 'Everything we apply is registered with the Pest Control Products Board and used at label dosage. No repackaged agricultural chemicals, which is what makes cheap jobs dangerous.',
  },
  {
    title: 'The same technician returns',
    body: 'The person who treated your house does the follow-up. They already know where the harbourages were, so the second visit takes half the time.',
  },
  {
    title: 'Written, not verbal',
    body: 'You get a service report listing what was treated, what was used and the warranty period. Landlords, schools and health inspectors accept it.',
  },
  {
    title: 'We tell you when not to treat',
    body: 'Sometimes the answer is a plumber, a rubbish collection or sealing one gap. We will say so rather than sell you a spray that will not hold.',
  },
];

const safety = [
  'Re-entry time given in writing before we start',
  'Low-odour options for homes with infants, asthma or pregnancy',
  'Fish, birds and plants moved or covered before treatment',
  'Bait stations locked and placed out of children’s reach',
  'Technicians in full PPE, uniformed and carrying ID',
  'Empty containers removed from your property, never left in your bin',
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-rule">
        <div className="wrap grid gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <h1 className="text-[2.6rem] leading-[1] sm:text-[3.3rem]">
              A small Nairobi team that finishes the job and comes back to check.
            </h1>
            <p className="measure mt-6 text-[1.05rem] leading-[1.7] text-ink-soft">
              Safeguard started in 2017 with one technician, one sprayer and a lot of calls
              from people who had already paid someone else twice. Nine years on we are a team
              of licensed technicians working across Nairobi, Kiambu and Machakos, and the
              method has not changed: inspect first, treat the harbourage rather than the
              floor, then return to confirm it worked.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton />
              <WhatsAppButton />
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px self-start border border-rule bg-rule">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper p-6">
                <dt className="display text-[1.9rem] text-ink">{s.value}</dt>
                <dd className="mt-2 text-[0.88rem] leading-snug text-ink-soft">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wrap py-14 lg:py-20">
        <SectionHead
          title="How we work, and why it costs what it costs"
          lead="Four things we do not cut corners on."
        />
        <div className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {standards.map((s) => (
            <article key={s.title} className="bg-paper p-7">
              <h3 className="text-[1.25rem]">{s.title}</h3>
              <p className="mt-3 text-[0.96rem] leading-[1.7] text-ink-soft">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-pine text-chalk">
        <div className="tape" aria-hidden="true" />
        <div className="wrap grid gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">
          <div>
            <h2 className="text-[2rem] text-paper">Safety in an occupied house</h2>
            <p className="measure mt-4 text-[1.02rem] leading-[1.7] text-chalk/75">
              Almost every home we treat has children, an elderly parent or a dog in it. The
              chemistry is only half the job. The other half is telling you exactly how long to
              stay out and what to wipe down before you cook again.
            </p>
            <Button href="/contact" tone="hazard" className="mt-8">
              Talk to a technician
            </Button>
          </div>

          <ul className="grid gap-3 self-start">
            {safety.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 border border-chalk/15 bg-pine-deep p-4 text-[0.95rem] text-chalk/85"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-hazard" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-14 lg:py-20">
        <div className="grid gap-10 border border-ink bg-paper p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
          <div>
            <h2 className="text-[1.9rem]">Licensing and compliance</h2>
            <p className="measure mt-4 text-[0.98rem] leading-[1.7] text-ink-soft">
              {site.licence}. Operations follow NEMA waste handling rules, and every commercial
              client receives a service file with dated reports, product data sheets and a bait
              station map, which is what an auditor asks for first.
            </p>
          </div>
          <CallButton tone="ink" />
        </div>
      </section>
    </SiteShell>
  );
}