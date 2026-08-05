import type { Story } from '@/types/story';

/**
 * Hardcoded for now. Shaped as async data-access functions so this file can
 * later be swapped for a CMS-backed implementation (e.g. Sanity) without
 * changing any of the calling components.
 */
const STORIES: Story[] = [
  {
    slug: 'china-taiwan',
    title: 'China & Taiwan: Mountains & Markets',
    location: 'China & Taiwan',
    summary:
      'A three-week journey across misty mountain ranges and neon night markets, tracing the contrast between ancient landscapes and modern city life.',
    narrative:
      'The trip began on the Tibetan plateau, where thin air and endless silence set the tone for everything that followed. From there the journey moved east through terraced Yunnan hillsides and finally into the neon hum of Taipei, ending three weeks and thousands of frames later with a single question: how can two places so close on a map feel like different worlds?',
    categories: ['Mountains', 'Cultural', 'Portraits'],
    highlights: [
      {
        slug: 'everest-base-camp',
        title: 'Everest Base Camp',
        caption:
          "Two days of high-altitude trekking to reach the northern base camp, where the world's tallest peak dominates a stark, wind-scoured plateau.",
        categories: ['Mountains'],
        images: [
          { alt: 'Everest north face at sunrise', category: 'Mountains' },
          { alt: 'Prayer flags at base camp', category: 'Cultural' },
          { alt: 'Trekking group crossing a glacial moraine', category: 'Mountains' },
        ],
      },
      {
        slug: 'taipei-night-markets',
        title: 'Taipei Night Markets',
        caption:
          "Steam, neon, and street food vendors after dark in Taiwan's capital — a study in candid portraits and motion.",
        categories: ['Cultural', 'Portraits'],
        images: [
          { alt: 'Vendor grilling skewers under neon signage', category: 'Cultural' },
          { alt: 'Portrait of a night market regular', category: 'Portraits' },
        ],
      },
      {
        slug: 'yunnan-village-portraits',
        title: 'Yunnan Village Portraits',
        caption:
          'A quiet week in rural Yunnan, spent photographing families and elders in the terraced hillsides.',
        categories: ['Portraits', 'Cultural'],
        images: [
          { alt: 'Elder woman in traditional dress', category: 'Portraits' },
          { alt: 'Rice terraces at dusk', category: 'Cultural' },
        ],
      },
    ],
  },
  {
    slug: 'east-africa-wildlife',
    title: 'East Africa: Wildlife & Faces',
    location: 'Kenya & Tanzania',
    summary:
      'Six weeks following the Great Migration and meeting the communities who call the Serengeti home.',
    narrative:
      'Some mornings meant sitting still in a jeep for six hours waiting for a single crossing. Others meant sitting with a Maasai family for an afternoon, cameras mostly down, just listening. Both ended up in the same body of work — an attempt to photograph a place through its wildlife and its people with equal patience.',
    categories: ['Wildlife', 'Portraits', 'Cultural'],
    highlights: [
      {
        slug: 'serengeti-migration',
        title: 'Serengeti Migration',
        caption: 'Three days camped along the riverbank, waiting for the herds to cross.',
        categories: ['Wildlife'],
        images: [
          { alt: 'Wildebeest crossing the Mara River', category: 'Wildlife' },
          { alt: 'Lioness watching the herd', category: 'Wildlife' },
        ],
      },
      {
        slug: 'maasai-portraits',
        title: 'Maasai Portraits',
        caption: 'An afternoon spent with a Maasai family, photographing daily life and dress.',
        categories: ['Portraits', 'Cultural'],
        images: [
          { alt: 'Maasai elder in traditional beadwork', category: 'Portraits' },
          { alt: 'Children herding cattle at sunset', category: 'Cultural' },
        ],
      },
    ],
  },
];

export async function getStories(): Promise<Story[]> {
  return STORIES;
}

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  return STORIES.find((story) => story.slug === slug);
}
