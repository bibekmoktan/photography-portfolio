import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { TypewriterHeading } from '@/components/ui/typewriter-heading';
import { CategoriesGrid } from '@/components/story';
import { getAlbums } from '@/lib/albums';

type AlbumsGridProps = {
  title?: string;
  showViewAllButton?: boolean;
  limit?: number;
};

export async function AlbumsGrid({
  title = 'Discover My Visual Journey',
  showViewAllButton = true,
  limit,
}: AlbumsGridProps = {}) {
  const albums = await getAlbums();
  const visibleAlbums = limit ? albums.slice(0, limit) : albums;

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-8">
          <TypewriterHeading as="h2" className="font-serif text-4xl text-gray-900 sm:text-5xl">
            {title}
          </TypewriterHeading>
          {showViewAllButton && (
            <Link
              href="/portfolio"
              className="rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-lg active:translate-y-0 active:scale-95"
            >
              View All Portfolio
            </Link>
          )}
        </div>

        <Reveal className="mt-10">
          <CategoriesGrid albums={visibleAlbums} />
        </Reveal>
      </Container>
    </section>
  );
}
