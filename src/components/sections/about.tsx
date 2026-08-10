import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import type { AboutPage } from '@/types/about-page';
import type { SiteSettings } from '@/types/site-settings';
import { urlForImage } from '@/lib/sanity/image';
import { SOCIAL_ICON_PATHS } from '@/lib/social-links';

const DEFAULT_BIO =
  "I am Prabin, an adventurer of light and shadow, weaving tales through my trusty camera lens. My journey as a photographer has been a lifelong quest to capture the extraordinary in the ordinary, to freeze fleeting moments in time, and to share the world's beauty as I see it. Based in the enchanting landscapes of the USA, I find inspiration in every corner of this diverse and vibrant country. Join me as we embark on a visual odyssey, where each photograph tells a story, and every frame is a piece of my heart.";

export function About({
  aboutPage,
  siteSettings,
}: {
  aboutPage: AboutPage;
  siteSettings: SiteSettings;
}) {
  return (
    <section id="about" className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="border-b border-gray-200 pb-8">
          <h2 className="font-serif text-5xl text-gray-900 sm:text-6xl">About Prabin</h2>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="relative aspect-square w-full self-start overflow-hidden bg-gray-200">
            {aboutPage.portraitImage?.asset && (
              <Image
                src={urlForImage(aboutPage.portraitImage).width(800).height(800).fit('crop').url()}
                alt={aboutPage.portraitImage.alt || 'Prabin'}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            )}
          </div>

          <div className="flex flex-col gap-8 self-center">
            <p className="text-sm leading-relaxed text-gray-600">
              {aboutPage.bioShort || DEFAULT_BIO}
            </p>

            {siteSettings.email && (
              <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-6">
                <span className="text-sm font-semibold text-gray-900">
                  Feel free to get in touch
                </span>
                <a
                  href={`mailto:${siteSettings.email}`}
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
                  {siteSettings.email}
                </a>
              </div>
            )}

            {siteSettings.socialLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold text-gray-900">Social Media Links</span>
                <div className="flex gap-2">
                  {siteSettings.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-900 transition-colors hover:bg-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d={SOCIAL_ICON_PATHS[social.platform]} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <Link
              href="/about"
              className="flex w-fit items-center gap-1 rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
            >
              <span aria-hidden>»</span> Know More About Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
