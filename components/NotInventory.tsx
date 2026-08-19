import { useTranslations } from 'next-intl';

// Positioning against the category owners get offered instead. Stock systems
// track things; this tracks money. The third row is the honest one: stock
// systems get abandoned in week two because they ask the owner to do work.

export function NotInventory() {
  const t = useTranslations('notInventory');
  const rows = ['row1', 'row2', 'row3'] as const;

  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-semibold tracking-tight text-aurasea-ink md:text-4xl">
          {t('title')}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-aurasea-ink/70">
          {t('body')}
        </p>

        <div className="mt-9 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-aurasea-ink/12">
                <th className="py-3 pr-4 text-sm font-medium text-aurasea-ink/50" />
                <th className="py-3 pr-4 text-sm font-semibold text-aurasea-ink/60">
                  {t('colInventory')}
                </th>
                <th className="py-3 text-sm font-semibold text-aurasea-deep">
                  {t('colMenudesk')}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row} className="border-b border-aurasea-ink/8 align-top">
                  <th className="py-4 pr-4 text-sm font-medium text-aurasea-ink/50">
                    {t(`${row}.label`)}
                  </th>
                  <td className="py-4 pr-4 text-base leading-relaxed text-aurasea-ink/60">
                    {t(`${row}.inventory`)}
                  </td>
                  <td className="py-4 text-base font-medium leading-relaxed text-aurasea-ink">
                    {t(`${row}.menudesk`)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
