import { Hero, About, MyServices, AlbumsGrid, TravelStories } from '@/components/sections';
import { getHomePage } from '@/lib/home-page';
import { getAboutPage } from '@/lib/about-page';
import { getSiteSettings } from '@/lib/site-settings';

export default async function Home() {
  const [homePage, aboutPage, siteSettings] = await Promise.all([
    getHomePage(),
    getAboutPage(),
    getSiteSettings(),
  ]);

  return (
    <>
      <Hero homePage={homePage} />
      <About aboutPage={aboutPage} siteSettings={siteSettings} />
      <MyServices />
      <AlbumsGrid limit={6} />
      <TravelStories />
    </>
  );
}
