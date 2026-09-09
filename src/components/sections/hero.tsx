import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { ImageSlider } from '@/components/ui/image-slider';
import { Reveal } from '@/components/ui/reveal';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import type { HomePage } from '@/types/home-page';

const DEFAULT_HEADING = 'Photography by Prabin Kulung Rai';
const DEFAULT_SUBHEADING =
  "Welcome to Prabin Kulung Rai's world of photography, where moments are not just captured but transformed into timeless memories. With a keen eye for detail and a passion for storytelling, Prabin has been crafting visual narratives for years. The lens unveils the beauty in the ordinary and transforms the extraordinary into sheer artistry.";
const DEFAULT_CTA_LABEL = "Explore Prabin's Portfolio";

/** Verified-reachable Unsplash photos shown until real hero images are set in Sanity. */
const HERO_FALLBACK_IDS = [
  '1519085360753-af0119f7cbe7',
  '1441716844725-09cedc13a4e7',
  '1506905925346-21bda4d32df4',
  '1447752875215-b2761acb3c5d',
  '1472214103451-9374bd1c798e',
  '1426604966848-d7adac402bff',
  '1501594907352-04cda38ebc29',
  '1483728642387-6c3bdd6c93e5',
];
const HERO_FALLBACK_IMAGES = HERO_FALLBACK_IDS.map(
  (id) => `https://images.unsplash.com/photo-${id}?w=1920&h=1080&fit=crop&auto=format&q=80`,
);

export function Hero({ homePage }: { homePage: HomePage }) {
  const hero = homePage.heroSection;

  return (
    <section
      id="home"
      className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-gray-900"
    >
      <div className="absolute inset-0">
        <ImageSlider
          images={hero?.images ?? []}
          width={1920}
          height={1080}
          sizes="100vw"
          fallbackAlt="Prabin Kulung Rai photography"
          fallbackImageUrls={HERO_FALLBACK_IMAGES}
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

      <Container className="relative flex h-full flex-col justify-end pb-16 md:pb-20">
        <span className="mb-4 text-xs font-medium tracking-[0.3em] text-gray-300 uppercase">
          Photojournalist &amp; Documentary Photographer
        </span>

        <TypewriterHeading
          as="h1"
          className="max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl"
        >
          {hero?.heading || DEFAULT_HEADING}
        </TypewriterHeading>

        <Reveal delay={0.2} className="mt-6 max-w-xl">
          <p className="text-sm leading-relaxed text-gray-200 md:text-base">
            {hero?.subheading || DEFAULT_SUBHEADING}
          </p>
        </Reveal>

        <Reveal delay={0.35} className="mt-10 border-t border-white/20 pt-6">
          <Link
            href="/portfolio"
            className="bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 hover:shadow-lg active:translate-y-0 active:scale-95"
          >
            {hero?.ctaLabel || DEFAULT_CTA_LABEL}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
