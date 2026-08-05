import { Container } from '@/components/ui/container';

export function ServiceHero() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1px_1fr] md:items-center">
          <h1 className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl">
            Capturing
            <br />
            Moments, Creating
            <br />
            Memories
          </h1>

          <div className="hidden w-px self-stretch bg-gray-200 md:block" />

          <p className="text-sm leading-relaxed text-gray-600">
            Step into a world of timeless photography with Prabin Kulung Rai. Explore our range of
            photography services, each crafted to tell your unique story through captivating images.
            Whether it&apos;s the magic of portraits, the emotion of events, or the allure of
            commercial photography, we&apos;re here to bring your vision to life.
          </p>
        </div>
      </Container>
    </section>
  );
}
