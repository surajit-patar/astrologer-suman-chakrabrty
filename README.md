# জ্যোতিষাচার্য সুমন চক্রবর্তী — Astrology Website

A premium, cinematic Next.js 14 (App Router) + TypeScript + Tailwind CSS website for a
Bengali astrologer, with a Three.js star field, an animated zodiac wheel, glassmorphism
UI, and full Bengali typography.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — custom dark-luxury design tokens (void black / royal purple / gold)
- **Three.js** — layered animated star field in the hero
- **Framer Motion** — scroll reveals, accordions, micro-interactions
- **Fonts** — Hind Siliguri (body), Noto Sans Bengali (utility), Noto Serif Bengali (display),
  loaded via `next/font/google`



## Getting started

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

To build for production:

```bash
npm run build
npm run start
```

> **Note:** `next/font/google` downloads font files from Google Fonts at build time, so an
> internet connection is required the first time you run `npm run dev` / `npm run build`.

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css         Design tokens, glassmorphism, cursor glow, accessibility helpers
components/
  Hero.tsx, About.tsx, Services.tsx, ZodiacSection.tsx, Process.tsx,
  Testimonials.tsx, StatsCounter.tsx, Gallery.tsx, BookingForm.tsx,
  FAQ.tsx, Contact.tsx, Footer.tsx
  StarField.tsx        Three.js animated star field
  ZodiacWheel.tsx       Rotating SVG zodiac wheel
  GlowingMoon.tsx        Glowing moon
  ShootingStars.tsx       Ambient shooting star animation
  CursorGlow.tsx           Cursor-follow glow (desktop only)
  ScrollReveal.tsx          Reusable Framer Motion scroll-reveal wrapper
  Header.tsx, WhatsAppButton.tsx, MusicToggle.tsx, LoadingScreen.tsx
  CosmicModeContext.tsx      Dark / light cosmic mode toggle
lib/
  data.ts    All Bengali site content (services, zodiac signs, testimonials, FAQ, etc.)
  utils.ts    Bengali numeral conversion helper
public/
  audio/    Add your temple-bell ambience track here (see below)
  robots.txt
```

## Placeholders to replace before going live

Everything below is clearly marked in the code/UI as a placeholder:

- **Contact details** — phone, email, and chamber address in `lib/data.ts` (`siteInfo`)
- **WhatsApp number** — `siteInfo.whatsapp` in `lib/data.ts`
- **Astrologer portrait** — the About section currently shows a styled placeholder panel;
  swap in a real photo inside `components/About.tsx`
- **Gallery photos** — currently sourced from Unsplash as placeholders; replace with real
  images in `lib/data.ts` (`galleryImages`)
- **Background music** — drop an MP3 named `temple-bell-ambience.mp3` into
  `public/audio/` (see `public/audio/README.txt`); the toggle button fails silently if
  the file is missing
- **Booking form submission** — `components/BookingForm.tsx` currently simulates a submit;
  connect it to your email service / CRM / API route of choice
- **Map embed** — the Contact section has a placeholder map panel; swap in a real
  Google Maps embed or interactive map
- **Social links** — Facebook / Instagram / YouTube URLs in `components/Footer.tsx`

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations are disabled/shortened automatically)
- Visible gold focus rings on all interactive elements (`.focus-gold`)
- Semantic headings, `aria-label`/`aria-expanded` on nav, accordion, and buttons
- Three.js canvas and cursor glow are marked `aria-hidden` and skip on touch/coarse
  pointers where appropriate
- Images use Next.js `<Image>` for automatic optimization and lazy loading
- Dynamic imports (`next/dynamic`) for the Three.js star field and zodiac wheel keep the
  initial JS bundle small
