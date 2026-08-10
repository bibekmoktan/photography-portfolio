import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { getServices } from '@/lib/services';
import { urlForImage } from '@/lib/sanity/image';
import { cn } from '@/lib/utils';

export async function ServiceList() {
  const services = await getServices();

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
          {services.map((service, index) => (
            <div
              key={service._id}
              className={cn(
                'flex flex-col gap-10 py-12 md:flex-row md:items-center',
                index % 2 === 1 && 'md:flex-row-reverse',
              )}
            >
              <div className="relative aspect-[4/3] w-full bg-gray-200 md:w-1/2">
                {service.image?.asset && (
                  <Image
                    src={urlForImage(service.image).width(800).height(600).fit('crop').url()}
                    alt={service.image.alt || service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                )}
              </div>

              <div className="flex w-full flex-col gap-4 md:w-1/2">
                <h3 className="font-serif text-2xl text-gray-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{service.longDescription}</p>
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

          {services.length === 0 && (
            <p className="py-12 text-sm text-gray-500">No services listed yet.</p>
          )}
        </div>
      </Container>
    </section>
  );
}
