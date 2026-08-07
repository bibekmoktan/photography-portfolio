import Link from 'next/link';
import { Container } from '@/components/ui/container';
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
          <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">{title}</h2>
          {showViewAllButton && (
            <Link
              href="/portfolio"
              className="rounded-none bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
            >
              View All Portfolio
            </Link>
          )}
        </div>

        <div className="mt-10">
          <CategoriesGrid albums={visibleAlbums} />
        </div>
      </Container>
    </section>
  );
}
