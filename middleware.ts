import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
});

// The funnel paths below are excluded on purpose. They are not pages of this
// site — next.config.mjs rewrites them to the MenuDesk app deployment, and
// middleware runs BEFORE rewrites. Without the exclusion next-intl sees /scan,
// applies `localePrefix: 'as-needed'`, redirects to /th/scan, and the rewrite
// never runs. This is trap #1 in Bible Addendum v2.1 §18.
//
// Each entry is anchored with (?:/|$) or a trailing slash so it excludes a
// whole path segment and nothing else: a future marketing page at /scanner,
// /services or /reviews still gets localised normally.
export const config = {
  matcher: [
    '/((?!api|_next|_vercel|scan(?:/|$)|r/|s/|upgrade(?:/|$)|precise(?:/|$)|.*\\..*).*)',
  ],
};
