'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const EASE = [0.25, 1, 0.5, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, delay, ease: EASE },
});

const REVIEWS = [
  {
    name: "Karoly Ronay",
    rating: 5,
    text: "It is a great place for relaxing.",
    date: "acum 7 ani",
  },
  {
    name: "Sabau Andras",
    rating: 5,
    text: "Gorgeous.",
    date: "acum 6 ani",
  },
  {
    name: "Attila Kelemen",
    rating: 5,
    text: "Fishing place.",
    date: "acum 8 ani",
  },
  {
    name: "Paul03",
    rating: 4,
    text: "Un loc foarte frumos, amenajat, prețuri decente. Fără capturi dar cu siguranță voi reveni.",
    date: "acum 11 luni",
  },
  {
    name: "Zoli Nemethi",
    rating: 5,
    text: "Vă recomand. Locație frumoasă, liniștită, curățenie, administrator respectuos și serios dar așteptați același lucru și de la voi.",
    date: "acum 5 ani",
  },
  {
    name: "Andreea Ilovan",
    rating: 5,
    text: "O oază de liniște, unde poți combina utilul cu plăcutul!",
    date: "acum 6 ani",
  },
  {
    name: "Adrian Mihut",
    rating: 5,
    text: "O locație minunată unde te poți relaxa la o partidă de pescuit. Bineînțeles, depinde de îndemânarea fiecăruia să prindă pește.",
    date: "acum 5 ani",
  },
  {
    name: "Sorca Ana",
    rating: 5,
    text: "Foarte frumos.",
    date: "acum 7 ani",
  },
  {
    name: "Andreyas Szzanto",
    rating: 5,
    text: "Super fain.",
    date: "acum 4 ani",
  },
  {
    name: "Catalin Rus",
    rating: 4,
    text: "Un lac frumos.",
    date: "acum 7 ani",
  },
  {
    name: "Claudiu Costan",
    rating: 5,
    text: "Pt cei care locuiesc acolo e o zona superbă. Liniște, pace, străzi asfaltate.",
    date: "acum o lună",
  },
];

const AVG = "4.6";
const TOTAL_REVIEWS = 102;

// Cycling avatar colors from brand palette
const AVATAR_PALETTE = [
  { bg: '#1b4332', text: '#aeeecb' },
  { bg: '#2c694e', text: '#ffffff' },
  { bg: '#012d1d', text: '#aeeecb' },
  { bg: '#3a6b50', text: '#ffffff' },
  { bg: '#1a4d2e', text: '#ffffff' },
];

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          style={{
            fill: i < rating ? '#2d7a4f' : 'transparent',
            color: i < rating ? '#2d7a4f' : '#c8d9cd',
          }}
        />
      ))}
    </div>
  );
}

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" focusable="false">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function RecenziiPage() {
  return (
    <main style={{ background: '#f7faf8' }}>

      {/* ── Hero ── */}
      <section
        style={{ background: 'linear-gradient(135deg, #1a4d2e 0%, #2d7a4f 100%)' }}
        className="py-16 px-6 sm:py-24 text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mx-auto max-w-xl"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-sans text-sm font-medium mb-8"
            style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
          >
            <GoogleIcon size={15} />
            <span>Recenzii Google</span>
          </div>

          {/* Rating number */}
          <p
            className="font-sans font-bold tracking-tight leading-none mb-3"
            style={{ fontSize: 'clamp(4rem, 14vw, 7rem)', color: '#ffffff' }}
          >
            {AVG}
            <span
              className="font-sans font-normal"
              style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)', color: 'rgba(255,255,255,0.6)', marginLeft: '0.3em' }}
            >
              / 5
            </span>
          </p>

          {/* Stars row */}
          <div className="flex justify-center mb-4">
            <div style={{ display: 'flex', gap: 4 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  width={28}
                  height={28}
                  style={{
                    fill: i < 5 ? '#ffffff' : 'transparent',
                    color: '#ffffff',
                    opacity: i < 5 ? 1 : 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Count */}
          <p
            className="font-sans mb-10"
            style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', color: 'rgba(255,255,255,0.65)' }}
          >
            Bazat pe {TOTAL_REVIEWS} recenzii Google verificate
          </p>

          {/* CTA */}
          <a
            href="https://www.google.com/maps?cid=16644774766986622398"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold transition-all duration-200 active:scale-95"
            style={{
              border: '1.5px solid rgba(255,255,255,0.35)',
              borderRadius: 9999,
              padding: '0.75rem 1.75rem',
              color: '#ffffff',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
          >
            <GoogleIcon size={16} />
            Lasă o recenzie
          </a>
        </motion.div>
      </section>

      {/* ── Grid ── */}
      <section className="py-14 px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, i) => {
              const palette = AVATAR_PALETTE[i % AVATAR_PALETTE.length];
              return (
                <motion.article
                  key={i}
                  {...fadeUp(i * 0.06)}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2ede7',
                    borderRadius: 16,
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {/* Top row: avatar + name/date + google badge */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div
                        className="font-sans font-bold text-sm shrink-0"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          background: palette.bg,
                          color: palette.text,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {review.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-sans font-semibold text-sm" style={{ color: '#1a1c18', lineHeight: 1.3 }}>
                          {review.name}
                        </p>
                        <p className="font-sans text-xs" style={{ color: '#717973', marginTop: 2 }}>
                          {review.date}
                        </p>
                      </div>
                    </div>

                    {/* Google badge */}
                    <div
                      className="font-sans text-xs font-medium shrink-0"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        background: '#f4f9f6',
                        border: '1px solid #e2ede7',
                        borderRadius: 9999,
                        padding: '3px 10px',
                        color: '#414844',
                      }}
                    >
                      <GoogleIcon size={13} />
                      Google
                    </div>
                  </div>

                  {/* Stars */}
                  <Stars rating={review.rating} size={15} />

                  {/* Review text */}
                  <p
                    className="font-serif text-sm leading-relaxed flex-1"
                    style={{ color: '#414844', fontStyle: 'italic' }}
                  >
                    &ldquo;{review.text}&rdquo;
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA bottom ── */}
      <motion.section
        {...fadeUp(0.1)}
        className="px-6 pb-16 sm:pb-24 text-center"
      >
        <a
          href="https://www.google.com/maps?cid=16644774766986622398"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans font-bold text-sm transition-all duration-200 active:scale-95"
          style={{
            background: '#2d7a4f',
            color: '#ffffff',
            borderRadius: 9999,
            padding: '0.875rem 2rem',
            boxShadow: '0 4px 20px rgba(45,122,79,0.35)',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = '#1a4d2e')}
          onMouseLeave={e => (e.currentTarget.style.background = '#2d7a4f')}
        >
          Scrie o recenzie →
        </a>
      </motion.section>

    </main>
  );
}
