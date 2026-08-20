import { useTranslations } from 'next-intl';

// The lead wedge: a dish priced identically in-store and on an app returns less
// than half the contribution, because commission and VAT come off the top.
// Almost no owner has run that arithmetic, which is what makes it worth a
// section of its own rather than a bullet.
//
// `note` is not decoration. The figures here are an illustration, not a
// measured finding about anyone's shop, and the honesty rule says a number must
// carry what it is. It renders directly beneath the calculation for that reason
// — never move it into a footer or fold it away.

export function Delivery() {
  const t = useTranslations('delivery');

  return (
    <section
      id="delivery"
      className="scroll-mt-8 bg-menudesk-cream/50 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-aurasea-ink md:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-aurasea-ink/70">
          {t('lead')}
        </p>

        <div className="mt-9 overflow-hidden rounded-2xl border border-aurasea-ink/10 bg-white/85">
          <div className="border-b border-aurasea-ink/8 px-5 py-4 md:px-7 md:py-5">
            <p className="text-base leading-relaxed text-aurasea-ink/80 md:text-lg">
              {t('rowDineIn')}
            </p>
          </div>
          <div className="border-b border-aurasea-ink/8 bg-menudesk-ember/[0.06] px-5 py-4 md:px-7 md:py-5">
            <p className="text-base leading-relaxed text-aurasea-ink md:text-lg">
              {t('rowApp')}
            </p>
          </div>
          <div className="px-5 py-5 md:px-7 md:py-6">
            <p className="text-lg font-semibold leading-snug text-aurasea-deep md:text-xl">
              {t('conclusion')}
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-aurasea-ink/55">
          {t('note')}
        </p>

        {/* Says out loud that this section is skippable. Without it the whole
            page reads as "for shops that sell on the apps", and roughly half of
            them close the tab at the headline. */}
        <p className="mt-5 rounded-xl bg-white/70 px-5 py-3.5 text-sm leading-relaxed text-aurasea-ink/70">
          {t('ifNotOnApps')}
        </p>
      </div>
    </section>
  );
}
