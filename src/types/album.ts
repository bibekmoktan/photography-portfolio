import type { SanityImageWithAlt } from './sanity-image';

export type Album = {
  _id: string;
  slug: string;
  title: string;
  description?: string;
  coverImage?: SanityImageWithAlt;
  images: SanityImageWithAlt[];
};
