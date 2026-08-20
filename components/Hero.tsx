import { useTranslations } from 'next-intl';
import { ScanCta } from '@/components/ScanCta';

// Sell the wound, not the category. The headline has to make an owner suspect
// their own menu inside one sentence.
//
// The wound is now delivery pricing: commission plus VAT comes off the top, so
// the same price in-store and on an app are not the same money. `noDelivery`
// exists so the roughly-half of shops not on the apps do not read the headline
// and conclude this is not for them.

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="px-6 pb-16 pt-10 md:px-10 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center rounded-full border border-aurasea-ink/12 bg-white/70 px-4 py-1.5 text-sm font-medium text-aurasea-ink/70">
          {t('eyebrow')}
        </span>

        <h1 className="mt-7 text-[2rem] font-semibold leading-[1.15] tracking-tight text-aurasea-ink sm:text-4xl md:text-6xl md:leading-[1.05]">
          {t('headline')}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-aurasea-ink/70 md:text-xl">
          {t('subhead')}
        </p>

        <div className="mt-9 flex flex-col items-center gap-4">
          <ScanCta label={t('ctaPrimary')} />

          <a
            href="#how-it-works"
            className="text-base font-medium text-aurasea-deep underline-offset-4 hover:underline"
          >
            {t('ctaSecondary')}
          </a>
        </div>

        <p className="mt-7 text-sm text-aurasea-ink/55">{t('trustLine')}</p>

        <div className="mt-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-menudesk-olive/12 px-4 py-1.5 text-sm font-medium text-menudesk-olive">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0">
              <path
                d="M5 13l4 4L19 7"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t('noPos')}
          </span>
        </div>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-aurasea-ink/55">
          {t('noDelivery')}
        </p>
      </div>
    </section>
  );
}
