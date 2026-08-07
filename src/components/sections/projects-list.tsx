import { Container } from '@/components/ui/container';
import { StoryCard } from '@/components/story';
import { getStories } from '@/lib/stories';

export async function ProjectsList() {
  const stories = await getStories();

  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 border-t border-gray-200 pt-12 sm:grid-cols-2">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </Container>
    </section>
  );
}
