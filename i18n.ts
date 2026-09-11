import { getRequestConfig } from 'next-intl/server';
import { showPricing } from '@/lib/pricing-visibility';

/**
 * Remove the pricing namespace before the messages are handed over.
 *
 * Gating the RENDER is not enough and this was measured, not assumed: on the
 * sister site, with every price component correctly gated, the built HTML
 * still contained ฿890 and ฿199 because next-intl serialises the whole
 * message tree into the page for client components to read. Nothing displayed
 * them; view-source did.
 *
 * messages/{en,th}.json are untouched — this removes the namespace from the
 * COPY handed over, and flipping the flag restores it with no code change.
 */
function withoutPricing<T>(messages: T): T {
  const { pricing: _pricing, ...rest } = messages as Record<string, unknown>;
  return rest as T;
}

export const locales = ['en', 'th'] as const;
export const defaultLocale = 'th' as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale =
    requested && locales.includes(requested as (typeof locales)[number])
      ? requested
      : defaultLocale;

  return {
    locale,
    messages: showPricing()
      ? (await import(`./messages/${locale}.json`)).default
      : withoutPricing((await import(`./messages/${locale}.json`)).default),
  };
});
