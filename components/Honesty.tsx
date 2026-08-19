import { useTranslations } from 'next-intl';

// Not optional, and not to be softened by marketing instinct — §19 is explicit.
// The free tier's numbers are estimates with a ±30–50% band, and saying so on
// the first page is precisely what makes them credible when the owner sees a
// range instead of a confident wrong number. It is given visual weight here for
// the same reason: hiding it in small print would defeat the point.

export function Honesty() {
  const t = useTranslations('honesty');

  return (
    <section id="honesty" className="scroll-mt-8 px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl rounded-2xl border border-aurasea-tide/25 bg-aurasea-foam p-7 md:p-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aurasea-tide/15 text-aurasea-tide">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M12 8v5m0 3.5h.01M12 3l9 16H3l9-16Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h2 className="text-xl font-semibold tracking-tight text-aurasea-ink md:text-2xl">
            {t('title')}
          </h2>
        </div>

        <p className="mt-5 text-base leading-relaxed text-aurasea-ink/75 md:text-lg">
          {t('body')}
        </p>

        <p className="mt-5 border-l-2 border-aurasea-tide/40 pl-4 text-base font-medium leading-relaxed text-aurasea-ink">
          {t('emphasis')}
        </p>
      </div>
    </section>
  );
}
