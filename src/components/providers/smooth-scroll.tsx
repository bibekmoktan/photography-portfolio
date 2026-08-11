'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/** Mounted once in the root layout to enable inertia-based smooth scrolling site-wide.
 * Driven by gsap's ticker (instead of Lenis's own rAF) and wired into ScrollTrigger.update
 * so GSAP scroll-triggered animations (e.g. pinned horizontal sections) stay in sync. */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return null;
}
