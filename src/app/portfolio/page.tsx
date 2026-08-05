import type { Metadata } from 'next';
import { PortfolioHero, PortfolioGallery, Gallery } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGallery />
      <Gallery />
    </>
  );
}
