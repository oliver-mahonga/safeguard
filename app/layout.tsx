import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Sans } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-archivo',
  display: 'swap',
});

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Safeguard Fumigation | Cockroach, bedbug and rodent control in Nairobi',
    template: '%s | Safeguard Fumigation',
  },
  description:
    'Licensed fumigation and pest control in Nairobi. Cockroaches, bedbugs, rats, termites and mosquitoes cleared with a written warranty. Same-day visits, fixed prices from KSh 3,500. Call 0746 378 772.',
  keywords: [
    'fumigation Nairobi',
    'pest control Kenya',
    'cockroach control Nairobi',
    'bedbug treatment Nairobi',
    'rat control Nairobi',
    'termite treatment Kenya',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: site.url,
    siteName: site.name,
    title: 'Fumigation and pest control in Nairobi | Safeguard',
    description:
      'Cockroaches, bedbugs, rats and termites cleared with a written warranty. Same-day service in Nairobi, fixed prices from KSh 3,500.',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#0e3b2e',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PestControlService',
  name: site.legalName,
  telephone: '+254746378772',
  email: site.email,
  url: site.url,
  image: `${site.url}/og.jpg`,
  priceRange: 'KSh 3,500 – KSh 25,000',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  areaServed: ['Nairobi', 'Kiambu', 'Machakos', 'Kajiado', 'Nakuru'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '20:00',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`${archivo.variable} ${plex.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xs focus:bg-ink focus:px-4 focus:py-2 focus:text-hazard"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}