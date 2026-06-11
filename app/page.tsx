import HeroBanner from "@/components/heroBanner";
import HomepageServices from "@/components/sections/HomepageServices";
import HomepageAbout from "@/components/sections/HomepageAbout";
import HomepageCommunity from "@/components/sections/HomepageCommunity";
import HomepageTestimonials from "@/components/sections/HomepageTestimonials";
import HomepageCta from "@/components/sections/HomepageCta";

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <HomepageServices />
      <HomepageAbout />
      <HomepageCommunity />
      <HomepageTestimonials />
      <HomepageCta />
    </main>
  );
}
