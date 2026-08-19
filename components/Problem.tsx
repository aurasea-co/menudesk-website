import { useTranslations } from 'next-intl';

// The wound, stated plainly before any feature talk.

export function Problem() {
  const t = useTranslations('problem');
  const points = ['one', 'two', 'three'] as const;

  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-aurasea-ink md:text-4xl">
          {t('title')}
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-aurasea-ink/70">
          {t('body')}
        </p>

        <ul className="mt-9 space-y-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-xl border border-aurasea-ink/8 bg-white/60 px-5 py-4"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-menudesk-ember" />
              <span className="text-base leading-relaxed text-aurasea-ink/80">
                {t(`points.${p}`)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
