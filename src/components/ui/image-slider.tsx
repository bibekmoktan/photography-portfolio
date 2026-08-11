'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { urlForImage } from '@/lib/sanity/image';
import type { SanityImageWithAlt } from '@/types/sanity-image';

const SLIDE_INTERVAL_MS = 4200;
const TRANSITION_DURATION = 1.5;
const FALLBACK_COLORS = ['#e5e7eb', '#d1d5db', '#9ca3af', '#6b7280'];

type Slide = { src: string; alt: string };

export function ImageSlider({
  images,
  width,
  height,
  sizes,
  fallbackAlt,
  fallbackImageUrls,
  className = 'object-cover',
}: {
  images: SanityImageWithAlt[];
  width: number;
  height: number;
  sizes: string;
  fallbackAlt: string;
  /** Plain image URLs shown (with the same slide transition) when `images` is empty. */
  fallbackImageUrls?: string[];
  className?: string;
}) {
  const validImages = (images ?? []).filter((image) => image.asset);
  const slides: Slide[] =
    validImages.length > 0
      ? validImages.map((image) => ({
          src: urlForImage(image).width(width).height(height).fit('crop').url(),
          alt: image.alt || fallbackAlt,
        }))
      : (fallbackImageUrls ?? []).map((url) => ({ src: url, alt: fallbackAlt }));
  const slideCount = slides.length > 0 ? slides.length : FALLBACK_COLORS.length;

  // layerImages[0] / [1]: which slide index each of the two stacked layers is showing.
  const [layerImages, setLayerImages] = useState<[number, number]>([0, 1 % slideCount]);
  const frontLayerRef = useRef<'a' | 'b'>('a');
  const currentIndexRef = useRef(0);
  const layerARef = useRef<HTMLDivElement>(null);
  const layerBRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layerA = layerARef.current;
    const layerB = layerBRef.current;
    if (!layerA || !layerB) return;

    gsap.set(layerA, { xPercent: 0, zIndex: 2 });
    gsap.set(layerB, { xPercent: 100, zIndex: 1 });
    frontLayerRef.current = 'a';
    currentIndexRef.current = 0;

    if (slideCount < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      const frontIsA = frontLayerRef.current === 'a';
      const outgoing = frontIsA ? layerA : layerB;
      const incoming = frontIsA ? layerB : layerA;

      currentIndexRef.current = (currentIndexRef.current + 1) % slideCount;
      const upcomingIndex = (currentIndexRef.current + 1) % slideCount;

      gsap.set(incoming, { zIndex: 3 });
      gsap.to(incoming, { xPercent: 0, duration: TRANSITION_DURATION, ease: 'power3.inOut' });
      gsap.to(outgoing, { xPercent: -25, duration: TRANSITION_DURATION, ease: 'power3.inOut' });

      frontLayerRef.current = frontIsA ? 'b' : 'a';

      gsap.delayedCall(TRANSITION_DURATION, () => {
        gsap.set(outgoing, { xPercent: 100, zIndex: 1 });
        gsap.set(incoming, { zIndex: 2 });
        setLayerImages((previous) => {
          const next: [number, number] = [...previous];
          next[frontIsA ? 0 : 1] = upcomingIndex;
          return next;
        });
      });
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(id);
  }, [slideCount]);

  if (slides.length === 0) {
    return (
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{ backgroundColor: FALLBACK_COLORS[layerImages[0] % FALLBACK_COLORS.length] }}
      />
    );
  }

  const renderLayer = (layerIndex: number, ref: React.RefObject<HTMLDivElement | null>) => {
    const slide = slides[layerImages[layerIndex] % slides.length];
    if (!slide) return null;
    return (
      <div ref={ref} className="absolute inset-0">
        <Image src={slide.src} alt={slide.alt} fill className={className} sizes={sizes} />
      </div>
    );
  };

  return (
    <>
      {renderLayer(0, layerARef)}
      {renderLayer(1, layerBRef)}
    </>
  );
}
