import Link from 'next/link';
import { Fragment } from 'react';
import { Container } from '@/components/ui/container';
import { getAlbums } from '@/lib/albums';

export async function AlbumsGrid() {
  const albums = await getAlbums();

  const rows = [];
  for (let i = 0; i < albums.length; i += 2) {
    rows.push(albums.slice(i, i + 2));
  }

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-200 pb-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">Browse by Category</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              Quick galleries grouped by genre or place — no narrative, just the images.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600"
          >
            <span aria-hidden>»</span> View All Categories
          </Link>
        </div>

        <div className="mt-10 flex flex-col gap-16">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-col gap-10 md:flex-row md:items-stretch">
              {row.map((album, albumIndex) => (
                <Fragment key={album.slug}>
                  <div className="flex flex-1 flex-col gap-4 self-start">
                    <h3 className="text-xl font-semibold text-gray-900">{album.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{album.description}</p>
                    <div className="aspect-[2/1] w-full bg-gray-200" />
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{album.images.length} Photos</span>
                      <Link
                        href={`/projects/albums/${album.slug}`}
                        className="flex items-center gap-1 font-medium text-gray-900 hover:text-gray-600"
                      >
                        <span aria-hidden>»</span> View Gallery
                      </Link>
                    </div>
                  </div>
                  {albumIndex < row.length - 1 && (
                    <div className="hidden w-px self-stretch bg-gray-200 md:block" />
                  )}
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
