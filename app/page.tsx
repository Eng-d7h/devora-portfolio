import BrandBanner from "@/components/sections/BrandBanner";
import Contact from "@/components/sections/Contact";
import CtaBanner from "@/components/sections/CtaBanner";
import Guarantees from "@/components/sections/Guarantees";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Divider from "@/components/ui/Divider";

export default function page() {
  return (
    <div>
      <Hero/>
      <Divider/>
      <Projects />
      <Divider/>
      <Services />
      <Divider/>
      <CtaBanner/>
      <Divider/>
      <Guarantees/>
      <Divider/>
      <BrandBanner/>
      <Divider/>
      <Contact/>
      <Divider/>

    </div>
  )
}
