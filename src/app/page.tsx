import CallToAction from "@/sections/CallToAction";
import FeaturedProducts from "@/sections/Featured";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import LocationSection from "@/sections/Location";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <section className="text-center py-20 flex flex-col gap-50">
      <Hero/>
      <FeaturedProducts/>
      <CallToAction/>
      <Services/>
      <Testimonials/>
      <Gallery/>
      <LocationSection/>
    </section>
  );
}
