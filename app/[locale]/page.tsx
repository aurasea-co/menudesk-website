import { setRequestLocale } from 'next-intl/server';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { HowItWorks } from '@/components/HowItWorks';
import { Honesty } from '@/components/Honesty';
import { NotInventory } from '@/components/NotInventory';
import { Compatibility } from '@/components/Compatibility';
import { Pricing } from '@/components/Pricing';
import { Founder } from '@/components/Founder';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

// Section order is set by Bible Addendum v2.1 §19: open the wound, show how
// little work it takes to see it, state the accuracy limit BEFORE asking for
// money, then price. Honesty sits ahead of pricing on purpose.

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
