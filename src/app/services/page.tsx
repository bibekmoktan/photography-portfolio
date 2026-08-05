import type { Metadata } from 'next';
import { ServiceHero, ServiceList } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceList />
    </>
  );
}
