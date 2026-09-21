'use client';

import { useState } from 'react';
import { services, waLink } from '@/lib/site';

const propertyTypes = [
  'Bedsitter or single room',
  'One bedroom',
  'Two bedroom',
  'Three bedroom',
  'Maisonette or bungalow',
  'Office',
  'Restaurant or bar',
  'Hotel or hostel',
  'Shop, supermarket or godown',
  'School or clinic',
];

const urgencies = ['Today if possible', 'Within 2 days', 'This week', 'Just getting a price'];

type Fields = {
  name: string;
  phone: string;
  email: string;
  pest: string;
  property: string;
  area: string;
  urgency: string;
  details: string;
};

const empty: Fields = {
  name: '',
  phone: '',
  email: '',
  pest: services[0].name,
  property: propertyTypes[0],
  area: '',
  urgency: urgencies[0],
  details: '',
};

const field =
  'mt-1.5 w-full rounded-xs border border-rule bg-chalk px-3.5 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/60 focus:border-ink';
const labelText = 'text-[0.82rem] font-medium text-ink-soft';

export default function QuoteForm() {
  const [v, setV] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setV((old) => ({ ...old, [key]: value }));
    setErrors((old) => ({ ...old, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (v.name.trim().length < 2) next.name = 'Tell us who to ask for when we arrive.';
    if (v.phone.replace(/\D/g, '').length < 9) next.phone = 'We need a number that can receive a call.';
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) next.email = 'Check this email address.';
    if (!v.area.trim()) next.area = 'Which estate or town are you in?';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const message = `Hi Safeguard.
Name: ${v.name || '-'}
Pest: ${v.pest}
Property: ${v.property}
Area: ${v.area || '-'}
When: ${v.urgency}
Notes: ${v.details || '-'}`;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'contact', ...v }),
      });
      setStatus(res.ok ? 'sent' : 'failed');
    } catch {
      setStatus('failed');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-sm border border-ink bg-paper p-8 stack-shadow">
        <span className="inline-flex rounded-xs bg-field px-3 py-1 text-[0.78rem] font-semibold text-paper">
          Request received
        </span>
        <h2 className="mt-4 text-[1.6rem]">Thanks {v.name.split(' ')[0]}. We will call you back.</h2>
        <p className="measure mt-3 text-[0.98rem] leading-[1.7] text-ink-soft">
          Expect a call within the hour during working hours. We will confirm the price for a{' '}
          {v.property.toLowerCase()} in {v.area}, and the earliest slot we can reach you.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xs border border-ink bg-hazard px-5 py-3 font-semibold text-ink"
          >
            Send the same details on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setV(empty);
              setStatus('idle');
            }}
            className="rounded-xs border border-ink px-5 py-3 font-semibold text-ink"
          >
            Book another space
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-sm border border-ink bg-paper p-6 stack-shadow sm:p-8">
      <h2 className="text-[1.5rem]">Book a visit</h2>
      <p className="mt-2 text-[0.92rem] text-ink-soft">
        Fill this in and we call you back with a fixed price. No charge for the quote.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelText}>Your name</span>
          <input value={v.name} onChange={(e) => set('name', e.target.value)} className={field} placeholder="Full name" />
          {errors.name ? <span className="mt-1 block text-[0.82rem] text-signal">{errors.name}</span> : null}
        </label>

        <label className="block">
          <span className={labelText}>Phone number</span>
          <input
            value={v.phone}
            onChange={(e) => set('phone', e.target.value)}
            inputMode="tel"
            className={field}
            placeholder="07xx xxx xxx"
          />
          {errors.phone ? <span className="mt-1 block text-[0.82rem] text-signal">{errors.phone}</span> : null}
        </label>

        <label className="block">
          <span className={labelText}>Email, if you want a written quote</span>
          <input value={v.email} onChange={(e) => set('email', e.target.value)} className={field} placeholder="you@example.com" />
          {errors.email ? <span className="mt-1 block text-[0.82rem] text-signal">{errors.email}</span> : null}
        </label>

        <label className="block">
          <span className={labelText}>Estate, town or building</span>
          <input value={v.area} onChange={(e) => set('area', e.target.value)} className={field} placeholder="e.g. Kileleshwa, Gitanga Road" />
          {errors.area ? <span className="mt-1 block text-[0.82rem] text-signal">{errors.area}</span> : null}
        </label>

        <label className="block">
          <span className={labelText}>What is the problem</span>
          <select value={v.pest} onChange={(e) => set('pest', e.target.value)} className={field}>
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Not sure, please advise</option>
          </select>
        </label>

        <label className="block">
          <span className={labelText}>Type of space</span>
          <select value={v.property} onChange={(e) => set('property', e.target.value)} className={field}>
            {propertyTypes.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
      </div>

      <fieldset className="mt-5">
        <legend className={labelText}>How soon do you need us</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {urgencies.map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => set('urgency', u)}
              className={`rounded-xs border px-4 py-2.5 text-[0.9rem] transition-colors ${
                v.urgency === u
                  ? 'border-ink bg-ink text-hazard'
                  : 'border-rule bg-chalk text-ink-soft hover:border-ink hover:text-ink'
              }`}
            >
              {u}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="mt-5 block">
        <span className={labelText}>Anything we should know</span>
        <textarea
          value={v.details}
          onChange={(e) => set('details', e.target.value)}
          rows={4}
          className={field}
          placeholder="How long it has been going on, rooms affected, children or pets in the house, gate access."
        />
      </label>

      {status === 'failed' ? (
        <div className="mt-5 rounded-xs border border-signal bg-signal/8 px-4 py-3 text-[0.9rem] text-signal">
          That did not send. Call {'0746 378 772'} or use the WhatsApp button below and we will
          take the details there.
        </div>
      ) : null}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-xs border border-ink bg-hazard px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-ink hover:text-hazard disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Request a call back'}
        </button>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xs border border-ink px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-ink hover:text-chalk"
        >
          Send on WhatsApp instead
        </a>
      </div>
    </form>
  );
}