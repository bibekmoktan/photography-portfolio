import type { PortableTextBlock } from '@portabletext/react';
import type { SanityImageWithAlt } from './sanity-image';

export type TimelineItem = {
  title?: string;
  meta?: string;
  description?: string;
};

export type Stat = {
  value?: string;
  label?: string;
};

export type AboutPage = {
  bioShort?: string;
  bioLong?: PortableTextBlock[];
  portraitImage?: SanityImageWithAlt;
  secondaryImage?: SanityImageWithAlt;
  journeyHeading?: string;
  journeyDescription?: string;
  journeyItems: TimelineItem[];
  awardsHeading?: string;
  awardsDescription?: string;
  awardItems: TimelineItem[];
  statsHeading?: string;
  statsDescription?: string;
  stats: Stat[];
};
