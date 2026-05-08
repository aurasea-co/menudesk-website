import { useTranslations } from 'next-intl';

const integrations = [
  { name: 'FoodStory' },
  { name: 'Loyverse' },
  { name: 'StoreHub' },
  { name: 'Square' },
];

export function Integrations() {
  const t = useTranslations('integrations');

  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-aurasea-ink md:text-3xl">
            {t('title')}
          </h2>
          <p className="mt-3 text-aurasea-ink/60">{t('subtitle')}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {integrations.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-xl border border-aurasea-ink/10 bg-white/60 p-6 text-center transition hover:border-aurasea-ink/20 hover:bg-white"
            >
              <div className="text-base font-semibold text-aurasea-ink md:text-lg">
                {p.name}
              </div>
              <div className="mt-2 inline-block rounded-full bg-aurasea-mist/40 px-2.5 py-0.5 text-xs font-medium text-aurasea-deep">
                {t('comingSoon')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
