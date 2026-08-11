import { Container } from '@/components/ui/container';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import type { PageHero } from '@/types/page-hero';

const DEFAULT_HEADING = 'Capturing Moments, Creating Memories';
const DEFAULT_BODY =
  "Step into a world of timeless photography with Prabin Kulung Rai. Explore our range of photography services, each crafted to tell your unique story through captivating images. Whether it's the magic of portraits, the emotion of events, or the allure of commercial photography, we're here to bring your vision to life.";

export function ServiceHero({ hero }: { hero?: PageHero }) {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
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
