"use client";

import { motion } from "framer-motion";
import { Calendar, Scale } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { EASE } from "@/lib/motion";

import poza1 from "../../src/images/capturi/poza1.jpg";
import poza2 from "../../src/images/capturi/poza2.jpg";
import poza3 from "../../src/images/capturi/poza3.jpg";
import poza4 from "../../src/images/capturi/poza4.jpg";
import poza5 from "../../src/images/capturi/poza5.jpg";
import poza6 from "../../src/images/capturi/poza6.jpg";
import poza7 from "../../src/images/capturi/poza7.jpg";
import poza8 from "../../src/images/capturi/poza8.jpg";
import poza9 from "../../src/images/capturi/poza9.jpg";
import poza10 from "../../src/images/capturi/poza10.jpg";
import poza11 from "../../src/images/capturi/poza11.jpg";
import poza12 from "../../src/images/capturi/poza12.jpg";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

type Poza = {
  src: StaticImageData;
  fish: string;
  weight: string;
  date: string;
  alt?: string;
};

const poze: Poza[] = [
  {
    src: poza1,
    fish: "Crap",
    weight: "9 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Crap",
  },
  {
    src: poza2,
    fish: "Somn ",
    weight: "17 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Somn",
  },
  {
    src: poza3,
    fish: "Somn",
    weight: "7 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Somn",
  },
  {
    src: poza4,
    fish: "Amur",
    weight: "9,5 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Amur",
  },
  {
    src: poza5,
    fish: "Somn",
    weight: "23 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Somn",
  },
  {
    src: poza6,
    fish: "Somn",
    weight: "6 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Somn",
  },
  {
    src: poza7,
    fish: "Crap",
    weight: "6 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Crap",
  },
  {
    src: poza8,
    fish: "Amur",
    weight: "3 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Amur",
  },
  {
    src: poza9,
    fish: "Somn",
    weight: "9 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Somn",
  },
  {
    src: poza10,
    fish: "Crap",
    weight: "5 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Crap",
  },
  {
    src: poza11,
    fish: "Amur",
    weight: "9 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Amur",
  },
  {
    src: poza12,
    fish: "Somn",
    weight: "19 kg",
    date: "Lacul Verde Sâncrai",
    alt: "Captură Somn",
  },
];

export default function CapturiPage() {
  return (
    <div className="mx-auto max-w-7xl overflow-x-hidden px-6 py-14 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: EASE }}
        className="mb-12 text-center sm:mb-20"
      >
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">Capturi</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-on-surface-variant sm:mt-6 sm:text-lg">
          Galerie cu cele mai frumoase capturi realizate de pescarii noștri la Lacul Verde Sâncrai.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {poze.map((poza, i) => (
          <motion.article
            key={i}
            variants={cardVariants}
            className="group flex flex-col overflow-hidden rounded-3xl border border-outline-variant/30 bg-white shadow-sm"
          >
            <div className="relative h-[280px] overflow-hidden">
              <Image
                src={poza.src}
                alt={poza.alt ?? poza.fish}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-1 flex-col justify-end p-6">
              <h2 className="text-2xl font-bold text-primary">{poza.fish}</h2>
              <div className="mt-3 flex items-center gap-2 text-sm font-bold text-tertiary">
                <Scale className="h-5 w-5" />
                <span>{poza.weight}</span>
              </div>
              <div className="mt-6 flex items-center gap-2 border-t border-outline-variant/30 pt-4 text-sm text-on-surface-variant">
                <Calendar className="h-4 w-4" />
                <span>{poza.date}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  );
}

