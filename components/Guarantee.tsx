import { useTranslations } from 'next-intl';

// Sits immediately after pricing, because it answers the objection pricing
// creates: ฿99 is small, but "small and useless" is still money an owner in a
// bad year does not have. `note` scopes the promise to the ฿99 plan and is
// rendered, not hidden — a guarantee with an unstated limit is worse than none.

export function Guarantee() {
  const t = useTranslations('guarantee');

  return (
    <section className="px-6 pb-4 pt-2 md:px-10 md:pb-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-menudesk-olive/30 bg-menudesk-olive/[0.07] p-7 text-center md:p-9">
        <div className="flex items-center justify-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-menudesk-olive/15 text-menudesk-olive">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              <path
                d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M9 12l2 2 4-4"
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

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-aurasea-ink/80 md:text-lg">
          {t('body')}
        </p>
        <p className="mt-3 text-sm text-aurasea-ink/55">{t('note')}</p>
      </div>
    </section>
  );
}
