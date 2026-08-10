import Image from 'next/image';
import Link from 'next/link';
import type { Story } from '@/types/story';
import { urlForImage } from '@/lib/sanity/image';
import { CategoryTag } from './category-tag';

export function StoryCard({ story }: { story: Story }) {
  return (
    <div className="group flex flex-col gap-4">
      <Link
        href={`/projects/${story.slug}`}
        className="relative block aspect-[4/3] w-full overflow-hidden bg-gray-200"
      >
        {story.coverImage?.asset && (
          <Image
            src={urlForImage(story.coverImage).width(800).height(600).fit('crop').url()}
            alt={story.coverImage.alt || story.title}
            fill
            className="object-cover transition-opacity group-hover:opacity-90"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        )}
      </Link>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
          {story.location}
        </span>
        <h3 className="font-serif text-2xl text-gray-900">{story.title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{story.summary}</p>
        <div className="flex flex-wrap justify-between gap-2 pt-2 pr-2">
          <div className="flex items-center gap-2">
            {story.categories.map((category) => (
              <CategoryTag key={category} category={category} />
            ))}
          </div>
          <Link
            href={`/projects/${story.slug}`}
            className="flex w-fit items-center gap-1 border border-gray-300 px-3 py-1.5 pr-4 text-[12px] font-medium tracking-wide text-gray-900 uppercase transition-colors hover:bg-gray-50"
          >
            View Story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
