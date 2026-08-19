// Where every call to action on this site points.
//
// One env var, deliberately. Bible Addendum v2.1 §19 wants the destination
// switchable without a code change: during the concierge phase it can point at
// the LINE OA, and once the funnel is live it points at /scan. Today /scan is
// served on this domain by the rewrite in next.config.mjs, so that is the
// default.
//
// NEXT_PUBLIC_ because the value is read in components that render on both
// sides; it is a destination, not a secret.
export const SCAN_URL = process.env.NEXT_PUBLIC_SCAN_URL || '/scan';

/** True when the CTA leaves this site (e.g. a LINE OA link). */
export const scanUrlIsExternal = /^https?:\/\//.test(SCAN_URL);
