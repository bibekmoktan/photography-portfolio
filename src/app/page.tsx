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
