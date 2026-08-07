import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { StoryCard } from '@/components/story';
import { getStories } from '@/lib/stories';

export async function TravelStories() {
  const stories = await getStories();

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">
              Travel Stories to Explore
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Every destination tells a story worth exploring.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-1 rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            View All Stories
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </Container>
    </section>
  );
}
