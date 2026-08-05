import { Container } from '@/components/ui/container';

type TimelineItem = {
  title: string;
  meta: string;
  description: string;
};

type TimelineSectionProps = {
  heading: string;
  description: string;
  items: TimelineItem[];
};

export function TimelineSection({ heading, description, items }: TimelineSectionProps) {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <h2 className="font-serif text-4xl text-gray-900 sm:text-5xl">{heading}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-600">{description}</p>

        <div className="mt-10 border-t border-gray-200">
          {items.map((item) => (
            <div key={item.title} className="border-b border-gray-200">
              <div className="grid gap-6 py-8 md:grid-cols-[1fr_1px_1fr] md:items-center">
                <h3 className="font-serif text-2xl text-gray-900">{item.title}</h3>
                <div className="hidden w-px self-stretch bg-gray-200 md:block" />
                <p className="text-lg text-gray-700">{item.meta}</p>
              </div>
              <p className="bg-gray-50 px-4 py-6 text-sm leading-relaxed text-gray-600 md:px-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
