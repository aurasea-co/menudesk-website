import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Aurasea family palette — deep ocean tones with warm F&B accent
        aurasea: {
          // Deep teal/navy — primary brand from "Aura" + "Sea"
          ink: '#0B2A33',       // near-black with teal undertone (text, headings)
          deep: '#13414C',      // deep teal (primary)
          tide: '#1F6B7A',      // mid teal
          mist: '#A8D5DA',      // pale teal (accents)
          foam: '#F4F9FA',      // off-white background
        },
        menudesk: {
          // F&B-warm accent layered on Aurasea base
          ember: '#E07A3C',     // warm terracotta (CTA, accents — F&B warmth)
          cream: '#FBF6EE',     // soft cream (cards, sections)
          olive: '#5A7A4F',     // muted herb green (secondary accent)
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        thai: ['var(--font-noto-thai)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
