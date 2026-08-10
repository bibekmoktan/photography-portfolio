import type { Category } from './category';
import type { SanityImageWithAlt } from './sanity-image';

export type PortfolioItem = {
  _id: string;
  title?: string;
  category: Category;
  image?: SanityImageWithAlt;
  featured: boolean;
  order?: number;
};
