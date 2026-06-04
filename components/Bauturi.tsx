'use client';

import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';
import { fadeUp, fadeUpInView, EASE } from '@/lib/motion';

type Product = { name: string; price: number };

type Category = {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  items: Product[];
};

const categories: Category[] = [
  {
    title: 'Răcoritoare doză',
    subtitle: 'Energizante & băuturi carbogazoase',
    image: 'https://images.unsplash.com/photo-1527960471264-932f39eb5846?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Doze colorate răcoritoare',
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
    image: 'https://images.unsplash.com/photo-1671118720259-026c46d4a67c?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sticle de bere reci pe gheață',
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
    image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pahare cu sucuri colorate',
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
    image: 'https://images.unsplash.com/photo-1718221367403-70a706c8a80e?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Sticle de spirtoase la bar',
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
      <section className="bg-surface-container px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-5xl">

          {/* Section heading */}
          <motion.div {...fadeUpInView(0)} className="mb-12 text-center sm:mb-16">
            <p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.25em] text-secondary/60">
              Lacul Verde · Sâncraiu de Mureș
            </p>
            <h2 className="font-sans text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Meniu Bar
            </h2>
            <p className="mt-4 font-serif text-base italic text-on-surface-variant">
              Disponibil la bar · Plată numerar sau card
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-1 gap-5 sm:gap-7 lg:grid-cols-2">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                {...fadeUpInView(ci * 0.1)}
                className="overflow-hidden rounded-2xl bg-surface shadow-md shadow-primary/10 ring-1 ring-outline-variant/40"
              >
                {/* Image with gradient overlay + title */}
                <div className="relative h-44 overflow-hidden sm:h-52">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/20 to-transparent" />

                  {/* Title — bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-sans text-xl font-bold leading-tight text-white sm:text-2xl">
                      {cat.title}
                    </h3>
                    <p className="mt-0.5 font-serif text-sm italic text-white/60">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* Product list */}
                <div className="divide-y divide-outline-variant/30">
                  {cat.items.map((item, ii) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + ii * 0.05, duration: 0.35, ease: EASE }}
                      className="group flex cursor-default items-center justify-between px-5 py-3.5 transition-colors duration-200 hover:bg-surface-container sm:px-6"
                    >
                      <span className="font-serif text-[15px] leading-snug text-on-surface transition-colors duration-200 group-hover:text-primary">
                        {item.name}
                      </span>
                      <span className="ml-4 shrink-0 font-sans text-base font-bold tabular-nums text-secondary">
                        {item.price}{' '}
                        <span className="text-sm font-medium text-on-surface-variant">lei</span>
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div {...fadeUpInView(0.5)} className="mt-12 text-center">
            <p className="font-serif text-sm italic text-on-surface-variant">
              Prețurile sunt valabile pentru sezonul 2026 · Plată numerar sau card
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}
