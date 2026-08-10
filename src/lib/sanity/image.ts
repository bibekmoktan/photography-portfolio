import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageWithAlt } from '@/types/sanity-image';
import { env } from '@/lib/env';

const builder = createImageUrlBuilder({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
});

export function urlForImage(source: SanityImageWithAlt) {
  return builder.image(source);
}
