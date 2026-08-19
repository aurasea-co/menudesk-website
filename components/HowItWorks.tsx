import { useTranslations } from 'next-intl';

// Three steps, no account, no POS. The anchor id is what the hero's secondary
// link scrolls to — the only non-CTA link on the page.

export function HowItWorks() {
  const t = useTranslations('howItWorks');
  const steps = ['step1', 'step2', 'step3'] as const;

  return (
    <section
      id="how-it-works"
      className="scroll-mt-8 bg-menudesk-cream/50 px-6 py-16 md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-aurasea-ink md:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-3 text-lg text-aurasea-ink/60">{t('subtitle')}</p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step}
              className="rounded-2xl border border-aurasea-ink/8 bg-white/80 p-6"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aurasea-deep text-base font-semibold text-menudesk-cream">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-aurasea-ink">
                {t(`${step}.title`)}
              </h3>
              <p className="mt-2.5 text-base leading-relaxed text-aurasea-ink/70">
                {t(`${step}.body`)}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
