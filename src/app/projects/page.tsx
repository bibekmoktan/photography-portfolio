import type { Metadata } from 'next';
import { ProjectsHero, ProjectsList } from '@/components/sections';
import { getPageHero } from '@/lib/page-hero';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function ProjectsPage() {
  const hero = await getPageHero('projects');

  return (
    <>
      <ProjectsHero hero={hero} />
      <ProjectsList />
      {/* <AlbumsGrid /> */}
    </>
  );
}
