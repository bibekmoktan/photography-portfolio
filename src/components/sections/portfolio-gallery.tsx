'use client';

import Image from 'next/image';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Container } from '@/components/ui/container';
import { PhotoViewer } from '@/components/story';
import { cn } from '@/lib/utils';

const FILTERS = [
  'All',
  'Portraits',
  'Weddings',
  'Events',
  'Wildlife',
  'Travel',
  'Commercial',
  'Fashion',
  'Street',
  'Nature',
];

const TILE_HEIGHTS = [280, 340, 300, 260, 320, 240];

const WORK_ITEMS = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  seed: `top-work-${index}`,
  category: FILTERS[(index % (FILTERS.length - 1)) + 1],
  height: TILE_HEIGHTS[index % TILE_HEIGHTS.length],
}));

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === 'All'
      ? WORK_ITEMS
      : WORK_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-white">
      <Container className="py-16">
        <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">Featured Photography</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
          A curated collection of my finest photographs across every genre. Browse by category to
          discover the stories behind each frame.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActiveFilter(filter);
                setOpenIndex(null);
              }}
              className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                activeFilter === filter
                  ? 'border-gray-900 bg-gray-900 text-white'
                  : 'border-gray-300 text-gray-600 hover:border-gray-900 hover:text-gray-900',
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 3 }}>
            <Masonry gutter="16px">
              {filteredItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  aria-label={`Open Top work ${item.id + 1} — ${item.category}`}
                  className="group relative block w-full cursor-zoom-in overflow-hidden"
                  style={{ height: item.height }}
                >
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/600/800`}
                    alt={`Top work ${item.id + 1} — ${item.category}`}
                    fill
                    className="object-cover transition-opacity group-hover:opacity-90"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-sm font-semibold text-white">{item.category}</span>
                  </div>
                </button>
              ))}
            </Masonry>
          </ResponsiveMasonry>

          {filteredItems.length === 0 && (
            <p className="text-sm text-gray-500">No work found in this category yet.</p>
          )}
        </div>

        {openIndex !== null && (
          <PhotoViewer
            images={filteredItems.map((item) => ({
              src: `https://picsum.photos/seed/${item.seed}/1200/1600`,
              alt: `Top work ${item.id + 1} — ${item.category}`,
            }))}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
            onIndexChange={setOpenIndex}
          />
        )}
      </Container>
    </section>
  );
}
