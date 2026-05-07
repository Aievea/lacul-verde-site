'use client';

import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

interface PricingCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  price: string;
  period: string;
  features: string[];
  highlight?: boolean;
}

const PricingCard = ({ icon, title, desc, price, period, features, highlight = false }: PricingCardProps) => (
  <div className={`relative flex flex-col rounded-2xl p-8 shadow-sm transition-transform duration-300 hover:-translate-y-2 ${
    highlight ? 'bg-primary text-on-primary ring-4 ring-secondary-container/20' : 'bg-surface border border-outline-variant/30 text-on-surface'
  }`}>
    {highlight && (
      <span className="absolute right-4 top-4 rounded-full bg-tertiary px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
        Recomandat
      </span>
    )}
    <div className="mb-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className={`mt-2 text-sm ${highlight ? 'text-white/70' : 'text-on-surface-variant'}`}>{desc}</p>
    </div>
    <div className="mb-8">
      <div className="flex items-baseline gap-1">
        <span className={`text-5xl font-bold ${highlight ? 'text-secondary-container' : 'text-primary'}`}>{price}</span>
        <span className={`text-sm font-semibold opacity-70`}>RON / {period}</span>
      </div>
    </div>
    <ul className="mb-8 flex-1 space-y-3">
      {features.map((f, idx) => (
        <li key={idx} className="flex items-center gap-3 text-sm">
          <CheckCircle2 className={`h-5 w-5 ${highlight ? 'text-secondary-container' : 'text-secondary'}`} />
          {f}
        </li>
      ))}
    </ul>
    <Link href="/contact" className={`w-full rounded-lg py-3 font-bold transition-all text-center block ${
      highlight ? 'bg-secondary text-white hover:bg-secondary/90' : 'bg-surface-container border border-outline-variant hover:bg-surface-container-highest'
    }`}>
      Contactează-ne
    </Link>
  </div>
);

export default PricingCard;