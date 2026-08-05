import { Container } from '@/components/ui/container';
import { cn } from '@/lib/utils';

const STATS = [
  { value: '15', label: 'Years in Business' },
  { value: '500+', label: 'Number of Clients Served' },
  { value: '10+', label: 'Photography Awards & Recognitions' },
  { value: '10,000+', label: 'Followers on Social Media' },
  { value: '90%', label: 'Client Retention Rate' },
  { value: '12+', label: 'Featured in Photography Magazines' },
];

export function Stats() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">
          Prabin Kulung Rai by the Numbers
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
          Get a snapshot of Prabin&apos;s experience with key statistics, including 15 years in the
          business, 500+ satisfied clients, and 10 prestigious photography awards.
        </p>

        <div className="mt-10 grid grid-cols-1 divide-y divide-gray-200 border border-gray-200 sm:grid-cols-3 sm:divide-y-0">
          {STATS.map((stat, index) => {
            const isLastColumn = index % 3 === 2;
            const isSecondRow = index >= 3;

            return (
              <div
                key={stat.label}
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
      </Container>
    </section>
  );
}
