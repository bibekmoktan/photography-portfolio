import type { Metadata } from 'next';
import { ServiceHero, ServiceList } from '@/components/sections';
import { getPageHero } from '@/lib/page-hero';

export const metadata: Metadata = {
  title: 'Services',
};

export default async function ServicesPage() {
  const hero = await getPageHero('services');

  return (
    <>
      <ServiceHero hero={hero} />
      <ServiceList />
    </>
  );
}
