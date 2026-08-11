import type { AboutPage } from '@/types/about-page';
import { sanityFetch } from '@/lib/sanity/client';
import { IMAGE_PROJECTION } from '@/lib/sanity/fragments';

const EMPTY_ABOUT_PAGE: AboutPage = {
  journeyItems: [],
  awardItems: [],
  stats: [],
};

export async function getAboutPage(): Promise<AboutPage> {
  const aboutPage = await sanityFetch<AboutPage | null>(
    `*[_type == "aboutPage" && _id == "aboutPage"][0]{
      bioShort,
      bioLong,
      "portraitImage": portraitImage${IMAGE_PROJECTION},
      "secondaryImage": secondaryImage${IMAGE_PROJECTION},
      journeyHeading,
      journeyDescription,
      "journeyItems": journeyItems[]{ title, meta, description },
      awardsHeading,
      awardsDescription,
      "awardItems": awardItems[]{ title, meta, description },
      statsHeading,
      statsDescription,
      "stats": stats[]{ value, label }
    }`,
  );
  if (!aboutPage) return EMPTY_ABOUT_PAGE;
  return {
    ...aboutPage,
    journeyItems: aboutPage.journeyItems ?? [],
    awardItems: aboutPage.awardItems ?? [],
    stats: aboutPage.stats ?? [],
  };
}
