'use client';

import { FormEvent, useState } from 'react';
import SiteShell from '../components/site-shell';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());
    console.log('Safeguard form submission:', payload);
    setSubmitted(true);
    form.reset();
  }

  return (
    <SiteShell>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Contact</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Book a fumigation inspection or request a quote today.</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We’re ready to help with residential, commercial, and preventive pest control needs. Reach out and we’ll guide you to the right service plan.
            </p>

            <div className="mt-8 space-y-5 text-base text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-700">Call</div>
                <div className="mt-2 font-bold text-slate-900">+1 (800) 555-0148</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-700">Email</div>
                <div className="mt-2 font-bold text-slate-900">support@safeguardfumigation.com</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.2em] text-emerald-700">Hours</div>
                <div className="mt-2 font-bold text-slate-900">Mon–Sat: 7:00 AM – 8:00 PM</div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700">
                  Full name
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
                    placeholder="Your name"
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Phone number
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
                    placeholder="(000) 000-0000"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-slate-700">
                Email address
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Service needed
                <select
                  name="service"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Residential Fumigation">Residential Fumigation</option>
                  <option value="Commercial Pest Control">Commercial Pest Control</option>
                  <option value="Deep Cleaning & Prevention">Deep Cleaning & Prevention</option>
                  <option value="Maintenance Packages">Maintenance Packages</option>
                </select>
              </label>

              <label className="block text-sm font-medium text-slate-700">
                Property details
                <textarea
                  name="details"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-emerald-400 focus:bg-white"
                  placeholder="Tell us about your property, issue, and preferred visit time."
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-lime-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:scale-[1.01]"
              >
                Request consultation
              </button>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  Your request has been sent successfully. Our team will contact you shortly.
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
