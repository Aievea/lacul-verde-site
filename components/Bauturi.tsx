'use client';

import { motion } from 'framer-motion';
import { Zap, Beer, Droplets, Wine } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeUp, fadeUpInView, EASE } from '@/lib/motion';

type Product = { name: string; price: number };

type Category = {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  iconGradient: string;
  items: Product[];
};

const categories: Category[] = [
  {
    title: 'Răcoritoare doză',
    subtitle: 'Energizante & băuturi carbogazoase',
    Icon: Zap,
    iconGradient: 'from-sky-400 to-blue-600',
    items: [
      { name: 'Hell', price: 6 },
      { name: 'Frutti Fresh Piersici', price: 6 },
      { name: 'Tutti Frutti', price: 6 },
      { name: 'Cola', price: 6 },
      { name: 'Grapefruit', price: 6 },
      { name: 'Coca-Cola doză', price: 6 },
    ],
  },
  {
    title: 'Bere',
    subtitle: 'Sticle reci, direct la mal',
    Icon: Beer,
    iconGradient: 'from-amber-400 to-orange-500',
    items: [
      { name: 'Skol sticlă 0.33L', price: 5 },
      { name: 'Tuborg sticlă 0.33L', price: 7 },
      { name: 'Heineken sticlă 0.33L', price: 7 },
      { name: 'Neumarkt 0.5L', price: 5 },
    ],
  },
  {
    title: 'Sucuri & Apă',
    subtitle: 'Hidratare naturală, oricând',
    Icon: Droplets,
    iconGradient: 'from-teal-400 to-emerald-600',
    items: [
      { name: 'Coca-Cola 0.5L', price: 7 },
      { name: 'Fanta Struguri 0.5L', price: 7 },
      { name: 'Apă Plată 0.5L', price: 5 },
      { name: 'Apă Minerală 0.5L', price: 5 },
      { name: 'Apă Plată 2L', price: 7 },
      { name: 'Apă Minerală 2L', price: 7 },
    ],
  },
  {
    title: 'Spirtoase',
    subtitle: 'Porție 100 ml',
    Icon: Wine,
    iconGradient: 'from-purple-500 to-rose-600',
    items: [
      { name: 'Alexandrion 5*', price: 14 },
      { name: 'Jägermeister', price: 16 },
      { name: 'Stalinskaya', price: 10 },
      { name: 'Unirea', price: 6 },
      { name: 'Jidvei', price: 16 },
    ],
  },
];

export default function BauturiPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex min-h-[48vh] items-center justify-center overflow-hidden bg-primary-container sm:min-h-[55vh]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1920&q=75"
          alt="Băuturi răcoritoare la lac"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />

        <div className="relative z-10 mx-auto max-w-2xl px-6 py-28 text-center">
          <motion.span
            {...fadeUp(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-semibold text-white/90 backdrop-blur-sm"
          >
            <Droplets className="h-4 w-4" />
            Lacul Verde · Bar
          </motion.span>

          <motion.h1
            {...fadeUp(0.15)}
            className="font-sans text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl"
          >
            Băuturi &<br className="sm:hidden" /> Răcoritoare
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="mt-5 font-serif text-lg italic text-white/70"
          >
            Răcorește-te după o partidă reușită — avem tot ce îți trebuie la mal.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#0b1f14] to-transparent" />
      </section>

      {/* ── Menu ── */}
      <section
        className="relative px-6 py-20 sm:py-28"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 10% 0%, rgba(1,45,29,0.07) 0%, transparent 70%),' +
            'radial-gradient(ellipse 70% 50% at 90% 100%, rgba(44,105,78,0.05) 0%, transparent 70%),' +
            '#f4f6ee',
        }}
      >
        <div className="mx-auto max-w-5xl">

          {/* Section heading */}
          <motion.div {...fadeUpInView(0)} className="mb-16 text-center sm:mb-20">
            <p className="mb-3 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-secondary/60">
              Lacul Verde · Sâncrai de Mureș
            </p>
            <h2 className="font-sans text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Meniu Bar
            </h2>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-secondary/30" />
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary/40" />
                <span className="h-1.5 w-4 rounded-full bg-secondary/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-secondary/40" />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-secondary/30" />
            </div>
            <p className="mt-5 font-serif text-base italic text-on-surface-variant">
              Disponibil la bar · Plată în numerar
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                {...fadeUpInView(ci * 0.12)}
                className="overflow-hidden rounded-3xl shadow-2xl shadow-primary/15 ring-1 ring-primary/10"
              >
                {/* Card header — dark green gradient */}
                <div className="bg-gradient-to-br from-[#1b4332] to-[#012d1d] px-8 py-8">
                  <div className="flex items-center gap-5">
                    <div
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.iconGradient} shadow-lg`}
                    >
                      <cat.Icon className="h-8 w-8 text-white" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-sans text-xl font-bold leading-snug text-white">
                        {cat.title}
                      </h3>
                      <p className="mt-1 font-serif text-sm italic text-white/50">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Product list */}
                <div className="divide-y divide-stone-100 bg-white">
                  {cat.items.map((item, ii) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.12 + ii * 0.06, duration: 0.4, ease: EASE }}
                      className="group flex cursor-default items-center justify-between px-8 py-4 transition-all duration-200 hover:bg-amber-50 hover:pl-10"
                    >
                      <span className="font-serif text-[15px] leading-snug text-stone-700 transition-colors duration-200 group-hover:text-primary">
                        {item.name}
                      </span>
                      <span className="ml-6 shrink-0 font-sans text-lg font-bold tabular-nums text-amber-500 transition-all duration-200 group-hover:scale-110 group-hover:text-amber-600">
                        {item.price} <span className="text-sm font-semibold text-amber-400/80">lei</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div {...fadeUpInView(0.55)} className="mt-16 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-outline-variant/50" />
              <p className="font-serif text-sm italic text-on-surface-variant">
                Prețurile sunt valabile pentru sezonul 2026 · Plată numerar
              </p>
              <div className="h-px w-12 bg-outline-variant/50" />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
