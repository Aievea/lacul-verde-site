'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Waves, CalendarDays, ChevronRight, Fish, ArrowRight } from 'lucide-react';

import heroImg from '@/src/images/hero.png';
import crap from "@/src/images/carp.png"
import caras from "@/src/images/caras.png"
import stiuca from "@/src/images/stiuca.jpeg"

const EASE = [0.25, 1, 0.5, 1] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.0, delay, ease: EASE },
});

const scrollFadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: EASE },
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-primary-container sm:h-[85vh] sm:min-h-[640px]">
        <Image
          src={heroImg}
          alt="Lacul Verde Sâncrai"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center pt-20 pb-16 sm:pt-0 sm:pb-0">
          <motion.span {...fadeUp(0.2)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            <Waves className="h-4 w-4" />
            Oază de Liniște
          </motion.span>
          <motion.h1 {...fadeUp(0.5)} className="text-balance text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Descoperă Liniștea la Lacul Verde Sâncrai
          </motion.h1>
          <motion.p {...fadeUp(0.8)} className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:mt-6 sm:text-lg">
            Evadează din cotidian într-o locație premium dedicată pescuitului sportiv. O experiență autentică în natură, creată pentru pescarii pasionați și familiile lor.
          </motion.p>
          <motion.div {...fadeUp(1.1)} className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Link href="/contact" className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-on-primary shadow-lg transition-all duration-500 hover:bg-secondary sm:px-8 sm:py-4 sm:text-base">
              <CalendarDays className="h-5 w-5" />
              Rezervă o partidă
            </Link>
            <Link href="/regulament" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-500 hover:bg-white/20 sm:px-8 sm:py-4 sm:text-base">
              Vezi Regulamentul
            </Link>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-surface to-transparent sm:h-32" />
      </section>

      {/* Species section */}
      <section className="mx-auto max-w-7xl px-6 py-20 ">
        <motion.div {...scrollFadeUp(0)} className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary">Bogăția Lacului</h2>
          <p className="mx-auto mt-4 max-w-xl text-on-surface-variant">
            Lacul nostru este populat responsabil cu o varietate de specii, oferind provocări atât pescarilor începători, cât și celor experimentați.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div {...scrollFadeUp(0.1)} className="group relative h-[300px] overflow-hidden rounded-2xl shadow-sm md:col-span-2">
            <Image src={crap} alt="Crap" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <span className="mb-2 inline-block rounded-full bg-tertiary px-3 py-1 text-[10px] uppercase tracking-widest text-white">Captura Principală</span>
                <h3 className="text-3xl font-bold text-white">Crap Românesc</h3>
                <p className="text-white/70 italic text-sm">Exemplare între 3kg și 15kg</p>
              </div>
              <ArrowRight className="h-8 w-8 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </motion.div>

          <motion.div {...scrollFadeUp(0.2)} className="group relative h-[300px] overflow-hidden rounded-2xl shadow-sm">
            <Image src={stiuca} alt="Știucă" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold text-white">Știucă</h3>
              <p className="text-white/70 italic text-sm">Luptători excelenți</p>
            </div>
          </motion.div>

          <motion.div {...scrollFadeUp(0.25)} className="group relative h-[200px] overflow-hidden rounded-2xl shadow-sm">
            <Image src={caras} alt="Caras" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-bold text-white">Caras</h3>
              <p className="text-white/70 italic text-xs">Pescuit de relaxare</p>
            </div>
          </motion.div>

          <motion.div {...scrollFadeUp(0.3)} className="flex h-[200px] items-center rounded-2xl bg-secondary-container/30 border border-secondary/20 p-8 md:col-span-2">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary">Descoperă toate speciile</h3>
              <p className="mt-2 max-w-md text-on-secondary-container/80 text-sm">
                Lacul găzduiește și exemplare de somn, șalău și știucă. Vezi regulamentul pentru fiecare specie în parte.
              </p>
              <Link href="/specii">
                <button className="mt-4 inline-flex items-center gap-1 font-bold text-secondary hover:text-primary transition-colors duration-500">
                  Vezi Galeria Completă <ChevronRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
            <div className="hidden sm:flex h-24 w-24 items-center justify-center rounded-full bg-secondary-container text-secondary">
              <Fish className="h-12 w-12" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
