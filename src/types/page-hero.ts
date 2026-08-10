export type PageHeroName = 'services' | 'portfolio' | 'projects' | 'contact';

export type PageHero = {
  page: PageHeroName;
  heading?: string;
  body?: string;
};
