import type { Metadata } from 'next';
import { ContactHero, ContactForm } from '@/components/sections';
import { getPageHero } from '@/lib/page-hero';
import { getSiteSettings } from '@/lib/site-settings';
import { getServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Contact',
};

export default async function ContactPage() {
  const [hero, siteSettings, services] = await Promise.all([
    getPageHero('contact'),
    getSiteSettings(),
    getServices(),
  ]);

  return (
    <>
      <ContactHero hero={hero} />
      <ContactForm
        siteSettings={siteSettings}
        serviceOptions={services.map((service) => service.title)}
      />
    </>
  );
}
