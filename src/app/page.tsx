'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden section-dark"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <div className="photo-overlay absolute inset-0">
            <img
              src="/images/helder-brito.jpg"
              alt="Helder Brito"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </motion.div>

        <div className="container-asymmetric relative h-full flex flex-col justify-end pb-32">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="display-giant mb-6"
          >
            HELDER
            <br />
            BRITO.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="mono-small mb-12 opacity-70"
          >
            Coach. Estrategista. Transformação real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          >
            <a href="#contacto" className="btn-editorial">
              Começa Agora
            </a>
          </motion.div>
        </div>

        <div className="scroll-indicator" />
      </section>

      {/* STATEMENT */}
      <section className="section-light py-40">
        <div className="container-asymmetric">
          <div className="grid-broken">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-10 md:col-start-2"
            >
              <h2 className="display-large mb-8 leading-tight">
                "A maioria das pessoas sabe o que quer.
                <br />
                <span className="opacity-50">Poucos sabem como chegar lá."</span>
              </h2>
              <p className="mono-small opacity-50">— Helder Brito</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O QUE FAÇO */}
      <section className="section-dark py-40">
        <div className="container-asymmetric">
          <div className="grid-broken gap-16">
            {[
              {
                num: '01',
                title: 'Clareza',
                desc: 'Eliminamos o ruído. Defines quem és e para onde vais.',
              },
              {
                num: '02',
                title: 'Estratégia',
                desc: 'Um plano real, não motivação vazia.',
              },
              {
                num: '03',
                title: 'Execução',
                desc: 'Acompanhamento direto. Resultados mensuráveis.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                className="col-span-12 md:col-span-4 border-t border-white/10 pt-8"
              >
                <div className="mono-small opacity-30 mb-4">{item.num}</div>
                <h3 className="display-medium mb-4">{item.title}</h3>
                <p className="mono-body opacity-70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="section-light py-40">
        <div className="container-asymmetric">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
          >
            <h2 className="display-medium">Resultados Reais</h2>
          </motion.div>

          <div className="grid-broken gap-12">
            {[
              {
                quote:
                  'O Helder mudou completamente a forma como vejo o meu negócio. Em 3 meses, faturação cresceu 180%.',
                name: 'Ricardo M.',
                role: 'CEO, Tech Startup',
              },
              {
                quote:
                  'Finalmente alguém que não vende sonhos. Estratégia clara, execução real.',
                name: 'Ana P.',
                role: 'Fundadora, E-commerce',
              },
              {
                quote:
                  'O melhor investimento que fiz em mim próprio. Foco total, zero fluff.',
                name: 'João S.',
                role: 'Freelancer',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="col-span-12 md:col-span-4 bg-[#0A0A0A] p-12 relative"
                style={{
                  transform: i === 1 ? 'translateY(3rem)' : 'none',
                }}
              >
                <div className="accent-line">
                  <p className="mono-body text-[#F5F5F0] mb-8 italic text-lg leading-relaxed">
                    "{item.quote}"
                  </p>
                  <p className="mono-small text-[#F5F5F0]/50">
                    {item.name}
                    <br />
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="section-dark py-40">
        <div className="container-asymmetric">
          <div className="grid-broken items-center gap-20">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-5"
            >
              <div className="photo-overlay" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}>
                <img
                  src="/images/helder-brito.jpg"
                  alt="Helder Brito"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-6 md:col-start-7 accent-line"
            >
              <p className="mono-small mb-6">SOBRE</p>
              <h2 className="display-medium mb-8">
                Nasci em Portugal.
                <br />
                Vivi em 7 países.
                <br />
                Transformei 200+ vidas.
              </h2>
              <p className="mono-body opacity-70 mb-6">
                Não acredito em fórmulas mágicas. Acredito em clareza, estratégia, e execução sem desculpas.
              </p>
              <p className="mono-body opacity-70">
                Coaching não é terapia. É guerra. E eu só trabalho com quem quer ganhar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="section-dark py-40 relative overflow-hidden">
        <div className="container-asymmetric relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h2 className="display-giant mb-6">
              PRÓXIMO
              <br />
              PASSO.
            </h2>
            <p className="mono-body mb-16 opacity-70">
              Uma conversa. Sem compromisso. Com intenção.
            </p>

            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder="O teu nome"
                  className="input-editorial"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="O teu email"
                  className="input-editorial"
                  required
                />
              </div>
              <div>
                <button type="submit" className="btn-editorial">
                  Entrar em Contacto
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section-dark border-t border-white/10 py-8">
        <div className="container-asymmetric flex justify-between items-center">
          <p className="mono-small opacity-30">© Helder Brito</p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/helderbrito_"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-small opacity-50 hover:opacity-100"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/helderbrito"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-small opacity-50 hover:opacity-100"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
