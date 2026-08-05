import { TimelineSection } from '@/components/ui/timeline-section';

const AWARD_ITEMS = [
  {
    title: 'Photographer of the Year',
    meta: 'In 2022',
    description:
      'Recognized by the National Photography Guild for outstanding contributions to portrait and event photography.',
  },
  {
    title: 'Best Wedding Story',
    meta: 'In 2020',
    description:
      'Awarded at the International Wedding Photography Awards for a standout submission capturing raw, unscripted emotion.',
  },
  {
    title: 'Rising Talent Award',
    meta: 'In 2015',
    description:
      'Honored early in the career for a distinctive visual style and rapid growth within the fine art photography community.',
  },
];

export function Awards() {
  return (
    <TimelineSection
      heading="Awards & Recognition"
      description="A selection of milestones and recognitions earned throughout Prabin's photography career, reflecting a continued commitment to craft and storytelling."
      items={AWARD_ITEMS}
    />
  );
}
