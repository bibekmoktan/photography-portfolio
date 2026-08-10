import type { Story } from '@/types/story';
import { sanityFetch } from '@/lib/sanity/client';
import { IMAGE_PROJECTION } from '@/lib/sanity/fragments';

const STORY_PROJECTION = `{
  _id,
  "slug": slug.current,
  title,
  location,
  summary,
  narrative,
  categories,
  "coverImage": coverImage${IMAGE_PROJECTION},
  "highlights": highlights[]{
    "slug": slug.current,
    title,
    caption,
    categories,
    "images": images[]${IMAGE_PROJECTION}
  }
}`;

export async function getStories(): Promise<Story[]> {
  return sanityFetch<Story[]>(`*[_type == "story"] | order(title asc) ${STORY_PROJECTION}`);
}

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  const story = await sanityFetch<Story | null>(
    `*[_type == "story" && slug.current == $slug][0] ${STORY_PROJECTION}`,
    { slug },
  );
  return story ?? undefined;
}
