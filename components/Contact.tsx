"use client"

import { motion } from 'framer-motion'
import { MapPin, Phone, Road } from "lucide-react";
import Image from "next/image";
import heroImg from '@/src/images/hero.png';
import lakeView from "@/src/images/lake_view.jpeg"


const EASE = [0.25, 1, 0.5, 1] as [number, number, number, number]

const fadeUp = (delay = 0) => ({
   initial: { opacity: 0, y: 32 },
   whileInView: { opacity: 1, y: 0 },
   viewport: { once: true, margin: '-60px' },
   transition: { duration: 0.9, delay, ease: EASE },
})

const WhatsAppIcon = () => (
   <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
   </svg>
)

const FacebookIcon = () => (
   <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
   </svg>
)

const ContactPage = () => (
   <div className="mx-auto max-w-7xl px-6 py-20">

      {/* Header */}
      <motion.div {...fadeUp(0)} className="mb-16 text-center">
         <h1 className="text-5xl font-bold text-primary">Contactați-ne</h1>
         <p className="mx-auto mt-4 max-w-xl text-base font-sans text-on-surface-variant leading-relaxed">
            Vă așteptăm cu drag pe malul lacului. Suntem aici să vă ajutăm cu orice informație.
         </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

         {/* LEFT */}
         <div className="flex flex-col gap-8">

            {/* Info cards */}
            <div className="flex flex-col gap-4">
               <div className="grid grid-cols-2 gap-4">
                  <motion.div {...fadeUp(0.1)} className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow duration-500">
                     <div className="rounded-xl bg-primary p-3 text-white shrink-0">
                        <MapPin className="h-5 w-5" />
                     </div>
                     <div>
                        <h3 className="font-sans font-bold text-primary text-sm">Locație</h3>
                        <p className="font-sans text-sm text-on-surface-variant mt-1 leading-snug">Sâncrai de Mureș, Mureș, România</p>
                     </div>
                  </motion.div>

                  <motion.div {...fadeUp(0.2)} className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow duration-500">
                     <div className="rounded-xl bg-primary p-3 text-white shrink-0">
                        <Phone className="h-5 w-5" />
                     </div>
                     <div>
                        <h3 className="font-sans font-bold text-primary text-sm">Telefon</h3>
                        <p className="font-sans text-sm text-on-surface-variant mt-1">+40 744 523 284</p>
                     </div>
                  </motion.div>
               </div>

               <motion.div {...fadeUp(0.3)} className="flex justify-center">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-outline-variant/30 hover:shadow-md transition-shadow duration-500 w-1/2">
                     <div className="rounded-xl bg-primary p-3 text-white shrink-0">
                        <Road className="h-5 w-5" />
                     </div>
                     <div>
                        <h3 className="font-sans font-bold text-primary text-sm">Strada</h3>
                        <p className="font-sans text-sm text-on-surface-variant mt-1">Principala 199B</p>
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Social buttons */}
            <motion.div {...fadeUp(0.35)} className="rounded-2xl bg-surface border border-outline-variant/30 p-8 flex flex-col gap-4">
               <p className="font-sans font-semibold text-xs uppercase tracking-widest text-outline mb-1">
                  Contactează-ne direct
               </p>
               <a
                  href="https://wa.me/40744523284"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 w-full rounded-2xl bg-primary text-white px-7 py-5 font-sans font-bold text-lg shadow-sm hover:brightness-105 hover:-translate-y-0.5 transition-all duration-500"
               >
                  <WhatsAppIcon />
                  <span>Scrie-ne pe WhatsApp</span>
               </a>
               <a
                  href="https://facebook.com/lacul.verde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 w-full rounded-2xl bg-blue-950 text-white px-7 py-5 font-sans font-bold text-lg shadow-sm hover:brightness-105 hover:-translate-y-0.5 transition-all duration-500"
               >
                  <FacebookIcon />
                  <span>Găsește-ne pe Facebook</span>
               </a>
            </motion.div>
         </div>

         {/* RIGHT — images + map */}
         <div className="flex flex-col gap-6">
            <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 gap-4 h-64">
               <Image src={heroImg} alt="Lacul Verde" className="w-full h-full object-cover rounded-2xl shadow-sm" />
               <Image src={lakeView} alt="Vedere lac" className="w-full h-full object-cover rounded-2xl shadow-sm" />
            </motion.div>
            <motion.div {...fadeUp(0.25)} className="flex-1 min-h-[340px] rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30">
               <iframe
                  src="https://maps.google.com/maps?q=46.5444098,24.517671&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "340px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lacul Verde — Sâncrai de Mureș"
               />
            </motion.div>
         </div>

      </div>
   </div>
)

export default ContactPage;
