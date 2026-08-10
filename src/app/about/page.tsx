import type { Metadata } from 'next';
import { AboutHero, Journey, Awards, Stats } from '@/components/sections';
import { getAboutPage } from '@/lib/about-page';

export const metadata: Metadata = {
  title: 'About',
};

export default async function AboutPage() {
  const aboutPage = await getAboutPage();

  return (
    <>
      <AboutHero aboutPage={aboutPage} />
      <Journey aboutPage={aboutPage} />
      <Awards aboutPage={aboutPage} />
      <Stats aboutPage={aboutPage} />
    </>
  );
}
