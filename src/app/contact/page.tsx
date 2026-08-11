import type { Metadata } from 'next';
import { ContactHero, ContactForm } from '@/components/sections';
import { getSiteSettings } from '@/lib/site-settings';
import { getServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Contact',
};

export default async function ContactPage() {
  const [siteSettings, services] = await Promise.all([getSiteSettings(), getServices()]);

  return (
    <>
      <ContactHero />
      <ContactForm
        siteSettings={siteSettings}
        serviceOptions={services.map((service) => service.title)}
      />
    </>
  );
}
