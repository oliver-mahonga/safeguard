import Link from 'next/link';
import SiteShell from './components/site-shell';

const services = [
  {
    title: 'Residential Fumigation',
    description:
      'Targeted cockroach elimination for apartments, homes, and family spaces with safe, long-lasting treatment.',
    accent: 'Home protection',
  },
  {
    title: 'Commercial Pest Control',
    description:
      'Hospital-grade treatment plans for restaurants, hotels, supermarkets, and office buildings that need rapid results.',
    accent: '24/7 compliance',
  },
  {
    title: 'Deep Cleaning & Prevention',
    description:
      'Follow-up sanitation and preventive measures to reduce breeding grounds and stop reinfestation before it starts.',
    accent: 'Prevention focus',
  },
  {
    title: 'Maintenance Packages',
    description:
      'Ongoing monitoring visits to protect your property year-round with scheduled inspections and reporting.',
    accent: 'Continuous care',
  },
];

const stats = [
  { value: '12k+', label: 'Properties protected' },
  { value: '98%', label: 'Satisfaction rate' },
  { value: '4.9/5', label: 'Client rating' },
  { value: '24/7', label: 'Emergency response' },
];

const process = [
  'Detailed inspection of cockroach hotspots and risk areas',
  'Custom fumigation and treatment plan with safe product use',
  'Follow-up monitoring to ensure complete protection',
];

const features = [
  'Certified fumigation specialists',
  'Eco-conscious and family-safe solutions',
  'Fast response for homes and businesses',
  'Transparent pricing and no hidden costs',
  'Discreet treatment for residential spaces',
  'Multi-site support for commercial clients',
];

const testimonials = [
  {
    quote:
      'The team arrived on time and eliminated the issue in just one treatment. Our restaurant is finally pest-free and inspection-ready.',
    name: 'Maya Thompson',
    role: 'Restaurant Owner',
  },
  {
    quote:
      'Our apartment had a persistent cockroach problem for months. Safeguard handled it professionally and explained the process clearly.',
    name: 'Daniel M.',
    role: 'Homeowner',
  },
  {
    quote:
      'Their commercial fumigation service gave us peace of mind. The whole process was efficient, clean, and highly professional.',
    name: 'Alicia Gomez',
    role: 'Property Manager',
  },
];

