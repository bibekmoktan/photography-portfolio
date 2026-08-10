import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import { Contact } from '@/components/sections';
import { getSiteSettings } from '@/lib/site-settings';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();

  return {
    title: {
      default: siteSettings.siteTitle || 'Prabin Kulung Rai Photography',
      template: siteSettings.titleTemplate || '%s | Prabin Kulung Rai Photography',
    },
    description: siteSettings.siteDescription || 'Photography portfolio website',
  };
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const siteSettings = await getSiteSettings();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Contact siteSettings={siteSettings} />
        <Footer siteSettings={siteSettings} />
      </body>
    </html>
  );
}
