import { motion } from 'motion/react';

export default function Blog() {
  const posts = [
    {
      title: 'Guía completa para comprar vivienda siendo extranjero en España',
      category: 'Extranjería',
      image: 'https://framerusercontent.com/images/e7hZa2fP8gHYdFI94ZrOgGQ44k.webp',
      excerpt: 'Todo lo que debes saber sobre los requisitos legales, permisos y trámites para adquirir una propiedad en España si no eres ciudadano europeo.',
    },
    {
      title: '¿Qué impuestos debes pagar al comprar un inmueble? Guía fiscal 2025',
      category: 'Fiscal',
      image: 'https://framerusercontent.com/images/s2jDUQFdEJNRLeYNEaiZb48Xs.webp',
      excerpt: 'ITP, AJD, IVA… Conoce cada tributo que interviene en la compraventa y cómo optimizar la carga fiscal de tu operación con asesoría experta.',
    },
    {
      title: 'Señales de alerta en contratos de compraventa que no debes ignorar',
      category: 'Derecho Civil',
      image: 'https://framerusercontent.com/images/9mrrY12AU3UTVVwwQiPiXadJNSg.webp',
      excerpt: 'Aprende a identificar cláusulas abusivas y condiciones desfavorables antes de firmar. Un abogado especialista puede ahorrarte miles de euros.',
    },
  ];

  return (
    <section id="blog" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-navy mb-6"
            >
              Conoce. Decide. Protégete.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-blue font-sans"
            >
              Artículos legales y fiscales escritos por nuestros expertos para que tomes decisiones informadas en tu proceso de compra.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="px-6 py-3 bg-navy text-white font-bold rounded-lg shadow-lg hover:bg-navy/90 transition-all font-sans"
          >
            Ver todos
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[1.85] rounded-2xl overflow-hidden mb-6 blog-card-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="inline-block px-4 py-1 rounded-lg bg-primary/10 text-navy text-sm font-bold mb-4 font-sans">
                {post.category}
              </div>
              <h3 className="text-xl font-display font-bold text-navy mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-blue line-clamp-3 mb-6 font-sans">
                {post.excerpt}
              </p>
              <button className="text-navy font-bold hover:text-primary transition-colors font-sans">
                Leer más
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
