export type Category = 'Wildlife' | 'Portraits' | 'Mountains' | 'Cultural';

export type StoryImage = {
  alt: string;
  category: Category;
};

export type StoryHighlight = {
  slug: string;
  title: string;
  caption: string;
  categories: Category[];
  images: StoryImage[];
};

export type Story = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  narrative: string;
  categories: Category[];
  highlights: StoryHighlight[];
};
