import Image from 'next/image';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import type { HomePage } from '@/types/home-page';
import { urlForImage } from '@/lib/sanity/image';

const DEFAULT_HEADING = 'Why Work With Prabin';
const DEFAULT_DESCRIPTION =
  'A few of the reasons clients keep coming back — patience behind the lens, an eye for the unscripted moment, and a finished gallery that feels like it was made just for you.';

export function FeatureSection({ homePage }: { homePage: HomePage }) {
  const feature = homePage.featureSection;
  const features = feature?.features ?? [];

  if (features.length === 0) return null;

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <TypewriterHeading as="h2" className="font-serif text-4xl text-gray-900 sm:text-5xl">
          {feature?.heading || DEFAULT_HEADING}
        </TypewriterHeading>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
          {feature?.description || DEFAULT_DESCRIPTION}
        </p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => (
            <Reveal key={item.title ?? index} delay={index * 0.1} className="flex flex-col gap-4">
              <div className="relative aspect-square w-full overflow-hidden bg-gray-200">
                {item.image?.asset && (
                  <Image
                    src={urlForImage(item.image).width(600).height(600).fit('crop').url()}
                    alt={item.image.alt || item.title || ''}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                )}
              </div>
              <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
