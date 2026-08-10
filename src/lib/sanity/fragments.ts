/** Projects an imageWithAlt field plus its real aspect ratio, for masonry layouts. */
export const IMAGE_PROJECTION = `{ ..., "aspectRatio": asset->metadata.dimensions.aspectRatio }`;
