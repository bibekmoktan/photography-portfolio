import type { Album } from '@/types/album';

export const ALBUM_PHOTO_COUNT = 20;

/**
 * Hardcoded for now, same async shape as stories.ts so this can later be
 * swapped for a CMS-backed implementation without touching call sites.
 *
 * Unlike a Story, an Album has no narrative or highlights — it's just a
 * named collection of images (a photography genre like "Wedding" or a
 * single place like "Everest Base Camp").
 */
const ALBUMS: Album[] = [
  {
    slug: 'wedding',
    title: 'Wedding',
    description:
      'Love stories told frame by frame — ceremonies, first looks, and the quiet moments in between.',
    images: [
      { alt: 'Bride and groom during the first look' },
      { alt: 'Exchanging rings during the ceremony' },
      { alt: 'Golden hour couple portrait' },
      { alt: 'Reception dance floor' },
      { alt: 'Wedding party group photo' },
    ],
  },
  {
    slug: 'wildlife',
    title: 'Wildlife',
    description: 'Patient, long-lens work from the field, chasing light and movement in the wild.',
    images: [
      { alt: 'Bengal tiger in tall grass' },
      { alt: 'Elephant herd crossing a river' },
      { alt: 'Snow leopard on a rocky ridge' },
      { alt: 'Flock of migratory birds at dawn' },
    ],
  },
  {
    slug: 'everest-base-camp',
    title: 'Mountains',
    description: 'A trek to the roof of the world, told through prayer flags, ice, and altitude.',
    images: [
      { alt: 'Prayer flags fluttering at base camp' },
      { alt: 'Climbers ascending the Khumbu icefall' },
      { alt: 'Everest summit at sunrise' },
      { alt: 'Sherpa guide portrait' },
    ],
  },
  {
    slug: 'bangladesh',
    title: 'Bangladesh',
    description: 'Rivers, rickshaws, and daily life across the deltas and streets of Bangladesh.',
    images: [
      { alt: 'Fishermen on the Padma River' },
      { alt: 'Rickshaws in old Dhaka' },
      { alt: 'Tea gardens of Sylhet' },
      { alt: 'Sundarbans mangrove forest' },
    ],
  },
  {
    slug: 'ladakh',
    title: 'Ladakh',
    description:
      'High-altitude deserts, monasteries, and switchback roads through the Indian Himalayas.',
    images: [
      { alt: 'Pangong Lake at dusk' },
      { alt: 'Monks at Thiksey Monastery' },
      { alt: 'Winding road through the Himalayas' },
      { alt: 'Snow-capped peaks over Leh' },
    ],
  },
];

export async function getAlbums(): Promise<Album[]> {
  return ALBUMS;
}

export async function getAlbumBySlug(slug: string): Promise<Album | undefined> {
  return ALBUMS.find((album) => album.slug === slug);
}
