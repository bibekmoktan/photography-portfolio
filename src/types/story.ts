import type { PortableTextBlock } from '@portabletext/react';
import type { Category } from './category';
import type { SanityImageWithAlt } from './sanity-image';

export type StoryHighlight = {
  slug: string;
  title: string;
  caption?: string;
  categories: Category[];
  images: SanityImageWithAlt[];
};

export type Story = {
  _id: string;
  slug: string;
  title: string;
  location?: string;
  summary?: string;
  narrative?: PortableTextBlock[];
  coverImage?: SanityImageWithAlt;
  categories: Category[];
  highlights: StoryHighlight[];
};
