import type { PortableTextBlock } from '@portabletext/react';
import type { SanityImage } from './sanity-image';

export type TimelineItem = {
  title?: string;
  year?: string;
  description?: string;
};

export type Stat = {
  value?: string;
  label?: string;
};

export type AboutPage = {
  heroSection?: {
    heading?: string;
    subheading?: string;
    image?: SanityImage;
  };
  bioSection?: {
    heading?: string;
    bio?: PortableTextBlock[];
    image?: SanityImage;
  };
  journeySection?: {
    heading?: string;
    description?: string;
    items: TimelineItem[];
  };
  awardsSection?: {
    heading?: string;
    description?: string;
    items: TimelineItem[];
  };
  statsSection?: {
    heading?: string;
    description?: string;
    stats: Stat[];
  };
};
