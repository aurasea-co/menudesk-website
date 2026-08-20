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
import { Guarantee } from '@/components/Guarantee';
import { Founder } from '@/components/Founder';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

// Section order: open the wound, show the arithmetic nobody has run, show how
// little work it takes to see it for your own menu, state the accuracy limit,
// then price. Honesty stays ahead of pricing on purpose, and the guarantee sits
// directly after it — that is where the "is ฿99 wasted?" objection lands.

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
      <Guarantee />
      <Founder />
      <FinalCta />
      <Footer />
    </main>
  );
}
