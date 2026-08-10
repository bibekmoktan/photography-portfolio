import { createClient } from '@sanity/client';
import { env } from '@/lib/env';

export const sanityClient = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
});

/** Time-based ISR: pages re-fetch from Sanity at most once every 60s. */
export function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T> {
  return sanityClient.fetch<T>(query, params, { next: { revalidate: 60 } });
}
