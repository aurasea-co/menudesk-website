import { useTranslations } from 'next-intl';

// Why an owner should believe this was built by someone who has stood behind a
// counter. Kept short and unadorned — a photo-less paragraph reads as a claim,
// not a pitch.

export function Founder() {
  const t = useTranslations('founder');

  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-aurasea-ink md:text-3xl">
          {t('title')}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-aurasea-ink/75">
          {t('body')}
        </p>
        <p className="mt-6 text-sm font-medium text-aurasea-ink/50">
          {t('signature')}
        </p>
      </div>
    </section>
  );
}
