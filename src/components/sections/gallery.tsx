import Link from 'next/link';
import { Container } from '@/components/ui/container';

const GALLERY_ITEMS = [
  { number: '01', hasThumbnails: false },
  { number: '02', hasThumbnails: true },
  { number: '03', hasThumbnails: true },
  { number: '04', hasThumbnails: false },
  { number: '05', hasThumbnails: true },
];

export function Gallery() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">
          Explore Prabin&apos;s Gallery Section
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
          Immerse yourself in the world of Prabin Kulung Rai through this curated gallery. These
          handpicked images encapsulate the artistic vision and storytelling prowess. Each
          photograph is a masterpiece, capturing key moments and emotions that leave a lasting
          impression.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.number} className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl text-gray-900">{item.number}</span>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600"
                >
                  <span aria-hidden>»</span> View Project
                </Link>
              </div>

              <div className="aspect-[4/5] w-full bg-gray-200" />

              {item.hasThumbnails && (
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square w-full bg-gray-200" />
                  <div className="aspect-square w-full bg-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
