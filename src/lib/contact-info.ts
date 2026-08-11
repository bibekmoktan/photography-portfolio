export type SocialPlatform = 'facebook' | 'twitter' | 'linkedin';

export type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export const CONTACT_EMAIL = 'prabinkulungrai@gmail.com';
export const CONTACT_PHONE = '+1 (555) 123-4567';
export const BASED_IN_LABEL = 'USA — available for travel worldwide.';
export const RESPONSE_TIME_NOTE =
  'Your message has been received. Prabin Kulung Rai will get back to you within 1–2 business days.';

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'facebook', url: 'https://facebook.com' },
  { platform: 'twitter', url: 'https://twitter.com' },
  { platform: 'linkedin', url: 'https://linkedin.com' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: 'Home',
    links: [
      { label: 'About Me', href: '#' },
      { label: 'My Services', href: '#' },
      { label: 'My Portfolio', href: '#' },
    ],
  },
  {
    title: 'About Me',
    links: [
      { label: 'My Intro', href: '#' },
      { label: 'My Features', href: '#' },
      { label: 'Benefits', href: '#' },
      { label: 'Testimonials', href: '#' },
      { label: 'My Stats', href: '#' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { label: 'Projects', href: '#' },
      { label: 'Gallery', href: '#' },
      { label: 'Collaborations', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Portraits Photography', href: '#' },
      { label: 'Events Photography', href: '#' },
      { label: 'Commercial Photography', href: '#' },
    ],
  },
];
