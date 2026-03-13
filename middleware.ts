import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'pt',
  localeDetection: true,
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(pt|en|fr|it|de|ar)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
