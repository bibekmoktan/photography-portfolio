import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { getServices } from '@/lib/services';
import { urlForImage } from '@/lib/sanity/image';

export async function MyServices() {
  const services = await getServices();

  return (
    <section id="services" className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">
              My Photography Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Discover our diverse range of photography services, tailored to meet your unique
              needs. From captivating portraits that reveal your true essence to event photography
              that preserves your most treasured moments.
            </p>
          </div>
          <Link
            href="#services"
            className="flex items-center gap-1 rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            <span aria-hidden>»</span> View All Services
          </Link>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div key={service._id} className="flex flex-col gap-4">
              <div className="relative aspect-square w-full bg-gray-200">
                {service.image?.asset && (
                  <Image
                    src={urlForImage(service.image).width(600).height(600).fit('crop').url()}
                    alt={service.image.alt || service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white">
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
            </div>
          ))}

          {services.length === 0 && (
            <p className="text-sm text-gray-500">No services listed yet.</p>
          )}
        </div>
      </Container>
    </section>
  );
}
