'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Stories', href: '/projects' },
];

const CONTACT_LINK = { label: 'Contact Me', href: '/contact' };

const CONTACT_BUTTON_CLASSES =
  'rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95';

const SCROLL_THRESHOLD = 40;

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsMenuOpen(false);
  }

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={cn(
        'inset-x-0 top-0 z-50 transition-colors duration-300',
        isHome ? 'fixed' : 'sticky',
        isTransparent
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-gray-200 bg-white',
      )}
    >
      <Container className="flex h-28 items-center justify-between">
        <Link href="/" aria-label="Prabin Kulung Rai — Editorial Photography">
          <Image
            src="/prabin-logo.png"
            alt="Prabin Kulung Rai — Editorial Photography"
            width={1511}
            height={655}
            priority
            unoptimized
            className={cn(
              'h-16 w-auto object-contain transition-all duration-300',
              isTransparent && 'invert',
            )}
          />
        </Link>

        <nav
          className={cn(
            'hidden items-center gap-x-14 text-lg transition-colors md:flex',
            isTransparent ? 'text-white' : 'text-gray-600',
          )}
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'transition-colors',
                  isTransparent ? 'hover:text-white' : 'hover:text-gray-900',
                  isActive &&
                    (isTransparent
                      ? 'text-white underline underline-offset-4'
                      : 'text-gray-900 underline underline-offset-4'),
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href={CONTACT_LINK.href} className={CONTACT_BUTTON_CLASSES}>
            {CONTACT_LINK.label}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Link href={CONTACT_LINK.href} className={CONTACT_BUTTON_CLASSES}>
            {CONTACT_LINK.label}
          </Link>
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-md border transition-colors',
              isTransparent
                ? 'border-white/40 text-white hover:bg-white/10'
                : 'border-gray-300 text-gray-900 hover:bg-gray-50',
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              {isMenuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <nav className="border-t border-gray-200 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-md px-3 py-2.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900',
                    isActive && 'bg-gray-50 text-gray-900',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </Container>
        </nav>
      )}
    </header>
  );
}
