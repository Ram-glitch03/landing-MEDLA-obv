import { motion } from 'motion/react';
import { Scale } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      {/* Background Blur Effect */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] blur-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-navy mb-8"
        >
          <Scale className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold tracking-wide uppercase font-sans">Asesoría Legal en Vivienda</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-navy max-w-4xl mx-auto leading-[1.1] tracking-tight mb-8"
        >
          Tu camino a la vivienda propia, con respaldo legal experto.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-blue max-w-2xl mx-auto mb-12 leading-relaxed font-sans"
        >
          En MEDLA te acompañamos en cada paso del proceso de adquisición de vivienda: desde la revisión documental hasta el cierre legal, con la tranquilidad de tener expertos de tu lado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-navy text-white font-bold rounded-xl shadow-lg hover:bg-navy/90 transition-all font-sans">
            Agenda tu cita
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-navy font-bold rounded-xl border border-navy/20 shadow-sm hover:bg-cream transition-all font-sans">
            Conoce el proceso
          </button>
        </motion.div>

        {/* Widgets / Preview Images */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex justify-center items-end gap-4 md:gap-8 overflow-hidden px-4"
        >
          <div className="w-1/3 max-w-[300px] aspect-[0.98] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <img
              src="https://framerusercontent.com/images/sN7cqMPghafVMcbrpu9PxmrFjY.webp"
              alt="Asesoría legal en vivienda"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-2/5 max-w-[380px] aspect-[1.1] rounded-2xl overflow-hidden border border-gray-100 shadow-xl z-10">
            <img
              src="https://framerusercontent.com/images/c2ldF7p2zH14KtCiHGaSKv7UZs0.webp"
              alt="Gestión documental MEDLA"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-1/3 max-w-[300px] aspect-[0.98] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            <img
              src="https://framerusercontent.com/images/57f4a4c2MkO0X9VSiIwBBS099aU.webp"
              alt="Cierre legal inmobiliario"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
