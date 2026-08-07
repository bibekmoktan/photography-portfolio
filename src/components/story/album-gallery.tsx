'use client';

import Image from 'next/image';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { PhotoViewer } from './photo-viewer';

const TILE_HEIGHTS = [220, 300, 260, 340, 240, 280, 200, 320, 260, 300];

export function AlbumGallery({
  slug,
  title,
  count = 20,
}: {
  slug: string;
  title: string;
  count?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const tiles = Array.from({ length: count }, (_, i) => ({
    key: `${slug}-gallery-${i}`,
    seed: `${slug}-gallery-${i}`,
    alt: `${title} photo ${i + 1}`,
  }));

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 3 }}>
        <Masonry gutter="12px">
          {tiles.map((tile, index) => (
            <button
              key={tile.key}
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open ${tile.alt}`}
              className="group relative block w-full cursor-zoom-in overflow-hidden"
              style={{ height: TILE_HEIGHTS[index % TILE_HEIGHTS.length] }}
            >
              <Image
                src={`https://picsum.photos/seed/${tile.seed}/600/800`}
                alt={tile.alt}
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
          images={tiles.map((tile) => ({
            src: `https://picsum.photos/seed/${tile.seed}/1200/1600`,
            alt: tile.alt,
          }))}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onIndexChange={setOpenIndex}
        />
      )}
    </>
  );
}
