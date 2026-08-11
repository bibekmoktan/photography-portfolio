import Image from 'next/image';
import Link from 'next/link';
import type { Album } from '@/types/album';
import { urlForImage } from '@/lib/sanity/image';

export function CategoriesGrid({ albums }: { albums: Album[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {albums.map((album) => (
        <div key={album.slug} className="group flex flex-col gap-4">
          <Link
            href={`/projects/albums/${album.slug}`}
            className="block border border-gray-200 bg-white p-2 transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-200">
              {album.coverImage?.asset && (
                <Image
                  src={urlForImage(album.coverImage).width(600).height(800).fit('crop').url()}
                  alt={album.coverImage.alt || album.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              )}
            </div>
          </Link>

          <div className="flex items-start justify-between gap-4 border-t border-gray-200 px-2 pt-2">
            <div className="flex items-start justify-start">
              <h3 className="text-md font-medium tracking-wide text-gray-900 uppercase">
                {album.title}
              </h3>
            </div>
            <Link
              href={`/projects/albums/${album.slug}`}
              className="group/link flex items-center gap-1 text-xs font-medium tracking-wide text-gray-900 uppercase"
            >
              View Collection
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1"
              >
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
