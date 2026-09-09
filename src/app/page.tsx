import type { Metadata } from 'next';
import {
  Hero,
  About,
  FeatureSection,
  FeaturedWork,
  MyServices,
  AlbumsGrid,
  TravelStories,
} from '@/components/sections';
import { getHomePage } from '@/lib/home-page';
import { getFeaturedPortfolioItems } from '@/lib/portfolio-items';

export const metadata: Metadata = {
  title: {
    absolute: 'Prabin Kulung Rai | Editorial & Documentary Photographer',
  },
  description:
    'Prabin Kulung Rai is an editorial and documentary photographer capturing news, events, travel, and cultural stories. Explore the portfolio and get in touch for your next project.',
};

export default async function Home() {
  const [homePage, featuredItems] = await Promise.all([getHomePage(), getFeaturedPortfolioItems()]);

  return (
    <>
      <Hero homePage={homePage} />
      <About homePage={homePage} />
      <FeatureSection homePage={homePage} />
      <FeaturedWork items={featuredItems} />
      <MyServices />
      <AlbumsGrid limit={6} />
      <TravelStories />
    </>
  );
}
