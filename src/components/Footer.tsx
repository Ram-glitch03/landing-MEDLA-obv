import { motion } from 'motion/react';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Servicios',
      links: ['Revisión Legal', 'Gestión Documental', 'Asesoría Fiscal', 'Extranjería'],
    },
    {
      title: 'Empresa',
      links: ['Quiénes somos', 'Nuestro equipo', 'Misión y valores', 'Casos de éxito'],
    },
    {
      title: 'Recursos',
      links: ['Blog legal', 'Guías gratuitas', 'Preguntas frecuentes'],
    },
    {
      title: 'Legal',
      links: ['Política de privacidad', 'Aviso legal', 'Términos y condiciones'],
    },
  ];

  return (
    <footer className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xs"
          >
            <a href="/" className="flex items-center gap-2 mb-8">
              <span className="text-navy text-2xl font-display font-bold tracking-tight">MEDLA</span>
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-primary border border-primary rounded px-1.5 py-0.5">OBV</span>
            </a>
            <p className="text-muted-blue text-sm mb-6 font-sans leading-relaxed">
              Despacho legal y fiscal especializado en asesoría inmobiliaria, extranjería y consultoría empresarial.
            </p>
            <div className="space-y-2 text-muted-blue font-sans text-sm">
              <p>Madrid, España · Ciudad Satélite, México</p>
              <p>
                <a href="mailto:contacto@medlaasesores.com" className="hover:text-primary transition-colors">
                  contacto@medlaasesores.com
                </a>
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {footerLinks.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="font-bold text-navy mb-6 font-sans text-sm uppercase tracking-widest">{group.title}</h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-blue hover:text-primary transition-colors font-sans text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-blue font-sans"
          >
            © 2025 MEDLA Asesores. Todos los derechos reservados.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-blue font-sans"
          >
            Desarrollado por{' '}
            <span className="text-primary font-semibold">Avanzza AI</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
