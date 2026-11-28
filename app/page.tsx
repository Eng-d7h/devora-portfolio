import About from "@/components/sections/About";
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
      <About />
      <Divider/>
      <CtaBanner/>
      <Divider/>
      <Services/>
      <Divider/>
      <BrandBanner/>
      <Divider/>
      <Guarantees/>
      <Divider/>
      <Contact/>
      <Divider/>
      

    </div>
  )
}
