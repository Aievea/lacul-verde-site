'use client';

import { motion } from 'framer-motion';
import PricingCard from "./PricingCard";
import { Sun, Clock, Fish } from "lucide-react";

const EASE = [0.25, 1, 0.5, 1] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: EASE },
});

export default function PretPage() {
  return (
    <section className="bg-surface-container py-20 px-6">
      <div className="mx-auto max-w-5xl">

        <motion.div {...fadeUp(0)} className="mb-14 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary">Pachete & Tarife</h2>
          <p className="mt-3 text-base font-sans text-on-surface-variant max-w-lg mx-auto leading-relaxed">
            Taxa rămâne la nivelul anului trecut — se plătește la bar, la intrarea pe lac.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
          {[
            {
              icon: <Clock className="h-8 w-8 text-secondary" />,
              title: "Jumătate de Zi",
              desc: "Partidă de pescuit de jumătate de zi, ideală pentru o escapadă rapidă.",
              price: "40",
              period: "pescar",
              features: ["Maxim 3 lansete / pescar", "Maxim 2 cârlige / lansetă", "2 kg pește inclus la reținere"],
              highlight: false,
            },
            {
              icon: <Sun className="h-8 w-8 text-primary" />,
              title: "O Zi Întreagă",
              desc: "Partidă completă de o zi, cu posibilitate de reținere a peștelui.",
              price: "50",
              period: "zi",
              features: ["Maxim 3 lansete / pescar", "Maxim 2 cârlige / lansetă", "2 kg pește inclus la reținere"],
              highlight: true,
            },
            {
              icon: <Fish className="h-8 w-8 text-secondary" />,
              title: "Copii (C&R)",
              desc: "Pentru copii peste 12 ani — exclusiv sistem Catch & Release.",
              price: "35",
              period: "zi",
              features: ["Exclusiv Catch & Release", "Maxim 3 lansete / pescar", "Maxim 2 cârlige / lansetă", "Taxa întreagă dacă se duce pește acasă"],
              highlight: false,
            },
          ].map((card, i) => (
            <motion.div key={card.title} {...fadeUp(i * 0.15)}>
              <PricingCard {...card} />
            </motion.div>
          ))}
        </div>

        {/* Fish pricing */}
        <motion.div {...fadeUp(0.1)} className="rounded-2xl bg-primary text-on-primary p-8 mb-6">
          <h3 className="text-lg font-bold font-sans mb-1">Prețuri pește</h3>
          <p className="text-sm font-sans text-white/60 mb-6">
            Se aplică pentru cantitățile ce depășesc limita de 2 kg inclusă în taxă.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { name: "Crap", price: "30,00 lei / kg" },
              { name: "Caraș / Albitură", price: "25,00 lei / kg" },
              { name: "Somn / Știucă", price: "40,00 lei / kg" },
            ].map(({ name, price }, i) => (
              <motion.div
                key={name}
                {...fadeUp(0.2 + i * 0.1)}
                className="flex items-center justify-between rounded-xl bg-white/10 px-5 py-4"
              >
                <span className="font-sans font-semibold text-sm">{name}</span>
                <span className="font-sans font-bold text-secondary-container text-sm">{price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Notes */}
        <motion.div {...fadeUp(0.15)} className="rounded-2xl border border-outline-variant/40 bg-surface px-8 py-6 space-y-2">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-outline mb-3">
            Note importante
          </p>
          {[
            "În taxa normală (40 lei/jumătate de zi sau 50 lei/zi) se pot reține maxim 2 kg de pește.",
            "Nu se rețin exemplarele de Crap și Amur sub 1,00 kg și nici peste 4,00 kg.",
            "Pescarul este obligat să păstreze bonul de casă.",
            "Plata taxei implică asumarea regulamentului de pescuit.",
          ].map((note, i) => (
            <p key={i} className="font-sans text-sm text-on-surface-variant leading-relaxed flex gap-2">
              <span className="text-secondary mt-0.5 shrink-0">•</span>
              <span>{note}</span>
            </p>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
