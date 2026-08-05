export type AlbumImage = {
  alt: string;
};

export type Album = {
  slug: string;
  title: string;
  description: string;
  images: AlbumImage[];
};
