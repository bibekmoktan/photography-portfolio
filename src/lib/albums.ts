import type { Album } from '@/types/album';
import { sanityFetch } from '@/lib/sanity/client';
import { IMAGE_PROJECTION } from '@/lib/sanity/fragments';

const ALBUM_PROJECTION = `{
  _id,
  "slug": slug.current,
  title,
  description,
  "coverImage": coverImage${IMAGE_PROJECTION},
  "images": images[]${IMAGE_PROJECTION}
}`;

export async function getAlbums(): Promise<Album[]> {
  return sanityFetch<Album[]>(`*[_type == "album"] | order(title asc) ${ALBUM_PROJECTION}`);
}

export async function getAlbumBySlug(slug: string): Promise<Album | undefined> {
  const album = await sanityFetch<Album | null>(
    `*[_type == "album" && slug.current == $slug][0] ${ALBUM_PROJECTION}`,
    { slug },
  );
  return album ?? undefined;
}
