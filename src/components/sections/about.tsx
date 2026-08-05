import Link from 'next/link';
import { Container } from '@/components/ui/container';

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99h-2.54v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.88h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H15.5l-5.214-6.817L3.68 21.75H.37l7.73-8.833L0 2.25h7.5l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

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
