import { Container } from '@/components/ui/container';
import type { AboutPage } from '@/types/about-page';
import { cn } from '@/lib/utils';

const DEFAULT_HEADING = 'Prabin Kulung Rai by the Numbers';
const DEFAULT_DESCRIPTION =
  "Get a snapshot of Prabin's experience with key statistics, including years in the business, satisfied clients, and photography awards.";

export function Stats({ aboutPage }: { aboutPage: AboutPage }) {
  const stats = aboutPage.stats;

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">
          {aboutPage.statsHeading || DEFAULT_HEADING}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
          {aboutPage.statsDescription || DEFAULT_DESCRIPTION}
        </p>

        {stats.length > 0 && (
          <div className="mt-10 grid grid-cols-1 divide-y divide-gray-200 border border-gray-200 sm:grid-cols-3 sm:divide-y-0">
            {stats.map((stat, index) => {
              const isLastColumn = index % 3 === 2;
              const isSecondRow = index >= 3;

              return (
                <div
                  key={stat.label ?? index}
                  className={cn(
                    'flex flex-col gap-3 p-8',
                    !isLastColumn && 'sm:border-r sm:border-gray-200',
                    isSecondRow && 'sm:border-t sm:border-gray-200',
                  )}
                >
                  <span className="font-serif text-4xl font-semibold text-gray-900">
                    {stat.value}
                  </span>
                  <span aria-hidden className="h-px w-8 bg-gray-300" />
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
