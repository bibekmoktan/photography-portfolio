import { Container } from '@/components/ui/container';

export function AboutHero() {
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
            <div className="aspect-square w-full bg-gray-200" />
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
            <div className="relative z-10 aspect-[3/4] w-3/5 bg-gray-200" />
          </div>
        </div>

        <p className="mt-10 max-w-4xl border-t border-gray-200 pt-10 text-sm leading-relaxed text-gray-600">
          Prabin Kulung Rai&apos;s love affair with photography began at a young age, nurtured by
          the captivating landscapes and vibrant cultures of the USA. A passion for storytelling
          through images led to a photography journey spanning over 15 years. Driven by an
          insatiable curiosity to explore the beauty in everyday moments, Prabin has honed the craft
          meticulously. A background in digital media provided a solid foundation, but it&apos;s a
          keen eye for detail and an innate ability to capture raw emotions that truly set the work
          apart. Prabin&apos;s journey is more than just taking pictures; it&apos;s about capturing
          the essence of the human spirit, the fleeting magic of nature, and the emotions that
          define our lives. With each click of the camera, stories are woven that transcend time and
          space.
        </p>
      </Container>
    </section>
  );
}
