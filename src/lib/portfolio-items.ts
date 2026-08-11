import type { Category } from '@/types/category';
import type { PortfolioItem } from '@/types/portfolio-item';
import { sanityFetch } from '@/lib/sanity/client';
import { IMAGE_PROJECTION } from '@/lib/sanity/fragments';

const PORTFOLIO_ITEM_PROJECTION = `{
  _id,
  title,
  category,
  "image": image${IMAGE_PROJECTION},
  featured,
  order
}`;

export async function getPortfolioItems(category?: Category): Promise<PortfolioItem[]> {
  if (category) {
    return sanityFetch<PortfolioItem[]>(
      `*[_type == "portfolioItem" && category == $category] | order(order asc) ${PORTFOLIO_ITEM_PROJECTION}`,
      { category },
    );
  }
  return sanityFetch<PortfolioItem[]>(
    `*[_type == "portfolioItem"] | order(order asc) ${PORTFOLIO_ITEM_PROJECTION}`,
  );
}

export async function getFeaturedPortfolioItems(): Promise<PortfolioItem[]> {
  return sanityFetch<PortfolioItem[]>(
    `*[_type == "portfolioItem" && featured == true] | order(order asc) ${PORTFOLIO_ITEM_PROJECTION}`,
  );
}
