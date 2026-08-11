import type { HomePage } from '@/types/home-page';
import { sanityFetch } from '@/lib/sanity/client';

const EMPTY_HOME_PAGE: HomePage = {
  featureSection: { features: [] },
};

export async function getHomePage(): Promise<HomePage> {
  const homePage = await sanityFetch<HomePage | null>(
    `*[_type == "homePage" && _id == "homePage"][0]{
      heroSection{heading, subheading, ctaLabel, image{asset, alt}},
      aboutSection{heading, bio, image{asset, alt}},
      featureSection{heading, description, features[]{title, description, image{asset, alt}}}
    }`,
  );
  if (!homePage) return EMPTY_HOME_PAGE;
  return {
    ...homePage,
    featureSection: {
      ...homePage.featureSection,
      features: homePage.featureSection?.features ?? [],
    },
  };
}
