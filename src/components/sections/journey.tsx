import { TimelineSection } from '@/components/ui/timeline-section';
import type { AboutPage } from '@/types/about-page';

const DEFAULT_HEADING = "Prabin's Journey";
const DEFAULT_DESCRIPTION =
  "Prabin's photography journey began in 2005, and over the years, it evolved from a passionate hobby into an award-winning career. The lens has captured diverse stories, from local landscapes to international adventures, all marked by a commitment to artistic excellence.";

export function Journey({ aboutPage }: { aboutPage: AboutPage }) {
  return (
    <TimelineSection
      heading={aboutPage.journeyHeading || DEFAULT_HEADING}
      description={aboutPage.journeyDescription || DEFAULT_DESCRIPTION}
      items={aboutPage.journeyItems}
    />
  );
}
