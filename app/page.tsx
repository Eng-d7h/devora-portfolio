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
    </div>
  )
}
