import type { HomePage } from '@/types/home-page';
import { sanityFetch } from '@/lib/sanity/client';
import { IMAGE_PROJECTION } from '@/lib/sanity/fragments';

const EMPTY_HOME_PAGE: HomePage = {};

export async function getHomePage(): Promise<HomePage> {
  const homePage = await sanityFetch<HomePage | null>(
    `*[_type == "homePage" && _id == "homePage"][0]{
      heroHeading,
      heroIntro,
      yearsExperience,
      heroCtaLabel,
      "bannerImage": bannerImage${IMAGE_PROJECTION},
      "secondaryImage": secondaryImage${IMAGE_PROJECTION}
    }`,
  );
  return homePage ?? EMPTY_HOME_PAGE;
}
