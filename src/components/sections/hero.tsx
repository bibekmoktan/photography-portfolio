import Link from 'next/link';
import { Container } from '@/components/ui/container';

export function Hero() {
  return (
    <section id="home" className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <h1 className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Photography by
            <br />
            Prabin Kulung Rai
          </h1>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="relative aspect-[32/9] w-full overflow-hidden bg-gray-200">
              <span className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white">
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
            <p className="w-full text-sm leading-relaxed text-gray-600">
              Welcome to Prabin Kulung Rai&apos;s world of photography, where moments are not just
              captured but transformed into timeless memories. With a keen eye for detail and a
              passion for storytelling, Prabin has been crafting visual narratives for [X] years.
              The lens unveils the beauty in the ordinary and transforms the extraordinary into
              sheer artistry.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-gray-200 md:grid-cols-[3fr_1px_1fr] md:items-stretch">
          <div className="mt-8 aspect-[16/9] w-full bg-gray-200" />

          <div className="hidden bg-gray-200 md:block" />

          <div className="flex flex-nowrap items-center justify-center gap-3">
            <Link
              href="#portfolio"
              className="rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
            >
              Explore Prabin&apos;s Portfolio
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
