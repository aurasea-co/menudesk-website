import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { Delivery } from '@/components/Delivery';
import { HowItWorks } from '@/components/HowItWorks';
import { Honesty } from '@/components/Honesty';
import { NotInventory } from '@/components/NotInventory';
import { Compatibility } from '@/components/Compatibility';
import { Pricing } from '@/components/Pricing';
import { Founder } from '@/components/Founder';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

// Section order: open the wound, show the arithmetic nobody has run, show how
// little work it takes to see it for your own menu, state the accuracy limit,
// then price. Honesty stays ahead of pricing on purpose.
//
// The money-back guarantee used to sit directly after Pricing, answering the
// "is this wasted?" objection. It was withdrawn on 4 Sep 2026: it promised a
// full refund if we did not find ฿1,000 of fixable leak in the first month,
// and nothing implemented it — no eligibility rule, no refund path, no record
// of what "fixable leak" counted as. It was the only refund promise across the
// three Aurasea sites. Verified before removing that it had cost nobody
// anything: the single payments row is ฿99/฿199 tier2, claimed 19 Aug 2026 and
// expired unconfirmed, so no money ever changed hands under it.
//
// The free scan already answers that objection honestly — it is a complete
// analysis, and it costs nothing.

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen aurasea-glow">
      <Header />
      <Hero />
      <Problem />
      <Delivery />
      <HowItWorks />
      <Honesty />
      <NotInventory />
      <Compatibility />
      <Pricing />
      <Founder />
      <FinalCta />
      <Footer />
    </main>
  );
}
