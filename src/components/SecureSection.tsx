import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function SecureSection() {
  const points = [
    'Verificación del estado registral y cargas',
    'Revisión exhaustiva del contrato de compraventa',
    'Representación legal ante notario y autoridades',
  ];

  return (
    <section id="proceso" className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative aspect-[0.92] bg-cream rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-[60px] bg-primary/20 blur-[120px] rounded-full" />
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <img
                src="https://framerusercontent.com/images/MbaduDZSaI33oStNzpLKNO4QN8.webp"
                alt="Seguridad jurídica MEDLA"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-primary tracking-widest uppercase mb-4 font-sans"
            >
              SEGURIDAD JURÍDICA
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-display font-bold text-navy mb-6"
            >
              Protegemos tus intereses en cada paso del proceso
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-blue leading-relaxed mb-8 font-sans"
            >
              Adquirir una vivienda es una de las decisiones más importantes de tu vida. En MEDLA nos aseguramos de que cada documento esté en orden, cada cláusula te proteja y cada trámite se realice con la máxima diligencia legal.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
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
        </div>
      </div>
    </section>
  );
}
