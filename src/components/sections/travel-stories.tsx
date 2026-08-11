import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { StoryCard } from '@/components/story';
import { getStories } from '@/lib/stories';

export async function TravelStories() {
  const stories = await getStories();

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <TypewriterHeading as="h2" className="font-serif text-4xl text-gray-900 sm:text-5xl">
              Travel Stories to Explore
            </TypewriterHeading>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Every destination tells a story worth exploring.
            </p>
          </div>
          <Link
            href="/projects"
            className="rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-lg active:translate-y-0 active:scale-95"
          >
            View All Stories
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {stories.map((story, index) => (
            <Reveal key={story.slug} delay={index * 0.1}>
              <StoryCard story={story} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
