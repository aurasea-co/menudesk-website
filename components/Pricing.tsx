import { useTranslations } from 'next-intl';
import { ScanCta } from '@/components/ScanCta';
import { SCAN_URL, scanUrlIsExternal } from '@/lib/scan-url';

// Three tiers: free / ฿99 / ฿399. The ฿199 tier is retired.
//
// Feature lists are arrays and differ in length by tier, so they are read with
// t.raw rather than numbered f1..fn keys — adding a bullet is then a copy edit,
// not a code change, which is the whole reason strings live in messages/.
//
// Every button still goes to the free scan. Paid tiers are chosen inside the
// funnel, once the owner has seen their own numbers; a checkout button here
// would be asking for money before showing the leak.

const TIERS = ['free', 'basic', 'pro'] as const;

export function Pricing() {
  const t = useTranslations('pricing');

  return (
    <section id="pricing" className="scroll-mt-8 px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-aurasea-ink md:text-4xl">
            {t('title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-aurasea-ink/60">
            {t('subtitle')}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TIERS.map((tier) => {
            const featured = tier === 'basic';
            const features = t.raw(`${tier}.features`) as string[];

            return (
              <div
                key={tier}
                className={`flex flex-col rounded-2xl border bg-white/80 p-6 ${
                  featured
                    ? 'border-menudesk-ember/40 shadow-lg shadow-menudesk-ember/10 md:-mt-3 md:pb-8'
                    : 'border-aurasea-ink/8'
                }`}
              >
                <h3 className="text-base font-semibold text-aurasea-ink">
                  {t(`${tier}.name`)}
                </h3>

                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight text-aurasea-ink">
                    {t(`${tier}.price`)}
                  </span>
                  {tier !== 'free' && (
                    <span className="text-sm text-aurasea-ink/50">{t('period')}</span>
                  )}
                </div>

                <p className="mt-4 text-base leading-relaxed text-aurasea-ink/70">
                  {t(`${tier}.tagline`)}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mt-0.5 h-5 w-5 shrink-0 text-menudesk-olive"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-base leading-relaxed text-aurasea-ink/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7">
                  {featured ? (
                    <ScanCta label={t(`${tier}.cta`)} size="md" className="w-full" />
                  ) : (
                    <a
                      href={SCAN_URL}
                      {...(scanUrlIsExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="flex w-full items-center justify-center rounded-full border border-aurasea-ink/15 px-5 py-2.5 text-sm font-semibold text-aurasea-ink transition hover:border-aurasea-deep/40 hover:bg-white"
                    >
                      {t(`${tier}.cta`)}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-aurasea-ink/50">{t('prepaid')}</p>
      </div>
    </section>
  );
}
