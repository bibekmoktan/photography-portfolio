import { Container } from '@/components/ui/container';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import type { PageHero } from '@/types/page-hero';

const DEFAULT_HEADING = "Let's Create Something Together";
const DEFAULT_BODY =
  'Have a project in mind or just want to say hello? Fill out the form below or reach out directly — Prabin Kulung Rai typically responds within 1–2 business days.';

export function ContactHero({ hero }: { hero?: PageHero }) {
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
