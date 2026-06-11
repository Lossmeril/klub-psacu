import Button from "./button";
import Image from "next/image";

const HeroBanner: React.FC = () => {
  return (
    <div className="w-screen overflow-hidden relative bg-dark font-heading">
      <Image
        className="absolute w-full h-screen object-cover z-0"
        src="/img/bg-pink.png"
        alt=""
        fill
        priority
      />
      <div className="flex flex-col justify-center items-center w-screen h-screen text-white text-center relative pt-[15%]">
        <Image
          className="absolute left-1/2 -translate-x-1/2 z-[1] h-auto w-auto"
          src="/img/hanel-portrait-dark.png"
          alt="Petr Hanel"
          width={600}
          height={1000}
          priority
        />
        <div className="z-10">
          <div className="mb-20">
            <p className="text-lg lg:text-2xl font-normal m-0">
              Ahoj. Jmenuju se
            </p>

            <h1 className="text-5xl lg:text-8xl font-extrabold m-0 text-pink">
              Petr Hanel
            </h1>

            <p className="text-lg lg:text-2xl font-normal m-0">a jsem</p>

            <h2 className="font-decorative text-4xl lg:text-8xl font-extrabold m-0 text-pink leading-none">
              z klubu <br className="hidden" /> psáčů
            </h2>
          </div>
          <div className="w-full lg:w-1/2 mx-auto">
            <Button
              label="Chci líp psát!"
              href="/spolupracujme"
              className="text-base lg:text-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
