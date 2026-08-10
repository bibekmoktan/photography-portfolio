'use client';

import Image from 'next/image';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import type { SanityImageWithAlt } from '@/types/sanity-image';
import { urlForImage } from '@/lib/sanity/image';
import { PhotoViewer } from './photo-viewer';

export function AlbumGallery({ images, title }: { images: SanityImageWithAlt[]; title: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return <p className="text-sm text-gray-500">No photos in this album yet.</p>;
  }

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 3 }}>
        <Masonry gutter="12px">
          {images.map((image, index) => (
            <button
              key={image.asset?._ref ?? index}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open ${image.alt || `${title} photo ${index + 1}`}`}
              className="group relative block w-full cursor-zoom-in overflow-hidden"
              style={{ aspectRatio: image.aspectRatio ?? 3 / 4 }}
            >
              <Image
                src={urlForImage(image).width(600).url()}
                alt={image.alt || `${title} photo ${index + 1}`}
                fill
                className="object-cover transition-opacity group-hover:opacity-90"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </button>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {openIndex !== null && (
        <PhotoViewer
          images={images.map((image, index) => ({
            src: urlForImage(image).width(1600).url(),
            alt: image.alt || `${title} photo ${index + 1}`,
          }))}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
}
