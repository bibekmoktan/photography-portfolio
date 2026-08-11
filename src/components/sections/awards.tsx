import { TimelineSection } from '@/components/ui/timeline-section';
import type { AboutPage } from '@/types/about-page';

const DEFAULT_HEADING = 'Awards & Recognition';
const DEFAULT_DESCRIPTION =
  "A selection of milestones and recognitions earned throughout Prabin's photography career, reflecting a continued commitment to craft and storytelling.";

export function Awards({ aboutPage }: { aboutPage: AboutPage }) {
  const awards = aboutPage.awardsSection;

  return (
    <TimelineSection
      heading={awards?.heading || DEFAULT_HEADING}
      description={awards?.description || DEFAULT_DESCRIPTION}
      items={awards?.items ?? []}
    />
  );
}
