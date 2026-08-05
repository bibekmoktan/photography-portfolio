import { Navbar, Footer } from '@/components/layout';
import { Hero, About, MyServices, PortfolioShowcase } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MyServices />
        <PortfolioShowcase />
      </main>
      <Footer />
    </>
  );
}
