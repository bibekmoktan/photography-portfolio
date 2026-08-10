import type { SanityImageWithAlt } from './sanity-image';

export type HomePage = {
  heroHeading?: string;
  heroIntro?: string;
  yearsExperience?: number;
  heroCtaLabel?: string;
  bannerImage?: SanityImageWithAlt;
  secondaryImage?: SanityImageWithAlt;
};
