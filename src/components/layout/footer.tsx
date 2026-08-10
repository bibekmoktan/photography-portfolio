import Link from 'next/link';
import { Container } from '@/components/ui/container';
import type { SiteSettings, FooterColumn } from '@/types/site-settings';
import { SOCIAL_ICON_PATHS } from '@/lib/social-links';

const DEFAULT_FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Home',
    links: [
      { label: 'About Me', href: '#' },
      { label: 'My Services', href: '#' },
      { label: 'My Portfolio', href: '#' },
    ],
  },
  {
    title: 'About Me',
    links: [
      { label: 'My Intro', href: '#' },
      { label: 'My Features', href: '#' },
      { label: 'Benefits', href: '#' },
      { label: 'Testimonials', href: '#' },
      { label: 'My Stats', href: '#' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { label: 'Projects', href: '#' },
      { label: 'Gallery', href: '#' },
      { label: 'Collaborations', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Portraits Photography', href: '#' },
      { label: 'Events Photography', href: '#' },
      { label: 'Commercial Photography', href: '#' },
    ],
  },
];

export function Footer({ siteSettings }: { siteSettings: SiteSettings }) {
  const footerColumns =
    siteSettings.footerColumns.length > 0 ? siteSettings.footerColumns : DEFAULT_FOOTER_COLUMNS;

  return (
    <footer className="bg-white">
      <Container className="py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="flex flex-col gap-6 md:w-56 md:shrink-0">
            <Link href="#home" className="text-xl font-bold tracking-tight text-gray-900">
              Prabin Kulung Rai
            </Link>
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

          <div className="hidden w-px self-stretch bg-gray-200 md:block" />

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <h3 className="text-sm font-semibold text-gray-900">{column.title}</h3>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-gray-600 hover:text-gray-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Prabin Kulung Rai. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