const packages = [
  {
    name: 'Essential Care',
    price: '$149',
    description: 'Perfect for small homes and quick treatment needs.',
    perks: ['1 inspection', 'Targeted treatment', 'Follow-up advice'],
    featured: false,
  },
  {
    name: 'BusinessGuard',
    price: '$399',
    description: 'Designed for restaurants, shops, and busy commercial spaces.',
    perks: ['Full property audit', 'Commercial fumigation', 'Reporting & support'],
    featured: true,
  },
  {
    name: 'Premium Protection',
    price: '$799',
    description: 'Advanced prevention for larger spaces and high-risk premises.',
    perks: ['Deep treatment', 'Multi-zone coverage', 'Quarterly monitoring'],
    featured: false,
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(16,185,129,0.12),_transparent_35%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:py-24">
          <div className="relative z-10 flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Certified cockroach control
            </span>

            <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Professional fumigation that keeps your property safe and pest-free.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Safeguard delivers reliable cockroach control for homes, businesses, and commercial facilities using proven treatment solutions and continuous protection plans.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-gradient-to-r from-emerald-700 to-lime-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-emerald-900/15 transition hover:-translate-y-0.5">
                Schedule inspection
              </Link>
              <Link href="/services" className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-emerald-700">
                Explore services
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur-sm">
                  <div className="text-2xl font-black text-emerald-700">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative mx-auto max-w-lg rounded-[2rem] border border-emerald-200/80 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-md">
              <div className="rounded-[1.6rem] bg-[linear-gradient(135deg,_#0f172a_0%,_#0f766e_38%,_#65a30d_100%)] p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-emerald-100">Protection plan</div>
                    <div className="mt-2 text-2xl font-black">Cockroach Shield</div>
                  </div>
                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-50">Most popular</div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-white/8 p-4 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-sm text-emerald-50">
                      <span>Inspection coverage</span>
                      <span className="font-bold text-white">Full property</span>
                    </div>
                    <div className="mt-3 h-2.5 rounded-full bg-white/10">
                      <div className="h-2.5 w-[88%] rounded-full bg-gradient-to-r from-lime-300 to-emerald-200" />
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-slate-950/10 p-4">
                      <div className="text-3xl font-black">2-4 hrs</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-emerald-50/80">Treatment time</div>
                    </div>
                    <div className="rounded-2xl bg-slate-950/10 p-4">
                      <div className="text-3xl font-black">12 mo</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-emerald-50/80">Protection window</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 rounded-[1.4rem] bg-[#f7f4ed] p-4 text-sm text-slate-700 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <div className="text-xl">✅</div>
                  <div className="mt-2 font-semibold text-slate-900">Safe</div>
                </div>
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <div className="text-xl">🛡️</div>
                  <div className="mt-2 font-semibold text-slate-900">Reliable</div>
                </div>
                <div className="rounded-2xl bg-white p-3 shadow-sm">
                  <div className="text-xl">📍</div>
                  <div className="mt-2 font-semibold text-slate-900">Local</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Our services</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Pest control solutions built for real life.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_60px_rgba(16,185,129,0.12)]"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-lime-100 text-2xl shadow-inner shadow-emerald-200/60">
                {index === 0 ? '🏠' : index === 1 ? '🏢' : index === 2 ? '🧼' : '🛡️'}
              </div>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">{service.accent}</div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="why-us" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Why safeguard</p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">Trusted protection from the first inspection to long-term peace of mind.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              We combine proven fumigation methods, detailed inspection, and ongoing support to help clients maintain cleaner, safer spaces without stress.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-lg text-emerald-300">✓</div>
                  <span className="text-base font-medium text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6">
              <div className="text-4xl font-black text-emerald-300">90%</div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-slate-300">Reduction in activity</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">Most clients report visible improvements within days of treatment and follow-through.</p>
            </div>
            <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-emerald-500/20 to-lime-500/10 p-6">
              <div className="text-4xl font-black text-lime-300">1 visit</div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-slate-200">Fast treatment window</div>
              <p className="mt-4 text-sm leading-7 text-slate-200">Our team works efficiently to minimize disruption to your routine or business operations.</p>
            </div>
            <div className="rounded-[1.7rem] border border-white/10 bg-white/5 p-6 sm:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-sm uppercase tracking-[0.2em] text-emerald-200">Coverage</div>
                  <div className="mt-2 text-2xl font-black text-white">Before & After</div>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">Action plan</div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-900 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Before</div>
                  <div className="mt-3 text-2xl font-black text-rose-300">High risk</div>
                  <p className="mt-2 text-sm text-slate-300">Roach activity around bins, cracks, and plumbing.</p>
                </div>
                <div className="rounded-2xl bg-slate-900 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400">After</div>
                  <div className="mt-3 text-2xl font-black text-emerald-300">Controlled</div>
                  <p className="mt-2 text-sm text-slate-300">Targeted treatment plus prevention for lasting results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">How it works</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">A clear process for lasting results.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {process.map((step, index) => (
            <div key={step} className="relative rounded-[1.8rem] border border-emerald-100 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 text-lg font-black text-white shadow-lg shadow-emerald-600/20">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{index === 0 ? 'Inspect' : index === 1 ? 'Treat' : 'Protect'}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="bg-[#eef8f0] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Client feedback</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">What clients say about Safeguard.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[1.8rem] border border-emerald-100 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
                <div className="mb-5 text-3xl text-amber-400">★★★★★</div>
                <p className="text-base leading-8 text-slate-600">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Simple pricing</p>
          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">Flexible packages to fit every property.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-[1.9rem] border p-7 shadow-[0_18px_50px_rgba(15,23,42,0.04)] ${
                pkg.featured
                  ? 'border-emerald-300 bg-[linear-gradient(180deg,_rgba(16,185,129,0.08),_rgba(255,255,255,1))] shadow-[0_24px_80px_rgba(16,185,129,0.18)]'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-slate-900">{pkg.name}</div>
                {pkg.featured ? (
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Popular</span>
                ) : null}
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-black text-slate-900">{pkg.price}</span>
                <span className="pb-1 text-sm text-slate-500">/ visit</span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">{pkg.description}</p>

              <ul className="mt-6 space-y-3">
                {pkg.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-sm text-slate-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-xs font-black text-emerald-700">✓</span>
                    {perk}
                  </li>
                ))}
              </ul>

              <Link href="/pricing" className={`mt-8 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${pkg.featured ? 'bg-gradient-to-r from-emerald-600 to-lime-500 text-white shadow-lg shadow-emerald-600/20 hover:scale-[1.01]' : 'border border-slate-300 bg-white text-slate-800 hover:border-emerald-300 hover:text-emerald-700'}`}>
                Choose package
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_35%),_linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(12,74,110,0.85))] p-8 shadow-[0_40px_100px_rgba(15,23,42,0.35)] lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Need help now?</p>
                <h2 className="mt-4 max-w-xl text-3xl font-black sm:text-4xl">Protect your home or business before the problem gets worse.</h2>
                <p className="mt-4 max-w-lg text-base leading-8 text-slate-200">
                  Our team is ready to inspect, discuss your risks, and recommend the right treatment plan for your space.
                </p>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="text-sm uppercase tracking-[0.2em] text-emerald-300">Call us</div>
                <div className="mt-4 text-3xl font-black text-white">+1 (800) 555-0148</div>
                <div className="mt-5 space-y-4 text-sm text-slate-200">
                  <div>Mon–Sat: 7:00 AM – 8:00 PM</div>
                  <div>support@safeguardfumigation.com</div>
                  <div>24/7 emergency support available</div>
                </div>
                <Link href="/contact" className="mt-6 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20">
                  Request a callback
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
