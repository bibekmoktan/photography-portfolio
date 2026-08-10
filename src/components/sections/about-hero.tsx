import Image from 'next/image';
import { Container } from '@/components/ui/container';
import type { AboutPage } from '@/types/about-page';
import { urlForImage } from '@/lib/sanity/image';
import { Prose } from '@/lib/sanity/portable-text';

export function AboutHero({ aboutPage }: { aboutPage: AboutPage }) {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-gray-200 pb-8">
          <h1 className="font-serif text-4xl text-gray-900 sm:text-5xl">About Prabin Kulung Rai</h1>
          <p className="max-w-sm text-sm leading-relaxed text-gray-600">
            Get to know the visionary behind the lens, Prabin Kulung Rai, and the remarkable journey
            through the world of photography.
          </p>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square w-full bg-gray-200">
              {aboutPage.portraitImage?.asset && (
                <Image
                  src={urlForImage(aboutPage.portraitImage)
                    .width(600)
                    .height(600)
                    .fit('crop')
                    .url()}
                  alt={aboutPage.portraitImage.alt || 'Prabin Kulung Rai'}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              )}
            </div>
            <div>
              <p className="font-serif text-sm text-gray-500 italic">Biography of</p>
              <h2 className="font-serif text-2xl text-gray-900">Prabin Kulung Rai</h2>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-8 -right-4 font-serif text-[14rem] leading-none font-semibold text-gray-100 select-none md:text-[18rem]"
            >
              P
            </span>
            <div className="relative z-10 aspect-[3/4] w-3/5 bg-gray-200">
              {aboutPage.secondaryImage?.asset && (
                <Image
                  src={urlForImage(aboutPage.secondaryImage)
                    .width(600)
                    .height(800)
                    .fit('crop')
                    .url()}
                  alt={aboutPage.secondaryImage.alt || 'Prabin Kulung Rai'}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 60vw"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-4xl border-t border-gray-200 pt-10">
          <Prose value={aboutPage.bioLong} />
        </div>
      </Container>
    </section>
  );
}
