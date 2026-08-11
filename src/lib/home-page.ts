import type { HomePage } from '@/types/home-page';
import { sanityFetch } from '@/lib/sanity/client';
import { IMAGE_PROJECTION } from '@/lib/sanity/fragments';

const EMPTY_HOME_PAGE: HomePage = {
  bannerImages: [],
  secondaryImages: [],
};

export async function getHomePage(): Promise<HomePage> {
  const homePage = await sanityFetch<HomePage | null>(
    `*[_type == "homePage" && _id == "homePage"][0]{
      heroHeading,
      heroIntro,
      yearsExperience,
      heroCtaLabel,
      "bannerImages": bannerImages[]${IMAGE_PROJECTION},
      "secondaryImages": secondaryImages[]${IMAGE_PROJECTION}
    }`,
  );
  if (!homePage) return EMPTY_HOME_PAGE;
  return {
    ...homePage,
    bannerImages: homePage.bannerImages ?? [],
    secondaryImages: homePage.secondaryImages ?? [],
  };
}
