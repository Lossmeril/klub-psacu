import Section from "@/components/section";
import SectionHeading from "@/components/ui/SectionHeading";
import { ServiceCard, ServiceCardProps } from "@/components/ui/Card";

const services: ServiceCardProps[] = [
  {
    title: "Zajímá mě kurz storytellingu",
    body: "Trápí tě nezajímavé postavy a pocit, že tvé vyprávění místy pokulhává? Vítej ve storytelling matrixu. Tady pochopíš, jak fungují ty nejsilnější příběhy a co chybí tomu tvému 📚",
    cta: "Omrkni kurz",
    href: "/spolupracujme/kurz-storytelling",
  },
  {
    title: "Chci líp psát",
    body: "Máš nemocný rukopis? A můžu ho vidět? Pošli mi text k redakci. Naučím tě na něm, jak psát čtivěji, ať zvýšíš šanci na úspěch u čtenářů i nakladatelů ✍🏻",
    cta: "Zjisti, co ti pomůže",
    href: "/spolupracujme/redakcni-prace",
  },
  {
    title: "Potřebuju bič a mentora",
    body: "Potřebuješ někoho, s kým probereš svoje psaní? Mentora, který ti bude dávat deadliny? Potkáme se online jen ve dvou – ty dáš na stůl téma, já know-how a tvůj progress nabere rychlejší spád 🚀",
    cta: "Nebuď na to sám/a",
    href: "/spolupracujme/individualni-nasup",
  },
  {
    title: "Mám specifické chutě",
    body: "Chceš redakci celého textu, betačtení, dramaturgii scénáře nebo něco úplně jiného? Napiš mi, s čím si nevíš rady a dejme věci do pohybu ✉️",
    cta: "Ozvi se mi",
    href: "/kontakt",
  },
];

export default function HomepageServices() {
  return (
    <Section ariaLabel="služby" className="bg-pink-50">
      <SectionHeading tag="Spolupracujme" heading="Co tě sem přivádí?" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.href} {...service} />
        ))}
      </div>
    </Section>
  );
}
