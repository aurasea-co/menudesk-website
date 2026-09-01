import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// One domain, not a subdomain — Bible Addendum v2.1 §18. menudesk.ai/scan is
// served by the MenuDesk app deployment through a rewrite, so the link a shop
// owner receives in LINE stays on one domain. Every hop between "I saw the ad"
// and "I photographed my menu" is a place people drop out.
const APP_ORIGIN = process.env.MENUDESK_APP_ORIGIN;

// Paths owned by the app rather than by this marketing site.
//
// Pruned 1 Sep 2026 at the C7 cutover, when MENUDESK_APP_ORIGIN moved from the
// standalone MenuDesk app to auraseaos. A rewrite is only as good as the route
// on the other end: forwarding a path the new origin does not serve turns a
// working page into a 404 on a live domain, which is worse than not rewriting
// it at all.
//
// Each of these was checked against auraseaos's route manifest before removal.
const APP_PATHS = [
  '/scan',
  '/scan/:path*',
  // Covers both the result page and /r/s/:token, the forwarded artefact —
  // auraseaos serves the shared rendering underneath /r/ precisely so one
  // rewrite carries both.
  '/r/:path*',
  '/api/scan/:path*', // analyze + share
  // LINE Login, added 1 Sep 2026. This one is here for a specific reason: the
  // visitor starts at menudesk.ai/scan, and if the OAuth callback landed on
  // app.auraseaos.com she would change origin mid-flow and her session cookie
  // would not follow. In the LINE in-app browser that is the single most
  // likely way the whole funnel breaks — it is what the webview checklist's
  // step 13 exists to catch. Keeping the callback on this domain keeps the
  // entire round trip on one origin.
  //
  // The Callback URL registered in the LINE console must match exactly:
  //   https://www.menudesk.ai/api/auth/line/callback
  '/api/auth/line/:path*',
];

// REMOVED at the cutover, with what each one was:
//
//   /upgrade/:path*       MenuDesk's paywall. Live on this domain until today.
//                         auraseaos has no /upgrade route — C6 collapsed the
//                         two billing implementations and deliberately shipped
//                         the paywall without a CTA, because /pricing sits
//                         behind the authenticated route group. Restore this
//                         line when C6's payment path lands.
//   /precise/:path*       The paid accurate flow. Not ported.
//   /s/:path*             MenuDesk's share links. auraseaos publishes shared
//                         results at /r/s/:token instead, already covered above.
//                         Was already 404ing here.
//   /api/checkout/:path*  MenuDesk's PromptPay checkout. C6 ported the QR
//                         generator only; there is no checkout route yet, and
//                         no merchant target configured.
//   /api/dish/:path*      Not ported.
//   /api/precise/:path*   Not ported.
//
// Nothing on this marketing site linked to any of them — the only app link it
// renders is SCAN_URL. They were reachable only by a direct link from the old
// funnel, which produced one scan in total.
//
// The old app is still deployed at menudesk-app.vercel.app for two weeks
// (C7 item 4), so any of these can still be reached there if needed.

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
