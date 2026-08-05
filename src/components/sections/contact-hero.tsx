import { Container } from '@/components/ui/container';

export function ContactHero() {
  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1px_1fr] md:items-center">
          <h1 className="font-serif text-4xl leading-tight text-gray-900 sm:text-5xl">
            Let&apos;s Create
            <br />
            Something Together
          </h1>

          <div className="hidden w-px self-stretch bg-gray-200 md:block" />

          <p className="text-sm leading-relaxed text-gray-600">
            Have a project in mind or just want to say hello? Fill out the form below or reach out
            directly — Prabin Kulung Rai typically responds within 1–2 business days.
          </p>
        </div>
      </Container>
    </section>
  );
}
