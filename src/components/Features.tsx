import { motion } from 'motion/react';
import { PiggyBank, Home, LineChart, Umbrella, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: 'Ahorro',
      description: 'Planificación estratégica del ahorro adaptada a cada etapa vital y objetivo financiero. Estructuramos soluciones a corto, medio y largo plazo para construir un patrimonio sólido.',
      icon: PiggyBank,
    },
    {
      title: 'Hipotecas',
      description: 'Diseño y gestión de soluciones hipotecarias para residentes y no residentes. Acompañamiento integral, desde nuevas contrataciones hasta mejora de condiciones y amortización.',
      icon: Home,
    },
    {
      title: 'Inversión',
      description: 'Estrategias de inversión personalizadas según el perfil de riesgo y objetivos. Acceso a productos diversificados para hacer crecer el patrimonio de forma eficiente.',
      icon: LineChart,
    },
    {
      title: 'Planes de Pensiones',
      description: 'Optimización de su jubilación. Análisis de planes, traspasos y mejora de rentabilidad y eficiencia fiscal, alineando la estrategia con sus objetivos de retiro.',
      icon: Umbrella,
    },
    {
      title: 'Seguros',
      description: 'Programas de protección personal, ingresos y patrimonio. Asesoramiento en vida, baja laboral, responsabilidad civil, hogar y salud, garantizando su tranquilidad.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-4 font-sans"
          >
            SERVICIOS OBV
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-navy mb-6"
          >
            Todo lo que necesitas para comprar con seguridad
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-blue leading-relaxed font-sans"
          >
            El servicio OBV de MEDLA reúne en un solo despacho la asesoría legal, fiscal e inmobiliaria que necesitas para adquirir tu vivienda sin riesgos y con plena confianza.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="p-8 rounded-2xl bg-cream flex flex-col gap-6 hover:shadow-xl hover:bg-white border border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-muted-blue leading-relaxed font-sans mt-2">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
