import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { ImageSlider } from '@/components/ui/image-slider';
import { Reveal } from '@/components/ui/reveal';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import type { HomePage } from '@/types/home-page';

const DEFAULT_HEADING = 'Photography by Prabin Kulung Rai';
const DEFAULT_CTA_LABEL = "Explore Prabin's Portfolio";

/** Verified-reachable Unsplash photos shown until real banner/secondary images are set in Sanity. */
const BANNER_FALLBACK_IDS = [
  '1519085360753-af0119f7cbe7',
  '1441716844725-09cedc13a4e7',
  '1506905925346-21bda4d32df4',
  '1447752875215-b2761acb3c5d',
];
const SECONDARY_FALLBACK_IDS = [
  '1472214103451-9374bd1c798e',
  '1426604966848-d7adac402bff',
  '1501594907352-04cda38ebc29',
  '1483728642387-6c3bdd6c93e5',
];
const BANNER_FALLBACK_IMAGES = BANNER_FALLBACK_IDS.map(
  (id) => `https://images.unsplash.com/photo-${id}?w=1600&h=450&fit=crop&auto=format&q=80`,
);
const SECONDARY_FALLBACK_IMAGES = SECONDARY_FALLBACK_IDS.map(
  (id) => `https://images.unsplash.com/photo-${id}?w=1200&h=675&fit=crop&auto=format&q=80`,
);

function buildIntro(heroIntro: string | undefined, yearsExperience: number | undefined) {
  if (heroIntro) return heroIntro;
  const years = yearsExperience ? `${yearsExperience} years` : 'many years';
  return `Welcome to Prabin Kulung Rai's world of photography, where moments are not just captured but transformed into timeless memories. With a keen eye for detail and a passion for storytelling, Prabin has been crafting visual narratives for ${years}. The lens unveils the beauty in the ordinary and transforms the extraordinary into sheer artistry.`;
}

export function Hero({ homePage }: { homePage: HomePage }) {
  return (
    <section id="home" className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <TypewriterHeading
            as="h1"
            className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            {homePage.heroHeading || DEFAULT_HEADING}
          </TypewriterHeading>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="group relative aspect-[32/9] w-full overflow-hidden bg-gray-200">
              <ImageSlider
                images={homePage.bannerImages}
                width={1600}
                height={450}
                sizes="100vw"
                fallbackAlt="Prabin Kulung Rai photography"
                fallbackImageUrls={BANNER_FALLBACK_IMAGES}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <Link
                href="#portfolio"
                aria-label="Explore the portfolio"
                className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white transition-transform duration-300 group-hover:scale-110 active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
            <Reveal delay={0.2} className="w-full">
              <p className="text-sm leading-relaxed text-gray-600">
                {buildIntro(homePage.heroIntro, homePage.yearsExperience)}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal
          delay={0.1}
          className="mt-16 grid gap-8 border-t border-gray-200 md:grid-cols-[3fr_1px_1fr] md:items-stretch"
        >
          <div className="group relative mt-8 aspect-[16/9] w-full overflow-hidden bg-gray-200">
            <ImageSlider
              images={homePage.secondaryImages}
              width={1200}
              height={675}
              sizes="(min-width: 768px) 60vw, 100vw"
              fallbackAlt="Prabin Kulung Rai photography"
              fallbackImageUrls={SECONDARY_FALLBACK_IMAGES}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="hidden bg-gray-200 md:block" />

          <div className="flex flex-nowrap items-center justify-center gap-3">
            <Link
              href="/portfolio"
              className="rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-lg active:translate-y-0 active:scale-95"
            >
              {homePage.heroCtaLabel || DEFAULT_CTA_LABEL}
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
