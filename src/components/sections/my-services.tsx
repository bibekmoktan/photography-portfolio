import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { getServices } from '@/lib/services';
import { urlForImage } from '@/lib/sanity/image';
import type { Service } from '@/types/service';

const FALLBACK_SERVICES: Service[] = [
  {
    _id: 'fallback-1',
    title: 'Portrait Photography',
    shortDescription: 'Timeless portraits that capture personality and emotion in every frame.',
  },
  {
    _id: 'fallback-2',
    title: 'Wedding Photography',
    shortDescription: 'Documenting your special day through candid, cinematic storytelling.',
  },
  {
    _id: 'fallback-3',
    title: 'Event Coverage',
    shortDescription: 'Full coverage of corporate events, parties, and celebrations.',
  },
  {
    _id: 'fallback-4',
    title: 'Wildlife Photography',
    shortDescription: 'Patient, immersive photography of animals in their natural habitat.',
  },
  {
    _id: 'fallback-5',
    title: 'Travel Photography',
    shortDescription: 'Vivid imagery that brings destinations around the globe to life.',
  },
  {
    _id: 'fallback-6',
    title: 'Commercial Photography',
    shortDescription: 'Polished product and brand photography built for business.',
  },
  {
    _id: 'fallback-7',
    title: 'Fashion Photography',
    shortDescription: 'Editorial-style shoots that showcase style, mood, and story.',
  },
  {
    _id: 'fallback-8',
    title: 'Street Photography',
    shortDescription: 'Unscripted, honest moments captured from everyday city life.',
  },
  {
    _id: 'fallback-9',
    title: 'Nature Photography',
    shortDescription: 'Landscapes and natural details captured in stunning detail.',
  },
  {
    _id: 'fallback-10',
    title: 'Aerial Photography',
    shortDescription: 'Drone-captured perspectives for a breathtaking view from above.',
  },
];

export async function MyServices() {
  const fetchedServices = await getServices();
  const services = fetchedServices.length > 0 ? fetchedServices : FALLBACK_SERVICES;

  return (
    <section id="services" className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <TypewriterHeading as="h2" className="font-serif text-4xl text-gray-900 sm:text-5xl">
              My Photography Services
            </TypewriterHeading>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Discover our diverse range of photography services, tailored to meet your unique
              needs. From captivating portraits that reveal your true essence to event photography
              that preserves your most treasured moments.
            </p>
          </div>
          <Link
            href="#services"
            className="group flex items-center gap-1 rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-lg active:translate-y-0 active:scale-95"
          >
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              »
            </span>{' '}
            View All Services
          </Link>
        </div>

        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
          {services.map((service, index) => (
            <Reveal
              key={service._id}
              delay={index * 0.1}
              className="group flex w-64 shrink-0 snap-start flex-col gap-4 sm:w-72"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-gray-200">
                {service.image?.asset && (
                  <Image
                    src={urlForImage(service.image).width(600).height(600).fit('crop').url()}
                    alt={service.image.alt || service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(min-width: 640px) 288px, 256px"
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
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
                </span>
              </div>
              <p className="text-sm text-gray-600">{service.shortDescription}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
