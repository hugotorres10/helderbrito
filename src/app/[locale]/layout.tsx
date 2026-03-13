import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../../i18n';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const titles: Record<string, string> = {
    pt: 'Helder Brito — Coach. Estrategista. Transformação Real.',
    en: 'Helder Brito — Coach. Strategist. Real Transformation.',
    fr: 'Helder Brito — Coach. Stratège. Transformation Réelle.',
    it: 'Helder Brito — Coach. Strategista. Trasformazione Reale.',
    de: 'Helder Brito — Coach. Stratege. Echte Transformation.',
    ar: 'هيلدر بريتو — مدرب. استراتيجي. تحول حقيقي.',
  };
  
  const descriptions: Record<string, string> = {
    pt: 'A maioria das pessoas sabe o que quer. Poucos sabem como chegar lá.',
    en: 'Most people know what they want. Few know how to get there.',
    fr: 'La plupart des gens savent ce qu\'ils veulent. Peu savent comment y arriver.',
    it: 'La maggior parte delle persone sa cosa vuole. Pochi sanno come arrivarci.',
    de: 'Die meisten Menschen wissen, was sie wollen. Wenige wissen, wie sie dorthin kommen.',
    ar: 'معظم الناس يعرفون ما يريدون. القليل يعرفون كيف يصلون إلى هناك.',
  };
  
  return {
    title: titles[locale] || titles.pt,
    description: descriptions[locale] || descriptions.pt,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={direction}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        
        {/* Custom cursor */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const cursor = document.createElement('div');
                cursor.className = 'cursor';
                document.body.appendChild(cursor);
                
                let mouseX = 0;
                let mouseY = 0;
                let cursorX = 0;
                let cursorY = 0;
                
                document.addEventListener('mousemove', (e) => {
                  mouseX = e.clientX;
                  mouseY = e.clientY;
                });
                
                function animate() {
                  cursorX += (mouseX - cursorX) * 0.15;
                  cursorY += (mouseY - cursorY) * 0.15;
                  cursor.style.left = cursorX + 'px';
                  cursor.style.top = cursorY + 'px';
                  requestAnimationFrame(animate);
                }
                animate();
                
                // Hover effect
                const hovers = document.querySelectorAll('a, button, .btn-editorial, input');
                hovers.forEach(el => {
                  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
                });
                
                // Add hover listeners for dynamically added elements
                const observer = new MutationObserver(() => {
                  document.querySelectorAll('a, button, .btn-editorial, input').forEach(el => {
                    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
                  });
                });
                observer.observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
