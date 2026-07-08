import { Hero } from '@/components/sections/hero';
import { Philosophy } from '@/components/sections/philosophy';
import { Products } from '@/components/sections/products';
import { Team } from '@/components/sections/team';
import { WhyVantis } from '@/components/sections/why-vantis';
import { Investors } from '@/components/sections/investors';
import { Navbar } from '@/components/navigation/navbar';
import { Footer } from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Products />
      <Team />
      <WhyVantis />
      <Investors />
      <Footer />
    </main>
  );
}
