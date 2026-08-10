import type { Metadata } from 'next';
import { PortfolioHero, PortfolioGallery, AlbumsGrid, TravelStories } from '@/components/sections';
import { getPageHero } from '@/lib/page-hero';
import { getPortfolioItems } from '@/lib/portfolio-items';

export const metadata: Metadata = {
  title: 'Portfolio',
};

export default async function PortfolioPage() {
  const [hero, items] = await Promise.all([getPageHero('portfolio'), getPortfolioItems()]);

  return (
    <>
      <PortfolioHero hero={hero} />
      <PortfolioGallery items={items} />
      <AlbumsGrid title="Explore the Collection" showViewAllButton={false} />
      <TravelStories />
    </>
  );
}
