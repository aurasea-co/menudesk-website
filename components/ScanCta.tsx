import { SCAN_ENTRY_URL, scanUrlIsExternal } from '@/lib/scan-url';

// The site's only call to action. §19 is explicit that there is exactly one —
// never "request a demo", never "contact sales". Keeping it in a single
// component is how that rule survives the next person who edits a section.

type Size = 'lg' | 'md';

export function ScanCta({
  label,
  size = 'lg',
  className = '',
}: {
  label: string;
  size?: Size;
  className?: string;
}) {
  const sizing =
    size === 'lg'
      ? 'px-8 py-4 text-lg'
      : 'px-5 py-2.5 text-sm';

  // whitespace-nowrap: the English label is longer than the Thai one and wrapped
  // to two lines in the header on a 375px screen.
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-menudesk-ember font-semibold text-white shadow-lg shadow-menudesk-ember/25 transition hover:brightness-105 active:scale-[0.99]';

  return (
    <a
      href={SCAN_ENTRY_URL}
      {...(scanUrlIsExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className={`${base} ${sizing} ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0">
        <path
          d="M4 8.5A1.5 1.5 0 0 1 5.5 7h1.8l1.2-2h6.9l1.2 2h1.9A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      {label}
    </a>
  );
}
