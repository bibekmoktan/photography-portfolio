import type { SiteSettings } from '@/types/site-settings';
import { sanityFetch } from '@/lib/sanity/client';

const EMPTY_SITE_SETTINGS: SiteSettings = {
  socialLinks: [],
  footerColumns: [],
};

export async function getSiteSettings(): Promise<SiteSettings> {
  const settings = await sanityFetch<SiteSettings | null>(
    `*[_type == "siteSettings" && _id == "siteSettings"][0]{
      siteTitle,
      titleTemplate,
      siteDescription,
      email,
      phone,
      basedInLabel,
      responseTimeNote,
      "socialLinks": socialLinks[]{ platform, url },
      "footerColumns": footerColumns[]{ title, "links": links[]{ label, href } }
    }`,
  );
  return settings ?? EMPTY_SITE_SETTINGS;
}
