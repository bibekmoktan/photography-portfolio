import type { StoryHighlight } from '@/types/story';
import { CategoryTag } from './category-tag';

export function HighlightBlock({ highlight }: { highlight: StoryHighlight }) {
  return (
    <div className="flex flex-col gap-4 py-10">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-serif text-2xl text-gray-900">{highlight.title}</h3>
        <div className="flex flex-wrap gap-2">
          {highlight.categories.map((category) => (
            <CategoryTag key={category} category={category} />
          ))}
        </div>
      </div>
      <p className="max-w-3xl text-sm leading-relaxed text-gray-600">{highlight.caption}</p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {highlight.images.map((image, index) => (
          <div key={index} className="aspect-square w-full bg-gray-200" title={image.alt} />
        ))}
      </div>
    </div>
  );
}
