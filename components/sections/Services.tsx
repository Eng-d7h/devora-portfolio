import { ArrowRight, PenTool, LayoutTemplate, Wrench, Gauge } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";

const services = [
  { id: 1, icon: PenTool, title: "Figma to Next.js", description: "Your designs, built pixel-perfect in Next.js, TypeScript and Tailwind." },
  { id: 2, icon: LayoutTemplate, title: "Landing Pages", description: "Fast, responsive pages built to turn visitors into leads." },
  { id: 3, icon: Wrench, title: "Frontend Fixes", description: "Bugs, layout issues and improvements on existing React sites." },
  { id: 4, icon: Gauge, title: "Speed & Responsive", description: "Tested on mobile, tablet and desktop, tuned for Lighthouse." },
];

export default function Services() {
  return (
    <section id="service" className="mx-auto max-w-5xl px-4 py-16 md:py-28">
      <div className="grid gap-12  md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[0.95] tracking-tighter">
            Frontend your agency can rely on.
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            You design and own the client. I build it, test it and hand it back under your brand.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium transition hover:text-primary"
          >
            Let&apos;s work together
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <ul className="flex flex-col gap-10">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}