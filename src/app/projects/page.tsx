import type { Metadata } from 'next';
import { ProjectsHero, ProjectsList, AlbumsGrid } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsList />
      <AlbumsGrid />
    </>
  );
}
