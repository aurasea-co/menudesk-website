import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="px-6 pb-20 pt-12 md:px-10 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-menudesk-ember/30 bg-menudesk-ember/10 px-4 py-1.5 text-sm font-medium text-menudesk-ember">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-menudesk-ember opacity-60"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-menudesk-ember"></span>
          </span>
          {t('badge')}
        </span>

        <h1 className="mt-8 text-4xl font-semibold leading-tight tracking-tight text-aurasea-ink md:text-6xl md:leading-[1.05]">
          {t('title')}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-aurasea-ink/70 md:text-xl">
          {t('subtitle')}
        </p>
      </div>

      {/* Feature cards */}
      <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:mt-24 md:grid-cols-3 md:gap-6">
        <FeatureCard
          icon={
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path
                d="M3 3v18h18M7 14l3-3 4 4 5-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title={t('feature1Title')}
          desc={t('feature1Desc')}
        />
        <FeatureCard
          icon={
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path
                d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title={t('feature2Title')}
          desc={t('feature2Desc')}
        />
        <FeatureCard
          icon={
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <path
                d="M3 17l6-6 4 4 8-8M21 7v6h-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title={t('feature3Title')}
          desc={t('feature3Desc')}
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-aurasea-ink/8 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition hover:shadow-md md:p-7">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-menudesk-cream text-menudesk-ember">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-aurasea-ink md:text-xl">
        {title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-aurasea-ink/65">
        {desc}
      </p>
    </div>
  );
}
