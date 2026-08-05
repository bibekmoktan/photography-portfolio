import { Container } from '@/components/ui/container';

export function PortfolioHero() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1px_1fr] md:items-center">
          <h1 className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl">
            Prabin&apos;s Captured
            <br />
            Moments
          </h1>

          <div className="hidden w-px self-stretch bg-gray-200 md:block" />

          <p className="text-sm leading-relaxed text-gray-600">
            Step into a world where each click of the camera is a journey through emotions,
            landscapes, and stories. Prabin Kulung Rai&apos;s photography style blends artistry and
            soul, transcending pixels to reveal the essence of life. Explore the portfolio, where
            every image is a moment of magic.
          </p>
        </div>
      </Container>
    </section>
  );
}
