import type { SanityImage } from './sanity-image';

export type HomePageFeature = {
  title?: string;
  description?: string;
  image?: SanityImage;
};

export type HomePage = {
  heroSection?: {
    heading?: string;
    subheading?: string;
    ctaLabel?: string;
    images: SanityImage[];
  };
  aboutSection?: {
    heading?: string;
    bio?: string;
    image?: SanityImage;
  };
  featureSection?: {
    heading?: string;
    description?: string;
    features: HomePageFeature[];
  };
};
