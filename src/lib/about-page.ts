import type { AboutPage } from '@/types/about-page';
import { sanityFetch } from '@/lib/sanity/client';

const EMPTY_ABOUT_PAGE: AboutPage = {
  journeySection: { items: [] },
  awardsSection: { items: [] },
  statsSection: { stats: [] },
};

export async function getAboutPage(): Promise<AboutPage> {
  const aboutPage = await sanityFetch<AboutPage | null>(
    `*[_type == "aboutPage" && _id == "aboutPage"][0]{
      heroSection{heading, subheading, image{asset, alt}},
      bioSection{heading, bio, image{asset, alt}},
      journeySection{heading, description, items[]{title, year, description}},
      awardsSection{heading, description, items[]{title, year, description}},
      statsSection{heading, description, stats[]{value, label}}
    }`,
  );
  if (!aboutPage) return EMPTY_ABOUT_PAGE;
  return {
    ...aboutPage,
    journeySection: { ...aboutPage.journeySection, items: aboutPage.journeySection?.items ?? [] },
    awardsSection: { ...aboutPage.awardsSection, items: aboutPage.awardsSection?.items ?? [] },
    statsSection: { ...aboutPage.statsSection, stats: aboutPage.statsSection?.stats ?? [] },
  };
}
