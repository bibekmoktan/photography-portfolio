import type { PageHero, PageHeroName } from '@/types/page-hero';
import { sanityFetch } from '@/lib/sanity/client';

export async function getPageHero(page: PageHeroName): Promise<PageHero> {
  const hero = await sanityFetch<PageHero | null>(
    `*[_type == "pageHero" && _id == $id][0]{ page, heading, body }`,
    { id: `pageHero-${page}` },
  );
  return hero ?? { page };
}
