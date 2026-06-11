import Section from "@/components/section";
import SectionHeading from "@/components/ui/SectionHeading";
import { TestimonialCard, TestimonialCardProps } from "@/components/ui/Card";

const testimonials: TestimonialCardProps[] = [
  {
    quote:
      "Piš kulervoucí příběhy byl pro mě zlomovej kurz. Nevím, jestli mí hráči vědí, na čem to bylo, ale moje kampaně jsou díky tomu prostě lepší.",
    author: "Štěpán Tůma",
    role: "autor Hluk noci",
    authorImage: "/img/testimonials/stepan-tuma.webp",
  },
  {
    quote:
      "Kurz Jak vystavět kulervoucí příběh je plný informací, které se v českém prostředí jen těžko hledají. Jako fantasy autorce mi pomohl pochopit, proč některé moje knihy fungovaly, a jiné ne.",
    author: "Jakub Stajnura",
    role: "autor bestselleru Srpny",
  },
  {
    quote:
      "Mám pocit, že jsem vstoupila do příběhového Matrixu — věci, které jsem vždy cítila, ale neuměla pojmenovat, mají teď svůj název a já je můžu vědomě použít.",
    author: "Dominika Čechová",
    role: "zakladatelka projektu pis_hezky",
  },
];

export default function HomepageTestimonials() {
  return (
    <Section ariaLabel="reference" className="bg-pink-50">
      <SectionHeading tag="Reference" heading="Co říkají ostatní" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <TestimonialCard key={t.author} {...t} />
        ))}
      </div>
    </Section>
  );
}
