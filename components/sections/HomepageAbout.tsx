import Button from "@/components/button";
import Section from "@/components/section";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

export default function HomepageAbout() {
  return (
    <Section
      ariaLabel="o mně"
      innerClassName="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      {/* Text */}
      <div className="text-left">
        <p className="font-heading text-dark/50 text-xl mb-1">jsem</p>
        <h2 className="font-heading font-extrabold text-6xl lg:text-7xl text-dark mb-10 leading-none">
          Petr Hanel
        </h2>

        <div className="flex flex-row gap-5">
          <span className="text-pink font-semibold text-3xl leading-none select-none">
            &mdash;
          </span>
          <div>
            <p className="text-lg text-dark/75 leading-relaxed mb-8">
              <Balancer>
                Sedm let jsem žil v Nizozemsku, kde jsem se od roku 2015 věnoval
                storytellingu a angloamerické dramaturgii. Po návratu do Česka
                jsem založil Klub psáčů, vedu podcast, vyučuju a rediguju.
                Nedávno mi vyšel románový debut.
              </Balancer>
            </p>
            <Button label="Víc o mně" href="/o-mne" />
          </div>
        </div>
      </div>

      {/* Portrait */}
      <div className="flex justify-center lg:justify-end">
        <div className="bg-dark rounded-xl w-full max-w-sm flex items-end justify-center relative">
          <div className="absolute top-16 left-16 w-full h-full comic-box rotate-[185deg]"></div>
          <div className="absolute top-10 left-5 w-full h-full bg-pink-400 rotate-[182deg] mix-blend-multiply"></div>
          <div className="absolute -top-8 -left-8 w-full h-full comic-box -rotate-[8deg]"></div>
          <Image
            src="/img/photos/petr.webp"
            alt="Petr Hanel"
            width={400}
            height={500}
            className="w-full h-auto object-contain z-10"
          />
        </div>
      </div>
    </Section>
  );
}
