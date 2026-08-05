import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { getAlbumBySlug, getAlbums } from '@/lib/albums';

export async function generateStaticParams() {
  const albums = await getAlbums();
  return albums.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/projects/albums/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const album = await getAlbumBySlug(slug);

  return { title: album?.title ?? 'Album' };
}

export default async function AlbumPage({ params }: PageProps<'/projects/albums/[slug]'>) {
  const { slug } = await params;
  const album = await getAlbumBySlug(slug);

  if (!album) {
    notFound();
  }

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <Link
          href="/projects"
          className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <span aria-hidden>«</span> All Stories
        </Link>

        <h1 className="mt-6 font-serif text-4xl text-gray-900 sm:text-5xl">{album.title}</h1>
        <p className="mt-2 text-sm text-gray-500">{album.images.length} photos</p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {album.images.map((image, index) => (
            <div key={index} className="aspect-square w-full bg-gray-200" title={image.alt} />
          ))}
        </div>
      </Container>
    </section>
  );
}
