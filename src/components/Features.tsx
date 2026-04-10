import { motion } from 'motion/react';

export default function Features() {
  const features = [
    {
      title: 'Ahorro a corto, medio y largo plazo',
      description: 'planificación estratégica del ahorro adaptada a cada etapa vital y a cada objetivo financiero estructurando soluciones a corto, medio y largo plazo que permitan construir un patrimonio sólido con una visión ordenada y eficiente del futuro financiero.',
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: 'Hipotecas residente y no residente',
      description: 'diseño y gestión de soluciones hipotecarias personalizadas para residentes y no residentes con acompañamiento integral en todo el ciclo hipotecario desde la contratación de nuevas hipotecas hasta la subrogación para la mejora de las hipotecas existentes y amortización anticipada, negociando con las entidades financieras las mejores condiciones del mercado en cada momento.',
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: 'Inversión',
      description: 'diseño de estrategias de inversión personalizadas en función del perfil de riesgo, horizonte temporal y objetivos financieros del cliente. Acceso a productos financieros diversificados para hacer crecer el patrimonio de forma eficiente.',
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: 'Planes de pensiones',
      description: 'optimización de la planificación de la jubilación mediante el análisis de planes existentes, la realización de traspasos entre entidades y la mejora de la rentabilidad y eficiencia fiscal alineando la estrategia de pensiones con los objetivos de retiro del cliente.',
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: 'Seguros',
      description: 'diseño de programas de protección personalizados orientados a la protección personal, la protección de ingresos y la protección patrimonial mediante el asesoramiento integral en todos los ramos de seguros incluyendo vida, baja laboral, responsabilidad civil, hogar, salud y otros garantizando la tranquilidad financiera del cliente y su entorno familiar y profesional.',
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24 text-center mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary tracking-widest uppercase mb-4 font-sans"
          >
            NUESTROS SERVICIOS OBV
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-navy mb-6"
          >
            Servicios Financieros y Patrimoniales Integrales
          </motion.h2>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col gap-10 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl group">
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors z-10 duration-500" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-12 h-1 bg-primary rounded-full mb-6" />
                <h3 className="text-3xl md:text-4xl font-display font-bold text-navy leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-blue leading-relaxed font-sans first-letter:capitalize">
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
