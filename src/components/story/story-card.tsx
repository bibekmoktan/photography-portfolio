import Link from 'next/link';
import type { Story } from '@/types/story';
import { CategoryTag } from './category-tag';

export function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/projects/${story.slug}`} className="group flex flex-col gap-4">
      <div className="aspect-[4/3] w-full bg-gray-200 transition-opacity group-hover:opacity-90" />
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
          {story.location}
        </span>
        <h3 className="font-serif text-2xl text-gray-900 group-hover:text-gray-600">
          {story.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">{story.summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {story.categories.map((category) => (
            <CategoryTag key={category} category={category} />
          ))}
        </div>
      </div>
    </Link>
  );
}
