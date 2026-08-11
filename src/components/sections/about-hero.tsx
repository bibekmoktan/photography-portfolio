import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import type { AboutPage } from '@/types/about-page';
import { urlForImage } from '@/lib/sanity/image';
import { Prose } from '@/lib/sanity/portable-text';

const DEFAULT_HEADING = 'About Prabin Kulung Rai';
const DEFAULT_SUBHEADING =
  'Get to know the visionary behind the lens, Prabin Kulung Rai, and the remarkable journey through the world of photography.';
const DEFAULT_BIO_HEADING = 'Prabin Kulung Rai';

export function AboutHero({ aboutPage }: { aboutPage: AboutPage }) {
  const hero = aboutPage.heroSection;
  const bio = aboutPage.bioSection;

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-gray-200 pb-8">
          <TypewriterHeading as="h1" className="font-serif text-4xl text-gray-900 sm:text-5xl">
            {hero?.heading || DEFAULT_HEADING}
          </TypewriterHeading>
          <Reveal delay={0.15} className="max-w-sm">
            <p className="text-sm leading-relaxed text-gray-600">
              {hero?.subheading || DEFAULT_SUBHEADING}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-16 md:grid-cols-[1.1fr_1fr] md:items-center">
          <Reveal className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-10 -left-6 font-serif text-[10rem] leading-none font-semibold text-gray-100 select-none sm:-left-10 sm:text-[14rem]"
            >
              P
            </span>

            <div className="relative w-4/5">
              <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-gray-200 shadow-xl">
                {hero?.image?.asset && (
                  <Image
                    src={urlForImage(hero.image).width(700).height(875).fit('crop').url()}
                    alt={hero.image.alt || 'Prabin Kulung Rai'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 40vw, 70vw"
                  />
                )}
              </div>

              <div className="group absolute -right-4 -bottom-6 aspect-[3/4] w-2/5 overflow-hidden rounded-lg border-4 border-white bg-gray-200 shadow-xl sm:-right-8 sm:-bottom-10">
                {bio?.image?.asset && (
                  <Image
                    src={urlForImage(bio.image).width(500).height(667).fit('crop').url()}
                    alt={bio.image.alt || 'Prabin Kulung Rai'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 20vw, 35vw"
                  />
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-4 md:pl-6">
            <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">
              Photographer &amp; Visual Storyteller
            </span>
            <TypewriterHeading as="h2" className="font-serif text-3xl text-gray-900">
              {bio?.heading || DEFAULT_BIO_HEADING}
            </TypewriterHeading>
            <div className="h-px w-16 bg-gray-300" />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16 max-w-4xl border-t border-gray-200 pt-10">
          <Prose value={bio?.bio} />
        </Reveal>
      </Container>
    </section>
  );
}
