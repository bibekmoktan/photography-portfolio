export type SocialLink = {
  platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram';
  url: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type SiteSettings = {
  siteTitle?: string;
  titleTemplate?: string;
  siteDescription?: string;
  email?: string;
  phone?: string;
  basedInLabel?: string;
  responseTimeNote?: string;
  socialLinks: SocialLink[];
  footerColumns: FooterColumn[];
};
