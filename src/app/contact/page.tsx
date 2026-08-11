import type { Metadata } from 'next';
import { ContactHero, ContactForm } from '@/components/sections';
import { getServices } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Contact',
};

export default async function ContactPage() {
  const services = await getServices();

  return (
    <>
      <ContactHero />
      <ContactForm serviceOptions={services.map((service) => service.title)} />
    </>
  );
}
