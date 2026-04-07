import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              ¿Listo para dar el primer paso hacia tu vivienda?
            </h2>
            <p className="text-lg text-white/80 font-sans">
              Agenda una consulta sin compromiso y descubre cómo MEDLA puede proteger tu inversión desde el primer día. Estamos en Madrid y Ciudad Satélite, listos para ayudarte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button className="px-8 py-4 bg-primary text-navy font-bold rounded-xl shadow-lg hover:bg-primary-dark transition-all font-sans">
              Agenda tu cita
            </button>
            <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all font-sans">
              Contáctanos
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-5xl aspect-[4.6] rounded-t-3xl overflow-hidden"
          >
            <img
              src="https://framerusercontent.com/images/MbaduDZSaI33oStNzpLKNO4QN8.webp"
              alt="MEDLA OBV — Asesoría legal en vivienda"
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
