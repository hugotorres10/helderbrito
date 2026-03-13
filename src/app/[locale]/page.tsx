'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';

export default function Home() {
  const t = useTranslations();
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
          <div className="absolute inset-0 bg-black">
            <img
              src="/images/helder-profile.jpg"
              alt="Helder Brito"
              className="w-full h-full object-contain"
              style={{ 
                filter: 'brightness(1.1) contrast(1.2)',
                objectPosition: 'center'
              }}
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
            {t('hero.title').split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="mono-small mb-12 opacity-70"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
          >
            <a href="#contacto" className="btn-editorial">
              {t('hero.cta')}
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
                "{t('statement.quote')}
                <br />
                <span className="opacity-50">{t('statement.quoteFaded')}"</span>
              </h2>
              <p className="mono-small opacity-50">— {t('statement.author')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O QUE FAÇO */}
      <section className="section-dark py-40">
        <div className="container-asymmetric">
          <div className="grid-broken gap-16">
            {['clarity', 'strategy', 'execution'].map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                className="col-span-12 md:col-span-4 border-t border-white/10 pt-8"
              >
                <div className="mono-small opacity-30 mb-4">{t(`services.${key}.num`)}</div>
                <h3 className="display-medium mb-4">{t(`services.${key}.title`)}</h3>
                <p className="mono-body opacity-70">{t(`services.${key}.desc`)}</p>
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
            <h2 className="display-medium">{t('testimonials.title')}</h2>
          </motion.div>

          <div className="grid-broken gap-12">
            {[0, 1, 2].map((i) => (
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
                    "{t(`testimonials.items.${i}.quote`)}"
                  </p>
                  <p className="mono-small text-[#F5F5F0]/50">
                    {t(`testimonials.items.${i}.name`)}
                    <br />
                    {t(`testimonials.items.${i}.role`)}
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
              <div className="bg-black" style={{ clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 95%)' }}>
                <img
                  src="/images/helder-profile.jpg"
                  alt="Helder Brito"
                  className="w-full h-auto"
                  style={{ 
                    filter: 'brightness(1.1) contrast(1.2)'
                  }}
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
              <p className="mono-small mb-6">{t('about.label')}</p>
              <h2 className="display-medium mb-8">
                {t('about.title').split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < 2 && <br />}
                  </span>
                ))}
              </h2>
              <p className="mono-body opacity-70 mb-6">
                {t('about.p1')}
              </p>
              <p className="mono-body opacity-70">
                {t('about.p2')}
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
              {t('cta.title').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
            <p className="mono-body mb-16 opacity-70">
              {t('cta.subtitle')}
            </p>

            <form className="space-y-8">
              <div>
                <input
                  type="text"
                  placeholder={t('cta.namePlaceholder')}
                  className="input-editorial"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t('cta.emailPlaceholder')}
                  className="input-editorial"
                  required
                />
              </div>
              <div>
                <button type="submit" className="btn-editorial">
                  {t('cta.button')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section-dark border-t border-white/10 py-8">
        <div className="container-asymmetric flex justify-between items-center">
          <p className="mono-small opacity-30">{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <a
              href="https://instagram.com/helderbrito_"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-small opacity-50 hover:opacity-100"
            >
              {t('footer.instagram')}
            </a>
            <a
              href="https://linkedin.com/in/helderbrito"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-small opacity-50 hover:opacity-100"
            >
              {t('footer.linkedin')}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
