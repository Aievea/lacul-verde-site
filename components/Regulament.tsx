"use client"
import { motion } from 'framer-motion'
import RegulationItem from "@/components/RegulationItem"
import { AlertTriangle, ShieldCheck, Trash2, VolumeX, Fish, Eye, Ban } from "lucide-react"
import Image from "next/image"
import lakeView from "@/src/images/lake_view.jpeg"

const RULES = [
  "Toți pescarii, fără nicio excepție, trebuie să prezinte conținutul bagajelor la plecare.",
  "Plata taxei implică pescarul în asumarea regulamentului de pescuit.",
  "Nerespectarea regulamentului implică refuzul administratorului de a mai permite accesul pescarului în incintă.",
  "Infracțiunile de furt vor fi tratate ca atare și va fi anunțată Poliția.",
  "Perimetrul este supravegheat video.",
  "Lacul Verde nu colectează deșeurile menajere din alte activități decât pescuitul. Ambalajele de nadă, porumb etc. se pot lăsa în pubelele din incintă. Recipientele aduse de acasă nu pot fi lăsate în pubele.",
  "Pescuitul se desfășoară numai în fața standului pentru a nu deranja pescarii din celelalte standuri.",
  "Scăldatul este strict interzis.",
]

const CARDS = [
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Echipament", desc: "Max. 3 lansete și 2 cârlige / lansetă." },
  { icon: <VolumeX className="h-5 w-5" />, title: "Comportament", desc: "Fără alcool în exces. Pescuitul doar în fața standului propriu." },
  { icon: <Trash2 className="h-5 w-5" />, title: "Curățenie", desc: "Ambalajele de nadă în pubele. Gunoiul de acasă se ia acasă." },
  { icon: <Ban className="h-5 w-5" />, title: "Interdicții", desc: "Scăldat interzis. Crap / Amur sub 1 kg sau peste 4 kg — C&R obligatoriu." },
  { icon: <Fish className="h-5 w-5" />, title: "Reținere Pește", desc: "2 kg inclus în taxă. Suplimentar se taxează per kg." },
  { icon: <Eye className="h-5 w-5" />, title: "Supraveghere Video", desc: "Perimetru monitorizat 24/7. Furtul se raportează Poliției." },
]

const EASE = [0.25, 1, 0.5, 1] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, delay, ease: EASE },
})

export default function RegulamentPage() {
  return (
    <div className="mb-20">

      {/* Full-width hero */}
      <div className="relative h-72 w-full overflow-hidden">
        <Image src={lakeView} alt="Lac Verde" fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-primary/65" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow">Regulamentul Băltii</h2>
          <p className="mt-3 text-base font-sans text-white/80 max-w-lg leading-relaxed">
            Respectul pentru natură și ceilalți pescari este esențial. Te rugăm să citești regulile înainte de a intra pe lac.
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6 sm:pt-14">

        {/* Quick-rule cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
          {CARDS.map((card, i) => (
            <motion.div key={card.title} {...fadeUp(i * 0.1)}>
              <RegulationItem icon={card.icon} title={card.title} desc={card.desc} />
            </motion.div>
          ))}
        </div>

        {/* Numbered rules */}
        <motion.div {...fadeUp(0.1)} className="rounded-2xl bg-primary px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="rounded-lg bg-white/10 p-2">
              <AlertTriangle className="h-5 w-5 text-secondary-container" />
            </span>
            <h3 className="font-sans font-bold text-white text-xl">Reguli obligatorii</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {RULES.map((rule, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: 'easeOut' }}
                className="flex gap-4 items-start"
              >
                <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-white/15 text-white font-sans font-bold text-xs mt-0.5">
                  {i + 1}
                </span>
                <p className="font-sans text-sm text-white/85 leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
