import type { MetadataRoute } from 'next';
import { env } from '@/lib/env';
import { getAlbums } from '@/lib/albums';

const STATIC_ROUTES = ['', '/about', '/portfolio', '/services', '/projects', '/contact'];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.NEXT_PUBLIC_SITE_URL;
  const albums = await getAlbums();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const albumEntries: MetadataRoute.Sitemap = albums.map((album) => ({
    url: `${baseUrl}/projects/albums/${album.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...albumEntries];
}
