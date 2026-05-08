'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Waves, Menu, X } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Acasă' },
  { href: '/specii', label: 'Specii Pești' },
  { href: '/pret', label: 'Tarife' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline-variant/30 bg-surface transition-colors duration-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2 text-xl font-bold tracking-tight text-primary transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <Waves className="h-6 w-6 text-secondary shrink-0" />
          <span>Lacul Verde Sâncrai</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-1 py-2 text-sm font-semibold transition-all duration-200 border-b-2 ${
                pathname === item.href
                  ? 'border-primary text-primary'
                  : 'border-transparent text-on-surface-variant hover:text-secondary hover:border-secondary/50'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-on-primary shadow-lg transition-all duration-200 hover:bg-secondary hover:shadow-xl active:scale-95"
          >
            Rezervă Acum
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-outline-variant/30 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <X className="h-6 w-6 text-primary" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <Menu className="h-6 w-6 text-primary" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-surface border-t border-outline-variant/30 px-6 py-8 shadow-2xl">
              <div className="flex flex-col gap-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.35, ease: 'easeOut' }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-3 px-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                        pathname === item.href
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-on-surface-variant hover:bg-outline-variant/30 hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.07, duration: 0.35, ease: 'easeOut' }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block mt-2 rounded-xl bg-primary py-4 px-6 text-center font-bold text-lg text-on-primary shadow-lg hover:bg-secondary active:scale-95 transition-all duration-300"
                  >
                    Rezervă Acum
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
