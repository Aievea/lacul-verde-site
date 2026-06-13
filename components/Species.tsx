"use client"

import { motion } from 'framer-motion'
import { Maximize2, Scale, Trophy } from "lucide-react"
import somn from "@/src/images/somn.jpg"
import crap from "@/src/images/carp.jpg"
import Image from "next/image"
import caras from "@/src/images/caras.jpg"
import amur from "@/src/images/amur.jpg"
import { EASE, slideIn } from '@/lib/motion'

export default function Species() {
  return (
    <div className="mx-auto max-w-7xl overflow-x-hidden px-6 py-14 sm:py-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mb-12 text-center sm:mb-20"
      >
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">Specii Pești</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-on-surface-variant sm:mt-6 sm:text-lg">
          Descoperă diversitatea ihtiologică din Lacul Verde Sâncraiu de Mureș. Apele noastre curate și îngrijite găzduiesc exemplare impresionante.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">

        {/* Large card — slides from left */}
        <motion.div {...slideIn(true, 0)} className="lg:col-span-8 overflow-hidden rounded-3xl bg-white shadow-sm border border-outline-variant/30 flex flex-col md:flex-row group">
          <div className="h-64 md:h-auto md:w-1/2 overflow-hidden">
            <Image src={crap} alt="Crap" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <span className="mb-4 inline-block w-fit rounded-full bg-primary-container px-3 py-1 text-xs font-bold text-secondary-container">Comun & Oglindă</span>
            <h2 className="text-4xl font-bold text-primary">Crap Românesc</h2>
            <p className="mt-4 text-on-surface-variant leading-relaxed">
              Specia predominantă în Lacul Verde, oferind drill-uri spectaculoase. Exemplarele noastre sunt hrănite controlat pentru o sănătate optimă și o dezvoltare armonioasă.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-tertiary sm:mt-8 sm:gap-6">
              <span className="flex items-center gap-2"><Scale className="h-5 w-5" /> Medie: 4 - 8 kg</span>
              <span className="flex items-center gap-2"><Trophy className="h-5 w-5" /> Record: 18.5 kg</span>
            </div>
          </div>
        </motion.div>

        {/* Side card — slides from right */}
        <motion.div {...slideIn(false, 0.1)} className="lg:col-span-4 rounded-3xl bg-white shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col group">
          <div className="h-52 overflow-hidden">
            <Image src={caras} alt="Caras" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
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
        <motion.div {...slideIn(true, 0.15)} className="lg:col-span-6 rounded-3xl bg-white shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col group">
          <div className="h-64 overflow-hidden">
            <Image src={somn} alt="Somn" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-primary">Somn</h3>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
                Prădătorul nocturn al lacului. Ascuns în gropile adânci, somnul oferă lupte de anduranță care testează priceperea oricărui pescar.
              </p>
            </div>
            <div className="mt-8 border-t border-outline-variant/30 pt-6 flex items-center gap-2 text-sm font-bold text-tertiary">
              <Maximize2 className="h-5 w-5" /> Până la 2m lungime
            </div>
          </div>
        </motion.div>

        {/* Amur — slides from right */}
        <motion.div {...slideIn(false, 0.2)} className="lg:col-span-6 rounded-3xl bg-white shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col group">
          <div className="h-64 overflow-hidden">
            <Image src={amur} alt="Amur" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <span className="mb-4 inline-block w-fit rounded-full bg-primary-container px-3 py-1 text-xs font-bold text-secondary-container">Activ & Agil</span>
              <h3 className="text-2xl font-bold text-primary">Amur</h3>
              <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
                Cunoscut pentru viteza și agilitatea sa, Amurul curăță vegetația acvatică a lacului. Oferă o pescuire plăcută și accesibilă oricărui pescar, de la începători la avansați.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
