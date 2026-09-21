'use client';

import { useState } from 'react';
import { services, waLink } from '@/lib/site';

export default function HeroBooker() {
  const [pest, setPest] = useState(services[0].name);
  const [area, setArea] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (phone.trim().length < 9) {
      setState('error');
      return;
    }
    setState('sending');
    try {
      await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ source: 'hero', pest, area, phone }),
      });
      setState('sent');
    } catch {
      setState('sent'); // the customer still gets the WhatsApp handoff
    }
  }

  const message = `Hi Safeguard. I have a ${pest.toLowerCase()} problem${
    area ? ` in ${area}` : ''
  }. My number is ${phone || '(number)'}. Please send me a price.`;

  if (state === 'sent') {
    return (
      <div className="rounded-sm border border-ink bg-paper p-6 stack-shadow">
        <p className="display text-[1.3rem]">Got it. We will call you shortly.</p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
          If you would rather not wait, send the same details on WhatsApp and a technician
          replies with a price straight away.
        </p>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex rounded-xs border border-ink bg-hazard px-5 py-3 text-[0.92rem] font-semibold text-ink"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-sm border border-ink bg-paper p-5 stack-shadow sm:p-6"
    >
      <p className="display text-[1.15rem]">Tell us what you are dealing with</p>
      <p className="mt-1.5 text-[0.88rem] text-ink-soft">
        Takes 20 seconds. We call back with a fixed price, not an estimate.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.82rem] font-medium text-ink-soft">The pest</span>
          <select
            value={pest}
            onChange={(e) => setPest(e.target.value)}
            className="mt-1.5 w-full rounded-xs border border-rule bg-chalk px-3.5 py-3 text-[0.95rem] text-ink focus:border-ink"
          >
            {services.map((s) => (
              <option key={s.slug}>{s.name}</option>
            ))}
            <option>Not sure yet</option>
          </select>
        </label>

        <label className="block">
          <span className="text-[0.82rem] font-medium text-ink-soft">Your area</span>
          <input
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="Kilimani, Ruiru, Thika…"
            className="mt-1.5 w-full rounded-xs border border-rule bg-chalk px-3.5 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/60 focus:border-ink"
          />
        </label>
      </div>

      <label className="mt-3 block">
        <span className="text-[0.82rem] font-medium text-ink-soft">Phone number</span>
        <input
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (state === 'error') setState('idle');
          }}
          inputMode="tel"
          placeholder="07xx xxx xxx"
          className="mt-1.5 w-full rounded-xs border border-rule bg-chalk px-3.5 py-3 text-[0.95rem] text-ink placeholder:text-ink-soft/60 focus:border-ink"
        />
      </label>

      {state === 'error' ? (
        <p className="mt-2 text-[0.85rem] font-medium text-signal">
          Enter a phone number we can reach you on.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={state === 'sending'}
        className="mt-4 w-full rounded-xs border border-ink bg-ink px-5 py-3.5 font-semibold text-hazard transition-colors hover:bg-hazard hover:text-ink disabled:opacity-60"
      >
        {state === 'sending' ? 'Sending…' : 'Get my price'}
      </button>
    </form>
  );
}