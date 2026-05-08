'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  // Toggle between en and th
  const otherLocale = locale === 'en' ? 'th' : 'en';
  const pathWithoutLocale = pathname.replace(/^\/(en|th)/, '') || '/';
  const otherLocalePath =
    otherLocale === 'en' ? pathWithoutLocale : `/${otherLocale}${pathWithoutLocale}`;

  return (
    <header className="px-6 py-5 md:px-10 md:py-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-aurasea-deep">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5 text-menudesk-cream"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 18c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.5"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight text-aurasea-ink">
            MenuDesk
          </span>
        </Link>

        <Link
          href={otherLocalePath}
          className="rounded-full border border-aurasea-ink/15 px-4 py-1.5 text-sm font-medium text-aurasea-ink transition hover:border-aurasea-ink/30 hover:bg-white"
        >
          {t('language')}
        </Link>
      </div>
    </header>
  );
}
