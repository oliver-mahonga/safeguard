import SiteShell from '../components/site-shell';

const values = [
  {
    title: 'Safety first',
    body: 'We use controlled, professional fumigation methods designed to be effective while prioritizing the safety of your family, staff, and customers.',
  },
  {
    title: 'Expert care',
    body: 'Every visit is guided by trained specialists who inspect each property carefully and adapt treatment to the actual infestation pattern.',
  },
  {
    title: 'Long-term prevention',
    body: 'Our approach goes beyond quick fixes by identifying root causes and building preventive strategies that help keep pests away.',
  },
];

const stats = [
  { value: '12k+', label: 'Properties protected' },
  { value: '8 yrs', label: 'Industry experience' },
  { value: '98%', label: 'Customer satisfaction' },
  { value: '24/7', label: 'Support access' },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">About us</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">We help homes and businesses stay protected, clean, and pest-free.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Safeguard was built to help people take back control of their spaces with dependable cockroach fumigation and preventive care. Our mission is simple: protect what matters with honest service and durable results.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#0f172a_0%,_#0f766e_38%,_#65a30d_100%)] p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <div className="text-sm uppercase tracking-[0.2em] text-emerald-200">Our promise</div>
              <div className="mt-4 text-3xl font-black">Reliable fumigation, every step of the way.</div>
              <p className="mt-4 text-base leading-7 text-slate-200">
                From the first inspection to long-term prevention, we focus on safe treatment, clear communication, and practical solutions tailored to your property.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
              <div className="text-3xl font-black text-emerald-700">{item.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#edf9f0] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Our values</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">The standards behind every treatment.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-[1.8rem] border border-emerald-100 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.04)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 text-xl font-black text-white">✓</div>
                <h3 className="text-2xl font-bold text-slate-900">{value.title}</h3>
                <p className="mt-3 text-base leading-8 text-slate-600">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
