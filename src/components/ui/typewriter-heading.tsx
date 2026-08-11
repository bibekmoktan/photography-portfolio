'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

type TypewriterHeadingProps = {
  as?: 'h1' | 'h2';
  children: string;
  className?: string;
};

/** Types the heading out on scroll-into-view. Full text is always in the DOM
 * (via aria-label) so SEO and screen readers see it immediately. */
export function TypewriterHeading({ as = 'h2', children, className }: TypewriterHeadingProps) {
  const Tag = as;
  const containerRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    const cursorEl = cursorRef.current;
    if (!container || !textEl || !cursorEl) return;

    const cursorTween = gsap.fromTo(
      cursorEl,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.5, repeat: -1, ease: 'steps(1)' },
    );

    let typeTween: gsap.core.Tween | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        textEl.textContent = '';
        typeTween = gsap.to(textEl, {
          text: { value: children },
          duration: Math.min(Math.max(children.length * 0.09, 1.2), 4.5),
          ease: 'none',
          onComplete: () => cursorTween.kill(),
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      cursorTween.kill();
      typeTween?.kill();
    };
  }, [children]);

  return (
    <Tag ref={containerRef} className={className} aria-label={children}>
      <span ref={textRef} aria-hidden="true" className="whitespace-pre-line">
        {children}
      </span>
      <span ref={cursorRef} aria-hidden="true" className="inline-block">
        |
      </span>
    </Tag>
  );
}
