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
  {
    slug: 'ladakh-himalayas',
    title: 'Ladakh: High-Altitude Silence',
    location: 'Ladakh, India',
    summary:
      'Three weeks across the high-altitude desert of Ladakh, chasing monasteries, mountain passes, and the particular quiet of thin air.',
    narrative:
      "Ladakh doesn't announce itself gently — the road in climbs past 5,000 meters before it lets you catch your breath. What followed was a slow unwinding through monasteries clinging to cliffsides and villages where the silence felt almost physical, broken only by prayer wheels and wind.",
    categories: ['Mountains', 'Cultural'],
    highlights: [
      {
        slug: 'thiksey-monastery',
        title: 'Thiksey Monastery',
        caption: 'Dawn prayers inside a centuries-old monastery perched above the Indus valley.',
        categories: ['Cultural'],
        images: [
          { alt: 'Monks in morning prayer', category: 'Cultural' },
          { alt: 'Monastery courtyard at sunrise', category: 'Cultural' },
        ],
      },
      {
        slug: 'khardung-la-pass',
        title: 'Khardung La Pass',
        caption:
          'One of the highest motorable passes in the world, wrapped in cloud and prayer flags.',
        categories: ['Mountains'],
        images: [
          { alt: 'Prayer flags atop the pass', category: 'Mountains' },
          { alt: 'Switchback road through the mountains', category: 'Mountains' },
        ],
      },
    ],
  },
  {
    slug: 'patagonia-wilderness',
    title: 'Patagonia: Wind & Wilderness',
    location: 'Argentina & Chile',
    summary:
      'A month trekking between glaciers and grasslands at the edge of the world, framed by near-constant wind.',
    narrative:
      'Patagonia tests patience before it rewards you with anything — hours of waiting for a peak to clear, days of wind strong enough to knock a tripod flat. But the landscape has a scale that photographs can only gesture toward, and the wildlife moves through it like it owns the place.',
    categories: ['Mountains', 'Wildlife'],
    highlights: [
      {
        slug: 'torres-del-paine',
        title: 'Torres del Paine',
        caption: 'A three-day wait for the granite towers to finally clear at sunrise.',
        categories: ['Mountains'],
        images: [
          { alt: 'Granite towers at sunrise', category: 'Mountains' },
          { alt: 'Turquoise glacial lake below the peaks', category: 'Mountains' },
        ],
      },
      {
        slug: 'puma-tracking',
        title: 'Puma Tracking',
        caption:
          'Two dawns spent with a local tracker before a puma finally crossed the ridgeline.',
        categories: ['Wildlife'],
        images: [
          { alt: 'Puma on a rocky ridge', category: 'Wildlife' },
          { alt: 'Guanaco herd grazing at dawn', category: 'Wildlife' },
        ],
      },
    ],
  },
  {
    slug: 'morocco-deserts-medinas',
    title: 'Morocco: Deserts & Medinas',
    location: 'Morocco',
    summary:
      "From the maze of Marrakech's medina to the dunes of the Sahara, a study in color, light, and daily ritual.",
    narrative:
      'Morocco moves between extremes fast — the tight, shaded alleys of the medina give way within hours to the open dunes of the Sahara. Every stop had its own rhythm: the calls of vendors in the souk, the total silence of the desert after dark.',
    categories: ['Cultural', 'Portraits'],
    highlights: [
      {
        slug: 'marrakech-souks',
        title: 'Marrakech Souks',
        caption:
          'A week spent photographing vendors, dye pits, and the everyday choreography of the medina.',
        categories: ['Cultural'],
        images: [
          { alt: 'Spice vendor stall in the souk', category: 'Cultural' },
          { alt: 'Dyed wool hanging to dry', category: 'Cultural' },
        ],
      },
      {
        slug: 'sahara-portraits',
        title: 'Sahara Portraits',
        caption: 'A night camped among the dunes with a Berber family, photographing by firelight.',
        categories: ['Portraits'],
        images: [
          { alt: 'Berber guide portrait at dusk', category: 'Portraits' },
          { alt: 'Camel caravan crossing the dunes', category: 'Portraits' },
        ],
      },
    ],
  },
  {
    slug: 'iceland-fire-ice',
    title: 'Iceland: Fire & Ice',
    location: 'Iceland',
    summary:
      'Two weeks circling the island chasing glaciers, waterfalls, and the last of the autumn light.',
    narrative:
      'Iceland compresses an absurd amount of landscape into a small ring road — black sand beaches an hour from ice caves, waterfalls around every other bend. The light changes so fast that half the work is just being ready.',
    categories: ['Mountains', 'Wildlife'],
    highlights: [
      {
        slug: 'vatnajokull-glacier',
        title: 'Vatnajökull Glacier',
        caption: "An afternoon inside a blue ice cave carved into Europe's largest glacier.",
        categories: ['Mountains'],
        images: [
          { alt: 'Blue ice cave interior', category: 'Mountains' },
          { alt: 'Glacier lagoon with floating icebergs', category: 'Mountains' },
        ],
      },
      {
        slug: 'westfjords-puffins',
        title: 'Westfjords Puffins',
        caption: "Cliffside colonies of puffins along Iceland's remote western coast.",
        categories: ['Wildlife'],
        images: [
          { alt: 'Puffin on a grassy cliff edge', category: 'Wildlife' },
          { alt: 'Colony of seabirds along the fjord', category: 'Wildlife' },
        ],
      },
    ],
  },
  {
    slug: 'vietnam-rivers-rice-fields',
    title: 'Vietnam: Rivers & Rice Fields',
    location: 'Vietnam',
    summary:
      "From the floating markets of the Mekong Delta to the terraced fields of Sapa, a journey along Vietnam's waterways.",
    narrative:
      "Most of this trip happened on or near water — the Mekong's floating markets at dawn, junk boats threading through the limestone karsts of Halong Bay, irrigation channels feeding the terraces of Sapa. Vietnam's daily life runs on rivers, and the photographs followed.",
    categories: ['Cultural', 'Portraits'],
    highlights: [
      {
        slug: 'mekong-floating-markets',
        title: 'Mekong Floating Markets',
        caption: 'Sunrise among boats trading fruit and vegetables on the Mekong Delta.',
        categories: ['Cultural'],
        images: [
          { alt: 'Boats loaded with produce at dawn', category: 'Cultural' },
          { alt: 'Vendor selling fruit from her boat', category: 'Cultural' },
        ],
      },
      {
        slug: 'sapa-terraces',
        title: 'Sapa Rice Terraces',
        caption: 'A homestay with a Hmong family in the terraced hills above Sapa.',
        categories: ['Portraits'],
        images: [
          { alt: 'Hmong woman in traditional dress', category: 'Portraits' },
          { alt: 'Rice terraces cut into the hillside', category: 'Portraits' },
        ],
      },
    ],
  },
  {
    slug: 'norway-fjords-northern-lights',
    title: 'Norway: Fjords & Northern Lights',
    location: 'Norway',
    summary:
      'A winter journey along the Arctic coast, chasing fjords by day and the aurora by night.',
    narrative:
      'Winter in Arctic Norway means a few hours of blue daylight and long nights spent outdoors waiting for the sky to move. The fjords themselves felt almost staged — impossibly steep, impossibly still — and then the aurora would show up and undo any sense of composure.',
    categories: ['Mountains', 'Wildlife'],
    highlights: [
      {
        slug: 'lofoten-fjords',
        title: 'Lofoten Fjords',
        caption: 'Fishing villages tucked beneath sheer peaks along the Lofoten archipelago.',
        categories: ['Mountains'],
        images: [
          { alt: 'Red fishing cabins beneath a fjord', category: 'Mountains' },
          { alt: 'Snow-covered peaks reflected in still water', category: 'Mountains' },
        ],
      },
      {
        slug: 'aurora-nights',
        title: 'Aurora Nights',
        caption: 'Four nights waiting in the cold before the aurora finally broke through.',
        categories: ['Wildlife'],
        images: [
          { alt: 'Aurora borealis over a fjord', category: 'Wildlife' },
          { alt: 'Reindeer silhouetted against the night sky', category: 'Wildlife' },
        ],
      },
    ],
  },
  {
    slug: 'rajasthan-colors',
    title: 'India: Colors of Rajasthan',
    location: 'Rajasthan, India',
    summary:
      "A month across Rajasthan's desert cities, following color, textiles, and festival life.",
    narrative:
      'Rajasthan rewards showing up during festival season — Holi in Jaipur, camel fairs in Pushkar, the blue-washed lanes of Jodhpur at golden hour. Every city seemed to have its own signature color, and the people wore it as proudly as the buildings.',
    categories: ['Cultural', 'Portraits'],
    highlights: [
      {
        slug: 'jaipur-holi',
        title: 'Jaipur Holi Festival',
        caption: 'A single chaotic, color-soaked afternoon during the festival of Holi.',
        categories: ['Cultural'],
        images: [
          { alt: 'Crowd throwing colored powder', category: 'Cultural' },
          { alt: 'Close-up portrait covered in Holi color', category: 'Cultural' },
        ],
      },
      {
        slug: 'pushkar-camel-fair',
        title: 'Pushkar Camel Fair',
        caption: "Traders and their camels gathering for the annual fair on the desert's edge.",
        categories: ['Portraits'],
        images: [
          { alt: 'Camel trader portrait at the fair', category: 'Portraits' },
          { alt: 'Camels lined up at dusk', category: 'Portraits' },
        ],
      },
    ],
  },
  {
    slug: 'peru-andes-ancient-trails',
    title: 'Peru: Andes & Ancient Trails',
    location: 'Peru',
    summary:
      'Four weeks on foot through the Andes, ending at Machu Picchu after days on the Inca Trail.',
    narrative:
      'The Inca Trail earns its reputation — four days of switchbacks, cloud forest, and Incan ruins scattered along the route, before Machu Picchu appears through the mist on the final morning. The trek was as much about the villages and terraces passed along the way as the destination itself.',
    categories: ['Mountains', 'Cultural'],
    highlights: [
      {
        slug: 'inca-trail',
        title: 'The Inca Trail',
        caption: 'Four days of high passes and cloud forest leading up to Machu Picchu.',
        categories: ['Mountains'],
        images: [
          { alt: 'Trekkers on a stone Inca trail', category: 'Mountains' },
          { alt: 'Cloud forest along the trail', category: 'Mountains' },
        ],
      },
      {
        slug: 'sacred-valley-villages',
        title: 'Sacred Valley Villages',
        caption: 'Market day in a highland village along the Sacred Valley.',
        categories: ['Cultural'],
        images: [
          { alt: 'Quechua woman weaving textiles', category: 'Cultural' },
          { alt: 'Terraced fields in the Sacred Valley', category: 'Cultural' },
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
