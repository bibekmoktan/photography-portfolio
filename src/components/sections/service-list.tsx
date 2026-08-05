import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const SERVICES = [
  {
    title: 'Portrait Photography',
    description:
      'Our portrait photography service is a celebration of you. From individual sessions that capture your essence to family moments frozen in time and the love stories of couples, we specialize in creating portraits that resonate with emotion, personality, and connection.',
  },
  {
    title: 'Event Photography',
    description:
      "Events are a tapestry of emotions and memories, and we're here to weave those stories. From the joy of weddings and the vibrancy of parties to the professionalism of corporate events, our event photography captures the essence of every occasion.",
  },
  {
    title: 'Commercial Photography',
    description:
      'In the world of business, visual storytelling is paramount. Our commercial photography service encompasses product photography that enhances your brand, real estate photography that showcases properties at their best, and brand photography that tells your unique story to the world.',
  },
];

export function ServiceList() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">
          Explore Prabin&apos;s Services
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
          Explore a curated selection of Prabin Kulung Rai&apos;s finest photography work. Each
          project is a visual journey, a story captured through the lens. Click on the titles to
          dive into the full projects and experience the magic for yourself.
        </p>

        <div className="mt-10 flex flex-col divide-y divide-gray-200">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                'flex flex-col gap-10 py-12 md:flex-row md:items-center',
                index % 2 === 1 && 'md:flex-row-reverse',
              )}
            >
              <div className="aspect-[4/3] w-full bg-gray-200 md:w-1/2" />

              <div className="flex w-full flex-col gap-4 md:w-1/2">
                <h3 className="font-serif text-2xl text-gray-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
                <div className="flex flex-wrap items-center gap-4 border-t border-gray-200 pt-4">
                  <Link
                    href="#"
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
                  >
                    <span aria-hidden>»</span> View Projects
                  </Link>
                  <Link
                    href="#contact"
                    className="rounded-md bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
