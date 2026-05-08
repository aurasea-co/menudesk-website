import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Integrations } from '@/components/Integrations';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen aurasea-glow">
      <Header />
      <Hero />
      <Integrations />
      <Footer />
    </main>
  );
}
