import { useTranslations } from 'next-intl';

// Replaces the old POS logo wall. Two reasons it had to go: FoodStory is the
// competitor and §15 says don't wake the giant, and a wall of POS logos tells
// the ~60%+ of shops with no POS that this product is not for them — when they
// are exactly the defensible ground. CSV-first, adapters later.

export function Compatibility() {
  const t = useTranslations('compatibility');

  return (
    <section className="bg-menudesk-cream/50 px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-aurasea-ink md:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-aurasea-ink/70">
          {t('body')}
        </p>
        <p className="mt-6 inline-flex rounded-full bg-white/80 px-5 py-2 text-sm font-medium text-aurasea-deep">
          {t('note')}
        </p>
      </div>
    </section>
  );
}
