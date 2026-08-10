export const CATEGORIES = [
  'Portraits',
  'Weddings',
  'Events',
  'Wildlife',
  'Travel',
  'Commercial',
  'Fashion',
  'Street',
  'Nature',
  'Mountains',
  'Cultural',
] as const;

export type Category = (typeof CATEGORIES)[number];
