import type { Metadata } from 'next';
import { AboutHero, Journey, Awards, Stats } from '@/components/sections';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Journey />
      <Awards />
      <Stats />
    </>
  );
}
