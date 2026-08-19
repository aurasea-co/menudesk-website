import { useTranslations } from 'next-intl';
import { ScanCta } from '@/components/ScanCta';

export function FinalCta() {
  const t = useTranslations('finalCta');

  return (
    <section className="px-6 pb-20 pt-8 md:px-10 md:pb-28">
      <div className="mx-auto max-w-3xl rounded-3xl bg-aurasea-deep px-7 py-12 text-center md:px-12 md:py-16">
        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-menudesk-cream md:text-4xl">
          {t('title')}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-menudesk-cream/75">
          {t('body')}
        </p>
        <div className="mt-8 flex justify-center">
          <ScanCta label={t('button')} />
        </div>
      </div>
    </section>
  );
}
