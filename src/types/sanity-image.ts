import type { Category } from './category';

/**
 * Shape of the `imageWithAlt` object type as returned by GROQ. Queries
 * additionally project `asset->metadata.dimensions` as `aspectRatio` so
 * masonry grids can size tiles from the image's real aspect ratio without
 * a second round-trip.
 */
export type SanityImageWithAlt = {
  asset?: { _ref: string; _type: 'reference' };
  hotspot?: { x: number; y: number; height: number; width: number };
  alt?: string;
  category?: Category[];
  aspectRatio?: number;
};

/**
 * Lean `{ asset, alt }` image used by the homePage/aboutPage section
 * objects — no hotspot, category, or aspect ratio, unlike the richer
 * `imageWithAlt` type used by album/story/service/portfolioItem.
 */
export type SanityImage = {
  asset?: { _ref: string; _type: 'reference' };
  alt?: string;
};
