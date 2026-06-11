import Button from "@/components/button";
import Section from "@/components/section";

export default function HomepageCta() {
  return (
    <Section
      ariaLabel="kontakt"
      className="bg-pink"
      innerClassName="text-center"
    >
      <p className="font-heading font-semibold uppercase tracking-widest text-sm text-white/70 mb-4">
        Pojďme na to
      </p>
      <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-6">
        Jsem klub psáčů —{" "}
        <span className="font-decorative font-normal">napiš mi!</span>
      </h2>
      <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
        Máš otázku ke kurzům, redakci nebo mentoringu? Nebo jen chceš vědět
        víc? Ozvi se.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button label="Přejít na kontakt" href="/kontakt" inverted />
        <a
          href="mailto:petr@klubpsacu.cz"
          className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
        >
          petr@klubpsacu.cz
        </a>
      </div>
    </Section>
  );
}
