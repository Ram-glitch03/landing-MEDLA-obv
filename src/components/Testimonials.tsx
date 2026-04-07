import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: '"Gracias a MEDLA pude comprar mi departamento sin estrés. Revisaron todo el contrato, encontraron cláusulas que me perjudicaban y las negociaron. Fue una experiencia completamente diferente a lo que esperaba."',
      author: 'Carlos Mendoza',
      role: 'Cliente OBV · Madrid, España',
      thumbnail: 'https://framerusercontent.com/images/3gNbWRBIWHpLABJ53naBKlKkxI.webp',
    },
    {
      quote: '"El equipo de MEDLA me acompañó en cada paso. Como extranjero, el proceso me parecía imposible de entender solo, pero ellos coordinaron todo con el banco y el notario. 100% recomendado."',
      author: 'Ana Gómez',
      role: 'Cliente OBV · Ciudad Satélite, México',
      thumbnail: 'https://framerusercontent.com/images/tmuiVxA4e7hbx8oY9AfLuHg61U.webp',
    },
  ];

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-navy mb-6"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-blue font-sans"
          >
            Más de <span className="text-primary font-semibold">500 familias</span> han confiado en MEDLA para proteger su inversión inmobiliaria.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
            >
              <div className="p-8 md:p-10 bg-cream flex-1">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg md:text-xl font-medium text-navy leading-relaxed mb-8 font-sans">
                  {t.quote}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-navy font-display">{t.author}</h4>
                    <p className="text-sm text-muted-blue font-sans">{t.role}</p>
                  </div>
                  <div className="text-xs font-bold text-primary tracking-widest uppercase font-sans border border-primary/30 rounded px-2 py-1">
                    MEDLA
                  </div>
                </div>
              </div>
              <div className="relative aspect-video group cursor-pointer">
                <img
                  src={t.thumbnail}
                  alt={t.author}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8"
        >
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-navy opacity-20 hover:opacity-100 transition-opacity">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-3">
            <div className="w-10 h-0.5 bg-primary rounded-full" />
            <div className="w-10 h-0.5 bg-primary/20 rounded-full" />
            <div className="w-10 h-0.5 bg-primary/20 rounded-full" />
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-navy hover:text-primary transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
