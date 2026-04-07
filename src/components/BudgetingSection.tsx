import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function BudgetingSection() {
  const points = [
    'Gestión de expediente completo',
    'Coordinación con entidades bancarias',
    'Optimización fiscal de la operación',
  ];

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Content Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-primary tracking-widest uppercase mb-4 font-sans"
            >
              GESTIÓN INTEGRAL
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-navy mb-6"
            >
              Tu expediente, sin complicaciones ni demoras
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-blue leading-relaxed mb-8 font-sans"
            >
              Nos encargamos de toda la documentación y trámites para que tú solo te preocupes de elegir tu hogar. Desde la obtención de certificados hasta la liquidación de impuestos, nuestro equipo lo gestiona todo con precisión y agilidad.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-slate-blue font-medium font-sans">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  {point}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative aspect-[0.98] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://framerusercontent.com/images/yF3SoAsftWoBFT905xBOoZ1WP8.png"
                alt="Gestión de expediente MEDLA"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
