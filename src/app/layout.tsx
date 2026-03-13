import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from '@/lib/LanguageContext';

export const metadata: Metadata = {
  title: "Helder Brito — Coach. Estrategista. Transformação Real.",
  description: "A maioria das pessoas sabe o que quer. Poucos sabem como chegar lá.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        
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
