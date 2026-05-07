'use client';

import { Waves } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  const footerLinks = [
    { href: '/regulament', label: 'Regulament Lac' },
    { href: 'https://anpc.ro/', label: 'ANPC' },
  ];

  return (
    <footer className=" w-full bg-primary-container py-16 text-on-primary/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link
            href="/"
            className="text-2xl font-bold text-on-primary hover:text-white transition-colors cursor-pointer"
          >
            <span className='flex gap-3'><Waves className='mt-1' />Lacul Verde Sâncrai </span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm md:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white hover:underline underline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-8 text-center text-xs opacity-60">
          © 2026 Lacul Verde Sâncrai. Toate drepturile rezervate. Pescuit Sportiv de Reziliență.
        </div>
      </div>
    </footer>
  );
};

export default Footer;