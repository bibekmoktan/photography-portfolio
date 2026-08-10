import type { Service } from '@/types/service';
import { sanityFetch } from '@/lib/sanity/client';
import { IMAGE_PROJECTION } from '@/lib/sanity/fragments';

const SERVICE_PROJECTION = `{
  _id,
  title,
  shortDescription,
  longDescription,
  "image": image${IMAGE_PROJECTION},
  order
}`;

export async function getServices(): Promise<Service[]> {
  return sanityFetch<Service[]>(`*[_type == "service"] | order(order asc) ${SERVICE_PROJECTION}`);
}
