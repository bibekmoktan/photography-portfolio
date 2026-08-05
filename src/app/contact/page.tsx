import type { Metadata } from 'next';
import { ContactHero, ContactForm } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
