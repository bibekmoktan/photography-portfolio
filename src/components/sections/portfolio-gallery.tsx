'use client';

import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const PROJECTS = [
  {
    title: 'Faces of Resilience',
    description:
      '"Faces of Resilience" is a poignant project that portrays the strength and character of individuals who have overcome adversity. Prabin\'s portraits capture the raw and powerful emotions of the subjects, revealing their remarkable stories of triumph.',
    category: 'Portraits',
  },
  {
    title: 'A Wedding Tale',
    description:
      '"A Wedding Tale" is a visual journey through the magic of weddings. Prabin\'s event coverage captures the love, laughter, and emotional moments that define these special occasions. Each photograph tells a unique story of love and unity.',
    category: 'Events',
  },
  {
    title: 'Product Elegance',
    description:
      '"Product Elegance" is a commercial photography series that highlights the sophistication and quality of luxury products. Prabin\'s attention to detail and creative composition make each product an exquisite work of art.',
    category: 'Commercial Photography',
  },
  {
    title: 'Culinary Delights',
    description:
      '"Culinary Delights" captures the artistry of cuisine, showcasing food in all its delectable glory. Prabin\'s photographs make each dish a mouthwatering masterpiece, perfect for restaurant menus and marketing materials.',
    category: 'Commercial Photography',
  },
];

const FILTERS = ['All', 'Portraits', 'Events', 'Commercial Photography'];

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeFilter);

  const rows = [];
  for (let i = 0; i < filteredProjects.length; i += 2) {
    rows.push(filteredProjects.slice(i, i + 2));
  }

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">
          Explore Prabin&apos;s Diverse Portfolio
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">
          Explore a curated selection of Prabin Kulung Rai&apos;s finest photography work. Each
          project is a visual journey, a story captured through the lens. Click on the titles to
          dive into the full projects and experience the magic for yourself!
        </p>

        <div className="mt-10 flex flex-wrap gap-6 border-y border-gray-200 bg-gray-50 px-6 py-4">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'text-sm font-medium transition-colors',
                activeFilter === filter
                  ? 'text-gray-900 underline underline-offset-4'
                  : 'text-gray-500 hover:text-gray-900',
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-16">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col gap-10 md:flex-row md:items-stretch">
              {row.map((project, projectIndex) => (
                <Fragment key={project.title}>
                  <div className="flex flex-1 flex-col gap-4 self-start">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{project.description}</p>
                    <div className="aspect-[2/1] w-full bg-gray-200" />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{project.category}</span>
                      <Link
                        href="#"
                        className="flex items-center gap-1 font-medium text-gray-900 hover:text-gray-600"
                      >
                        <span aria-hidden>»</span> View Projects
                      </Link>
                    </div>
                  </div>
                  {projectIndex < row.length - 1 && (
                    <div className="hidden w-px self-stretch bg-gray-200 md:block" />
                  )}
                </Fragment>
              ))}
            </div>
          ))}

          {filteredProjects.length === 0 && (
            <p className="text-sm text-gray-500">No projects found in this category yet.</p>
          )}
        </div>
      </Container>
    </section>
  );
}
