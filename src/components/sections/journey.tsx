import { TimelineSection } from '@/components/ui/timeline-section';

const JOURNEY_ITEMS = [
  {
    title: 'The Beginnings',
    meta: 'In 2005',
    description:
      "Prabin's photography journey began in 2005, and over the years, it evolved from a passionate hobby into an award-winning career. The lens has captured diverse stories, from local landscapes to international adventures, all marked by a commitment to artistic excellence.",
  },
  {
    title: 'Formal Education',
    meta: 'In 2010',
    description:
      'Prabin pursued a degree in Fine Arts with a focus on photography, refining technical skills and artistic sensibilities.',
  },
  {
    title: 'First Solo Exhibition',
    meta: 'In 2012',
    description:
      'In 2012, Prabin held the first solo exhibition, showcasing a unique perspective on nature and people through the lens.',
  },
];

export function Journey() {
  return (
    <TimelineSection
      heading="Prabin's Journey"
      description="Prabin's photography journey began in 2005, and over the years, it evolved from a passionate hobby into an award-winning career. The lens has captured diverse stories, from local landscapes to international adventures, all marked by a commitment to artistic excellence."
      items={JOURNEY_ITEMS}
    />
  );
}
