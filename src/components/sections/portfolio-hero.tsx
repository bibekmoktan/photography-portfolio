import { Container } from '@/components/ui/container';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import type { PageHero } from '@/types/page-hero';

const DEFAULT_HEADING = "Prabin's Captured Moments";
const DEFAULT_BODY =
  "Step into a world where each click of the camera is a journey through emotions, landscapes, and stories. Prabin Kulung Rai's photography style blends artistry and soul, transcending pixels to reveal the essence of life. Explore the portfolio, where every image is a moment of magic.";

export function PortfolioHero({ hero }: { hero?: PageHero }) {
  return (
    <section className="bg-white">
      <Container className="py-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1px_1fr] md:items-center">
          <TypewriterHeading
            as="h1"
            className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl"
          >
            {hero?.heading || DEFAULT_HEADING}
          </TypewriterHeading>

          <div className="hidden w-px self-stretch bg-gray-200 md:block" />

          <p className="text-sm leading-relaxed text-gray-600">{hero?.body || DEFAULT_BODY}</p>
        </div>
      </Container>
    </section>
  );
}
