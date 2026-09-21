import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Payload = Record<string, string | undefined>;

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request body' }, { status: 400 });
  }

  const phone = (body.phone ?? '').replace(/\D/g, '');
  if (phone.length < 9) {
    return NextResponse.json({ ok: false, error: 'A reachable phone number is required' }, { status: 422 });
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    source: body.source ?? 'unknown',
    name: body.name ?? '',
    phone: body.phone ?? '',
    email: body.email ?? '',
    pest: body.pest ?? '',
    property: body.property ?? '',
    area: body.area ?? '',
    urgency: body.urgency ?? '',
    details: body.details ?? '',
  };

  // Leads land in the server log today. To email or store them, add one of:
  //
  //   1. Resend:      await resend.emails.send({ to: 'hello@...', subject: 'New lead', text: ... })
  //   2. Google Sheet: POST to an Apps Script web app URL
  //   3. Database:     await db.insert(leads).values(lead)
  //
  // Keep the response shape the same so the form keeps working.
  console.log('[safeguard] new lead', lead);

  return NextResponse.json({ ok: true });
}