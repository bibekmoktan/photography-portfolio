import type { SanityImageWithAlt } from './sanity-image';

export type Service = {
  _id: string;
  title: string;
  shortDescription?: string;
  longDescription?: string;
  image?: SanityImageWithAlt;
  order?: number;
};
