import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { CategoryTag, HighlightBlock } from '@/components/story';
import { getStories, getStoryBySlug } from '@/lib/stories';
import { urlForImage } from '@/lib/sanity/image';
import { Prose } from '@/lib/sanity/portable-text';

export async function generateStaticParams() {
  const stories = await getStories();
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  return { title: story?.title ?? 'Story' };
}

export default async function StoryPage({ params }: PageProps<'/projects/[slug]'>) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      <section className="bg-white">
        <Container className="py-16 md:py-24">
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <span aria-hidden>«</span> All Stories
          </Link>

          <div className="mt-6 flex flex-col gap-4">
            <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
              {story.location}
            </span>
            <TypewriterHeading as="h1" className="font-serif text-4xl text-gray-900 sm:text-5xl">
              {story.title}
            </TypewriterHeading>
            <div className="flex flex-wrap gap-2">
              {story.categories.map((category) => (
                <CategoryTag key={category} category={category} />
              ))}
            </div>
            <p className="max-w-3xl text-sm leading-relaxed text-gray-600">{story.summary}</p>
          </div>

          <div className="relative mt-10 aspect-[16/9] w-full bg-gray-200">
            {story.coverImage?.asset && (
              <Image
                src={urlForImage(story.coverImage).width(1600).height(900).fit('crop').url()}
                alt={story.coverImage.alt || story.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            )}
          </div>

          <div className="mt-10 max-w-3xl border-t border-gray-200 pt-10">
            <Prose value={story.narrative} />
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="pb-16 md:pb-24">
          <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
            {story.highlights.map((highlight) => (
              <HighlightBlock key={highlight.slug} highlight={highlight} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
