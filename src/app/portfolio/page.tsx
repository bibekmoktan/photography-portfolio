import type { Metadata } from 'next';
import { PortfolioHero, PortfolioGallery, AlbumsGrid, TravelStories } from '@/components/sections';
import { getPortfolioItems } from '@/lib/portfolio-items';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default async function PortfolioPage() {
  const items = await getPortfolioItems();

  return (
    <>
      {/* <PortfolioHero /> */}
      <PortfolioGallery items={items} />
      <AlbumsGrid title="Explore the Collection" showViewAllButton={false} />
      <TravelStories />
    </>
  );
}
