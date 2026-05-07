"use client"

import { motion } from 'framer-motion'
import { Droplets, Maximize2, Scale, Trophy } from "lucide-react"
import somn from "@/src/images/somn.png"
import crap from "@/src/images/carp.png"
import Image from "next/image"
import caras from "@/src/images/caras.png"
import stiuca from "@/src/images/stiuca.jpeg"

const EASE = [0.25, 1, 0.5, 1] as [number, number, number, number]

const slideIn = (fromLeft: boolean, delay = 0) => ({
  initial: { opacity: 0, x: fromLeft ? -60 : 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: EASE },
})

export default function Species() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
        className="mb-20 text-center"
      >
        <h1 className="text-5xl font-bold text-primary">Specii Pești</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-on-surface-variant">
          Descoperă diversitatea ihtiologică din Lacul Verde Sâncrai. Apele noastre curate și îngrijite găzduiesc exemplare impresionante.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

        {/* Large card — slides from left */}
        <motion.div {...slideIn(true, 0)} className="lg:col-span-8 overflow-hidden rounded-3xl bg-white shadow-sm border border-outline-variant/30 flex flex-col md:flex-row group">
          <div className="h-64 md:h-auto md:w-1/2 overflow-hidden">
            <Image src={crap} alt="Crap" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <span className="mb-4 inline-block w-fit rounded-full bg-primary-container px-3 py-1 text-xs font-bold text-primary-fixed">Comun & Oglindă</span>
            <h2 className="text-4xl font-bold text-primary">Crap Românesc</h2>
            <p className="mt-4 text-on-surface-variant leading-relaxed">
              Specia predominantă în Lacul Verde, oferind drill-uri spectaculoase. Exemplarele noastre sunt hrănite controlat pentru o sănătate optimă și o dezvoltare armonioasă.
            </p>
            <div className="mt-8 flex gap-6 text-sm font-bold text-tertiary">
              <span className="flex items-center gap-2"><Scale className="h-5 w-5" /> Medie: 4 - 8 kg</span>
              <span className="flex items-center gap-2"><Trophy className="h-5 w-5" /> Record: 18.5 kg</span>
            </div>
          </div>
        </motion.div>

        {/* Side card — slides from right */}
        <motion.div {...slideIn(false, 0.1)} className="lg:col-span-4 rounded-3xl bg-white shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col group">
          <div className="h-52 overflow-hidden">
            <Image src={caras} alt="Caras" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-primary">Caras</h3>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
                Cunoscut pentru forța sa explozivă și evadările rapide din minciog. Amurul joacă un rol crucial în menținerea curățeniei lacului.
              </p>
            </div>
            <div className="mt-8 border-t border-outline-variant/30 pt-6 flex justify-between items-center text-sm font-bold text-tertiary">
              <span className="opacity-60 uppercase tracking-wider">Dimensiune medie</span>
              <span>5 - 10 kg</span>
            </div>
          </div>
        </motion.div>

        {/* Somn — slides from left */}
        <motion.div {...slideIn(true, 0.15)} className="lg:col-span-6 rounded-3xl bg-white shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col sm:flex-row group leading-tight">
          <div className="sm:w-2/5 overflow-hidden">
            <Image src={somn} alt="Somn" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
          </div>
          <div className="p-8 sm:w-3/5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary">Somn</h3>
            <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">
              Prădătorul nocturn al lacului. Ascuns în gropile adânci, somnul oferă lupte de anduranță care testează priceperea oricărui pescar.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-tertiary">
              <Maximize2 className="h-5 w-5" /> Până la 2m lungime
            </div>
          </div>
        </motion.div>

        {/* Știucă — slides from right */}
        <motion.div {...slideIn(false, 0.2)} className="lg:col-span-6 rounded-3xl bg-white shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col sm:flex-row group leading-tight">
          <div className="sm:w-2/5 overflow-hidden">
            <Image src={stiuca} alt="Știucă" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
          </div>
          <div className="p-8 sm:w-3/5 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary">Știucă</h3>
            <p className="mt-3 text-sm text-on-surface-variant leading-relaxed">
              Specie pretențioasă care atestă calitatea excelentă și oxigenarea apei. Pescuitul la spinning necesită finețe și răbdare.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-tertiary">
              <Droplets className="h-5 w-5" /> Activ în ape reci
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
