import Link from 'next/link';
import SiteShell from '../components/site-shell';

const serviceList = [
  {
    title: 'Residential Fumigation',
    icon: '🏠',
    description: 'Safe and effective removal of cockroaches from homes, apartments, and family spaces with long-term protection.',
    includes: ['Inspection', 'Targeted treatment', 'Follow-up guidance'],
  },
  {
    title: 'Commercial Pest Control',
    icon: '🏢',
    description: 'Rapid response for offices, retail stores, hotels, and restaurants that need compliant, low-disruption treatment.',
    includes: ['Facility audit', 'Commercial plan', 'Compliance support'],
  },
  {
    title: 'Deep Cleaning & Prevention',
    icon: '🧼',
    description: 'Sanitation and prevention services designed to eliminate food sources and hidden nesting areas.',
    includes: ['Sanitization', 'Crack sealing', 'Preventive checks'],
  },
  {
    title: 'Maintenance Contracts',
    icon: '🛡️',
    description: 'Scheduled protection plans to keep your property safe all year and detect any new activity early.',
    includes: ['Quarterly visits', 'Monitoring logs', 'Priority assistance'],
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Our solutions</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Fumigation services designed to protect every space.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you need fast residential treatment or a year-round commercial protection plan, Safeguard brings professional care and measurable results.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceList.map((service) => (
            <article key={service.title} className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-lime-100 text-3xl shadow-inner shadow-emerald-200/60">
                {service.icon}
              </div>
              <h2 className="mt-5 text-2xl font-bold text-slate-900">{service.title}</h2>
              <p className="mt-3 text-base leading-8 text-slate-600">{service.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">What to expect</p>
              <h2 className="mt-4 text-3xl font-black sm:text-4xl">A clear treatment plan with measurable results.</h2>
              <div className="mt-8 space-y-5">
                {[
                  'Full inspection and risk assessment in every room or work area',
                  'Tailored fumigation plan based on the type of infestation and property type',
                  'Follow-up checks and preventive care to stop re-entry before it starts',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">✓</div>
                    <p className="text-base leading-7 text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-emerald-200">Need a custom plan?</div>
              <div className="mt-4 text-3xl font-black text-white">Speak with our team</div>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Tell us about your property, and we’ll recommend the best treatment approach for your situation.
              </p>
              <Link href="/contact" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20">
                Request a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
