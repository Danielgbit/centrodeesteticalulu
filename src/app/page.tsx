import CallToAction from "@/sections/CallToAction";
import FeaturedProducts from "@/sections/Featured";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <section className="text-center py-20 flex flex-col gap-50">
      <Hero/>
      <FeaturedProducts/>
      <CallToAction/>
    </section>
  );
}
