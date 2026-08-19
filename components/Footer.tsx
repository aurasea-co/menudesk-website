import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-aurasea-ink/10 bg-white/40 px-6 py-10 md:px-10 md:py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row md:gap-4">
        <div className="text-center md:text-left">
          <div className="text-base font-semibold text-aurasea-ink">MenuDesk</div>
          <p className="mt-1 text-sm text-aurasea-ink/60">{t('tagline')}</p>
        </div>

        <a
          href="https://aurasea.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full border border-aurasea-ink/15 bg-white/60 px-4 py-2 transition hover:border-aurasea-deep/40 hover:bg-white"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-aurasea-deep">
            <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 text-menudesk-cream">
              <path
                d="M4 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm font-medium text-aurasea-ink">
            {t('builtBy')}
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-3.5 w-3.5 text-aurasea-ink/40 transition group-hover:text-aurasea-ink/70"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7v9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-aurasea-ink/8 pt-6 text-center text-xs text-aurasea-ink/50">
        {/* `rights` carries the whole notice, year included — prefixing another
            one here printed the copyright twice. */}
        {t('rights')}
      </div>
    </footer>
  );
}
