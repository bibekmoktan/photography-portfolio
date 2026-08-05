import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SOCIAL_LINKS } from '@/lib/social-links';

export function About() {
  return (
    <section id="about" className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-gray-200 pb-8">
          <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">About Prabin</h2>
          <Link
            href="#about"
            className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600"
          >
            <span aria-hidden>»</span> Know More About Me
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-10 md:flex-row">
          <div className="aspect-[4/5] w-full self-start rounded-lg bg-gray-200 md:w-2/5" />

          <div className="hidden w-px self-stretch bg-gray-200 md:block" />

          <div className="flex flex-1 flex-col gap-8 self-start">
            <p className="text-sm leading-relaxed text-gray-600">
              I am Prabin, an adventurer of light and shadow, weaving tales through my trusty camera
              lens. My journey as a photographer has been a lifelong quest to capture the
              extraordinary in the ordinary, to freeze fleeting moments in time, and to share the
              world&apos;s beauty as I see it. Based in the enchanting landscapes of the USA, I find
              inspiration in every corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and every frame is a piece
              of my heart.
            </p>

            <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-6">
              <span className="text-sm font-semibold text-gray-900">Feel free to get in touch</span>
              <a
                href="mailto:prabinkulungrai@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                prabinkulungrai@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold text-gray-900">Social Media Links</span>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-900 transition-colors hover:bg-gray-50"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
