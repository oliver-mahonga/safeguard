import Link from 'next/link';
import SiteShell from '../components/site-shell';

const packages = [
  {
    name: 'Essential Care',
    price: '$149',
    description: 'Perfect for smaller homes and one-off infestation issues.',
    features: ['Inspection', 'Targeted treatment', 'Advice and follow-up'],
    highlighted: false,
  },
  {
    name: 'BusinessGuard',
    price: '$399',
    description: 'A strong choice for restaurants, offices, and busy commercial spaces.',
    features: ['Commercial fumigation', 'Full-area treatment', 'Inspection report'],
    highlighted: true,
  },
  {
    name: 'Premium Protection',
    price: '$799',
    description: 'Ideal for larger premises needing full prevention and ongoing support.',
    features: ['Deep treatment', 'Multi-zone coverage', 'Quarterly monitoring'],
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Pricing</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Simple, transparent service plans for every property.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            No hidden fees. Clear recommendations. Packages designed around your space, severity, and protection goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-[1.9rem] border p-7 shadow-[0_18px_50px_rgba(15,23,42,0.04)] ${
                pkg.highlighted
                  ? 'border-emerald-300 bg-[linear-gradient(180deg,_rgba(16,185,129,0.08),_rgba(255,255,255,1))]'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">{pkg.name}</h2>
                {pkg.highlighted ? (
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Popular</span>
                ) : null}
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-black text-slate-900">{pkg.price}</span>
                <span className="pb-1 text-sm text-slate-500">/ visit</span>
              </div>

              <p className="mt-4 text-base leading-7 text-slate-600">{pkg.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-700">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  pkg.highlighted
                    ? 'bg-gradient-to-r from-emerald-600 to-lime-500 text-white shadow-lg shadow-emerald-600/20 hover:scale-[1.01]'
                    : 'border border-slate-300 bg-white text-slate-800 hover:border-emerald-300 hover:text-emerald-700'
                }`}
              >
                Choose package
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Custom quote</p>
          <h2 className="mt-4 text-3xl font-black sm:text-4xl">Need a tailored solution? We’ll build one around your property.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Large spaces, multi-unit properties, and special commercial requirements often need a custom treatment plan. Talk to our specialists for a clear recommendation.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20">
            Request a quote
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
