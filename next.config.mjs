import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// One domain, not a subdomain — Bible Addendum v2.1 §18. menudesk.ai/scan is
// served by the MenuDesk app deployment through a rewrite, so the link a shop
// owner receives in LINE stays on one domain. Every hop between "I saw the ad"
// and "I photographed my menu" is a place people drop out.
const APP_ORIGIN = process.env.MENUDESK_APP_ORIGIN;

// Paths owned by the app rather than by this marketing site.
const APP_PATHS = [
  '/scan',
  '/scan/:path*',
  '/r/:path*', // result page, opened from LINE
  '/s/:path*', // public share links
  '/upgrade/:path*', // paywall
  '/precise/:path*', // paid accurate flow
  '/api/scan/:path*',
  '/api/checkout/:path*',
  '/api/dish/:path*',
  '/api/precise/:path*',
];

// Deliberately NOT proxied, and it should stay that way:
//   /admin, /api/admin/*  — concierge tooling, reachable only at the app origin
//   /api/line/webhook     — LINE posts straight to the app; its signature check
//                           must not depend on this marketing site being up

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    if (!APP_ORIGIN) {
      // Fail the build rather than ship a site whose /scan silently 404s.
      // Config that fails quietly has cost this project real hours.
      if (process.env.NODE_ENV === 'production') {
        throw new Error(
          'MENUDESK_APP_ORIGIN is not set — /scan would 404. ' +
            'Set it to the MenuDesk app origin, e.g. https://menudesk-app.vercel.app'
        );
      }
      return [];
    }
    // beforeFiles, so these win over this site's /[locale] catch-all route.
    return {
      beforeFiles: APP_PATHS.map((source) => ({
        source,
        destination: `${APP_ORIGIN}${source}`,
      })),
    };
  },
};

export default withNextIntl(nextConfig);
