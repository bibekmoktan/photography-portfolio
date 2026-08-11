import { TimelineSection } from '@/components/ui/timeline-section';
import type { AboutPage } from '@/types/about-page';

const DEFAULT_HEADING = "Prabin's Journey";
const DEFAULT_DESCRIPTION =
  "Prabin's photography journey began in 2005, and over the years, it evolved from a passionate hobby into an award-winning career. The lens has captured diverse stories, from local landscapes to international adventures, all marked by a commitment to artistic excellence.";

export function Journey({ aboutPage }: { aboutPage: AboutPage }) {
  const journey = aboutPage.journeySection;

  return (
    <TimelineSection
      heading={journey?.heading || DEFAULT_HEADING}
      description={journey?.description || DEFAULT_DESCRIPTION}
      items={journey?.items ?? []}
    />
  );
}
