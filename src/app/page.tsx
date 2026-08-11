import {
  Hero,
  About,
  FeaturedWork,
  MyServices,
  AlbumsGrid,
  TravelStories,
} from '@/components/sections';
import { getHomePage } from '@/lib/home-page';
import { getAboutPage } from '@/lib/about-page';
import { getSiteSettings } from '@/lib/site-settings';
import { getFeaturedPortfolioItems } from '@/lib/portfolio-items';

export default async function Home() {
  const [homePage, aboutPage, siteSettings, featuredItems] = await Promise.all([
    getHomePage(),
    getAboutPage(),
    getSiteSettings(),
    getFeaturedPortfolioItems(),
  ]);

  return (
    <>
      <Hero homePage={homePage} />
      <About aboutPage={aboutPage} siteSettings={siteSettings} />
      <FeaturedWork items={featuredItems} />
      <MyServices />
      <AlbumsGrid limit={6} />
      <TravelStories />
    </>
  );
}
