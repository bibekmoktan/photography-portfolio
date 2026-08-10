import Image from 'next/image';
import type { StoryHighlight } from '@/types/story';
import { urlForImage } from '@/lib/sanity/image';
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
          <div
            key={image.asset?._ref ?? index}
            className="relative aspect-square w-full bg-gray-200"
          >
            {image.asset && (
              <Image
                src={urlForImage(image).width(600).height(600).fit('crop').url()}
                alt={image.alt || highlight.title}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 50vw"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
