import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import type { SiteSettings } from '@/types/site-settings';

export function Contact({ siteSettings }: { siteSettings: SiteSettings }) {
  return (
    <section
      id="contact"
      className="border-t-1 border-b-1 border-t-gray-200 border-b-gray-200 bg-white"
    >
      <Container className="grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <TypewriterHeading
          as="h2"
          className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl"
        >
          {'Ready to Bring Your\nVision to Life?'}
        </TypewriterHeading>

        <div className="flex flex-col gap-6">
          <p className="text-sm leading-relaxed text-gray-600">
            Whether you have a specific project in mind or want to discuss how we can capture your
            moments, we&apos;re here to make it happen. Contact Prabin Kulung Rai Photography today,
            and let&apos;s start creating memories together.
          </p>

          <div className="flex flex-col gap-4 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900">Contact Me</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
              >
                Go to Contact Page
              </Link>
              {siteSettings.email && (
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="flex items-center gap-2 rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
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
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
