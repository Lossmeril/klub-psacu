import Section from "@/components/section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card, { CardProps as CommunityCardProps } from "@/components/ui/Card";

const channels: CommunityCardProps[] = [
  {
    emoji: "📸",
    tag: "Instagram",
    title: "@klub_psacu",
    desc: "Pravidelnej přísun tipů o psaní a storytellingu — přímo do feedu.",
    cta: "Sleduj mě",
    href: "https://www.instagram.com/klub_psacu/",
    external: true,
  },
  {
    emoji: "🎙️",
    tag: "Podcast",
    title: "Klub psáčů — podcast",
    desc: "Epizody o storytellingu a angloamerické dramaturgii. Na Spotify i YouTube.",
    cta: "Poslouchej",
    href: "https://open.spotify.com/show/7dTARZQmi66hUrNix1WuKg",
    external: true,
  },
  {
    emoji: "🏠",
    tag: "Komunita",
    title: "Diskordový server",
    desc: "Přidej se do klubovny — sdílej, komentuj a piš spolu s ostatními.",
    cta: "Vstup do klubovny",
    href: "https://discord.gg/7BP3FRj5PT",
    external: true,
  },
  {
    emoji: "☕",
    tag: "Klubovej call",
    title: "Nedělní video call",
    desc: "Každou neděli večer analyzujeme filmy a knihy přes videohovor. Živě, jen pro členy.",
    cta: "Zjisti víc",
    href: "/klub",
    external: false,
  },
];

export default function HomepageCommunity() {
  return (
    <Section ariaLabel="komunita" className="bg-dark">
      <SectionHeading tag="Mimo kurzy" heading="Kde mě najdeš?" inverted />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {channels.map((ch) => (
          <Card key={ch.href} {...ch} />
        ))}
      </div>
    </Section>
  );
}
