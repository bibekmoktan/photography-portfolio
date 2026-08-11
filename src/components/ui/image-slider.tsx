'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { urlForImage } from '@/lib/sanity/image';
import type { SanityImageWithAlt } from '@/types/sanity-image';

const SLIDE_INTERVAL_MS = 2000;
const FALLBACK_COLORS = ['#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280'];

export function ImageSlider({
  images,
  width,
  height,
  sizes,
  fallbackAlt,
  className = 'object-cover',
}: {
  images: SanityImageWithAlt[];
  width: number;
  height: number;
  sizes: string;
  fallbackAlt: string;
  className?: string;
}) {
  const validImages = (images ?? []).filter((image) => image.asset);
  const slideCount = validImages.length > 0 ? validImages.length : FALLBACK_COLORS.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slideCount < 2) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [slideCount]);

  if (validImages.length === 0) {
    return (
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{ backgroundColor: FALLBACK_COLORS[index] }}
      />
    );
  }

  const image = validImages[index % validImages.length];

  return (
    <Image
      key={index}
      src={urlForImage(image).width(width).height(height).fit('crop').url()}
      alt={image.alt || fallbackAlt}
      fill
      className={`${className} animate-kenburns`}
      sizes={sizes}
    />
  );
}
