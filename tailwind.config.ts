// ONLY needed if your project is on Tailwind CSS v3.
// On Tailwind v4 (the default in new Next.js apps) delete this file —
// the tokens in app/globals.css already do the job.
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        chalk: { DEFAULT: '#ecefe9', deep: '#e0e5dd' },
        paper: '#ffffff',
        ink: { DEFAULT: '#10201a', soft: '#4a5a52' },
        pine: { DEFAULT: '#0e3b2e', deep: '#092b21' },
        field: '#2f7d53',
        hazard: '#f2a413',
        signal: '#c03221',
        rule: 'rgba(16,32,26,0.14)',
      },
      borderRadius: {
        xs: '3px',
        sm: '5px',
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-plex)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;