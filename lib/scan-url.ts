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

/**
 * True when the CTA points INTO LINE — the OA link, or a LIFF page.
 *
 * Matters because of the parameter below: forcing an external browser on a
 * link whose entire purpose is to open LINE would break adding the OA as a
 * friend, which is the concierge phase's only conversion step.
 */
const scanUrlIsLine = /^https?:\/\/([^/]*\.)?(line\.me|lin\.ee)(\/|$)/.test(SCAN_URL);

/**
 * The CTA destination, opened OUTSIDE LINE's in-app browser.
 *
 * LINE's webview refuses getUserMedia outright — measured, not assumed: the
 * scan page's camera reports 'denied' there with camera permission granted at
 * the OS level, and the same link with this parameter opens Chrome, which
 * prompts normally and grants (auraseaos PR #48). A visitor who reaches this
 * site from the LINE OA and taps the CTA therefore lands on a scan page whose
 * camera cannot open at all, whatever the app does.
 *
 * `openExternalBrowser=1` is LINE's own escape hatch and is meaningless to
 * every other browser, so this is inert outside LINE.
 *
 * It goes on the ENTRY link and nowhere else. The funnel's anonymous session
 * cookie belongs to the browser that started it, so hopping browsers mid-flow
 * would hand her a session that does not exist — put it on the first tap and
 * the whole scan happens in one browser that can open a camera.
 *
 * The mirror of this, with tests, is auraseaos `lib/scan/entry-link.ts`; the
 * two repos cannot share a module, so they share a name and a comment instead.
 */
export const SCAN_ENTRY_URL = scanUrlIsLine
  ? SCAN_URL
  : `${SCAN_URL}${SCAN_URL.includes('?') ? '&' : '?'}openExternalBrowser=1`;
