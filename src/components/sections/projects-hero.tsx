import { Container } from '@/components/ui/container';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';

const HEADING = 'Stories from the Road';
const BODY =
  'Each trip Prabin Kulung Rai takes becomes a story of its own — a place, a set of categories, and a handful of highlights worth lingering on. Pick a story below to see the full narrative and the images that came out of it.';

export function ProjectsHero() {
  return (
    <section className="bg-white">
      <Container className="pt-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1px_1fr] md:items-center">
          <TypewriterHeading
            as="h1"
            className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl"
          >
            {HEADING}
          </TypewriterHeading>

          <div className="hidden w-px self-stretch bg-gray-200 md:block" />

          <p className="text-sm leading-relaxed text-gray-600">{BODY}</p>
        </div>
      </Container>
    </section>
  );
}
