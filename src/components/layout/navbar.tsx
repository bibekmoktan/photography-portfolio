'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact Me', href: '#contact' },
];

export function Navbar() {
  const [activeHref, setActiveHref] = useState(NAV_LINKS[0].href);

  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="flex h-20 items-center justify-between">
        <Link href="#home" className="text-xl font-bold tracking-tight text-gray-900">
          Prabin Kulung Rai
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setActiveHref(link.href)}
              className={cn(
                'transition-colors hover:text-gray-900',
                activeHref === link.href && 'text-gray-900 underline underline-offset-4',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
