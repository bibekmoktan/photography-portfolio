import type { Metadata } from 'next';
import { PortfolioHero, PortfolioGallery, AlbumsGrid, TravelStories } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGallery />
      <AlbumsGrid title="Explore the Collection" showViewAllButton={false} />
      <TravelStories />
    </>
  );
}
