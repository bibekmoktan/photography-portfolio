'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '@/components/ui/container';
import { ImageSlider } from '@/components/ui/image-slider';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { CATEGORIES } from '@/types/category';
import type { PortfolioItem } from '@/types/portfolio-item';

gsap.registerPlugin(ScrollTrigger);

const MOBILE_IMAGE_COUNT = 10;

/** Placeholder-only field, never present on real Sanity portfolio items. */
type GalleryItem = PortfolioItem & { imageUrl?: string };

/** Verified-reachable Unsplash photo IDs used as placeholders until real
 * portfolioItem images/featured flags are set in Sanity. */
const FALLBACK_PHOTO_IDS = [
  '1494790108377-be9c29b29330',
  '1519741497674-611481863552',
  '1522673607200-164d1b6ce486',
  '1441974231531-c6227db76b6e',
  '1500648767791-00dcc994a43e',
  '1493246507139-91e8fad9978e',
  '1502920917128-1aa500764cbd',
  '1483985988355-763728e1935b',
  '1470770903676-69b98201ea1c',
  '1519681393784-d120267933ba',
  '1507003211169-0a1dd7228f2d',
  '1544005313-94ddf0286df2',
  '1438761681033-6461ffad8d80',
  '1465146344425-f00d5f5c8f07',
];

const FALLBACK_FEATURED_WORK: GalleryItem[] = FALLBACK_PHOTO_IDS.map((photoId, index) => ({
  _id: `featured-fallback-${index + 1}`,
  title: `Featured Shot ${index + 1}`,
  category: CATEGORIES[index % CATEGORIES.length],
  featured: true,
  imageUrl: `https://images.unsplash.com/photo-${photoId}?w=800&h=1000&fit=crop&auto=format&q=80`,
}));

function GalleryImage({
  item,
  sizes,
  className = 'object-cover',
}: {
  item: GalleryItem;
  sizes: string;
  className?: string;
}) {
  if (item.image) {
    return (
      <ImageSlider
        images={[item.image]}
        width={800}
        height={1000}
        sizes={sizes}
        fallbackAlt={item.title || item.category}
        className={className}
      />
    );
  }
  if (item.imageUrl) {
    return (
      <Image
        src={item.imageUrl}
        alt={item.title || item.category}
        fill
        sizes={sizes}
        className={className}
      />
    );
  }
  return (
    <ImageSlider
      images={[]}
      width={800}
      height={1000}
      sizes={sizes}
      fallbackAlt={item.title || item.category}
      className={className}
    />
  );
}

export function FeaturedWork({ items }: { items: PortfolioItem[] }) {
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLAnchorElement[]>([]);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const displayItems: GalleryItem[] = items.length > 0 ? items : FALLBACK_FEATURED_WORK;
  const mobileItems = displayItems.slice(0, MOBILE_IMAGE_COUNT);

  useEffect(() => {
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!sticky || !track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const cards = cardRefs.current.filter((card): card is HTMLAnchorElement => Boolean(card));
      const scrollDistance = () => track.scrollWidth - sticky.clientWidth;

      const focusCards = () => {
        const stickyRect = sticky.getBoundingClientRect();
        const centerX = stickyRect.left + stickyRect.width / 2;
        const falloff = stickyRect.width / 1.4;
        let nearestIndex = 0;
        let nearestDistance = Infinity;

        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const distance = Math.abs(rect.left + rect.width / 2 - centerX);
          const proximity = gsap.utils.clamp(0, 1, 1 - distance / falloff);

          gsap.set(card, {
            scale: gsap.utils.interpolate(0.62, 1.12, proximity),
            opacity: gsap.utils.interpolate(0.3, 1, proximity),
          });

          const shade = card.querySelector<HTMLElement>('[data-shade]');
          if (shade) {
            gsap.set(shade, { opacity: gsap.utils.interpolate(0.65, 0, proximity) });
          }

          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
          }
        });

        if (nearestIndex !== activeIndexRef.current) {
          activeIndexRef.current = nearestIndex;
          setActiveIndex(nearestIndex);
        }
      };

      const horizontalTween = gsap.to(track, {
        x: () => -scrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sticky,
          start: 'top top-50px',
          end: () => `+=${scrollDistance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: focusCards,
          onRefresh: focusCards,
        },
      });

      focusCards();

      return () => {
        horizontalTween.scrollTrigger?.kill();
        horizontalTween.kill();
      };
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('load', onLoad);
      mm.revert();
    };
  }, [displayItems.length]);

  return (
    <section className="bg-white">
      <Container className="flex flex-wrap items-end justify-between gap-4 pt-16 md:pt-24">
        <div>
          <TypewriterHeading as="h2" className="font-serif text-4xl text-gray-900 sm:text-5xl">
            Featured Work
          </TypewriterHeading>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
            A closer look at standout moments from recent shoots — scroll to explore.
          </p>
        </div>
        <span className="hidden font-mono text-xs tracking-widest text-gray-400 uppercase lg:block">
          Scroll
        </span>
      </Container>

      {/* Below 1024px: a plain swipeable strip of the first 10 images, no pin/scale effect. */}
      <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 lg:hidden">
        {mobileItems.map((item) => (
          <Link
            key={item._id}
            href="/portfolio"
            className="relative block h-72 w-60 shrink-0 snap-center overflow-hidden rounded-sm bg-gray-200 shadow-lg sm:h-80 sm:w-64"
          >
            <GalleryImage item={item} sizes="(min-width: 640px) 256px, 240px" />
          </Link>
        ))}
      </div>

      {/* 1024px and up: pinned horizontal scroll with scroll-driven scale/focus. */}
      <div ref={stickyRef} className="relative mt-10 hidden h-screen overflow-hidden lg:block">
        <div ref={trackRef} className="flex h-full w-max items-center gap-10 pt-24 pl-[8vw]">
          {displayItems.map((item, index) => (
            <Link
              key={item._id}
              href="/portfolio"
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="relative block h-[75vh] w-[28vw] shrink-0 snap-center overflow-hidden rounded-sm bg-gray-200 shadow-2xl"
            >
              <GalleryImage item={item} sizes="28vw" />
              <div
                data-shade
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-black opacity-0"
              />
            </Link>
          ))}
          <div aria-hidden className="w-[15vw] shrink-0" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden lg:block">
          <Container className="flex items-end justify-end gap-6 pb-10">
            <div className="flex items-center gap-3 font-mono text-xs text-gray-400">
              <span className="text-gray-900">{String(activeIndex + 1).padStart(2, '0')}</span>
              <span className="h-px w-16 bg-gray-300">
                <span
                  className="block h-full bg-gray-900 transition-[width] duration-300"
                  style={{ width: `${((activeIndex + 1) / displayItems.length) * 100}%` }}
                />
              </span>
              <span>{String(displayItems.length).padStart(2, '0')}</span>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
