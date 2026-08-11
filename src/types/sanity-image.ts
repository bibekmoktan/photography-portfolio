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
