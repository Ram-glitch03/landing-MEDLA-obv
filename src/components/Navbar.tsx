import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center gap-3">
              <div className="h-8 flex items-center">
                <span className="text-navy text-2xl font-display font-bold tracking-tight">MEDLA</span>
                <span className="ml-2 text-xs font-sans font-semibold uppercase tracking-widest text-primary border border-primary rounded px-1.5 py-0.5">OBV</span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-blue hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2 text-sm font-semibold text-navy bg-white border border-navy/20 rounded-lg shadow-sm hover:bg-cream transition-all">
              Más información
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-navy bg-primary rounded-lg shadow-md hover:bg-primary-dark transition-all">
              Agenda tu cita
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-primary transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium rounded-md text-slate-blue hover:text-primary hover:bg-cream"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <button className="w-full px-5 py-3 text-base font-semibold text-navy bg-white border border-navy/20 rounded-lg shadow-sm">
                  Más información
                </button>
                <button className="w-full px-5 py-3 text-base font-semibold text-navy bg-primary rounded-lg shadow-md">
                  Agenda tu cita
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
