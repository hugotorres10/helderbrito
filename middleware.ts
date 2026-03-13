import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'pt',
  localeDetection: true,
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/', '/(pt|en|fr|it|de|ar)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
