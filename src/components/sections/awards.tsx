import { TimelineSection } from '@/components/ui/timeline-section';
import type { AboutPage } from '@/types/about-page';

const DEFAULT_HEADING = 'Awards & Recognition';
const DEFAULT_DESCRIPTION =
  "A selection of milestones and recognitions earned throughout Prabin's photography career, reflecting a continued commitment to craft and storytelling.";

export function Awards({ aboutPage }: { aboutPage: AboutPage }) {
  return (
    <TimelineSection
      heading={aboutPage.awardsHeading || DEFAULT_HEADING}
      description={aboutPage.awardsDescription || DEFAULT_DESCRIPTION}
      items={aboutPage.awardItems}
    />
  );
}
