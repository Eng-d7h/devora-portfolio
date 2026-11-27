import { ArrowRight, PenTool, LayoutTemplate, Wrench, Gauge } from "lucide-react";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiFigma, SiGithub } from "react-icons/si";
import ServiceCard from "../ui/ServiceCard";

const services = [
  { id: 1, icon: PenTool, title: "Figma to Next.js", description: "Your designs, built pixel-perfect in Next.js, TypeScript and Tailwind." },
  { id: 2, icon: LayoutTemplate, title: "Landing Pages", description: "Fast, responsive pages built to turn visitors into leads." },
  { id: 3, icon: Wrench, title: "Frontend Fixes", description: "Bugs, layout issues and improvements on existing React sites." },
  { id: 4, icon: Gauge, title: "Speed & Responsive", description: "Tested on mobile, tablet and desktop, tuned for Lighthouse." },
];

const stack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },
  { name: "GitHub", icon: SiGithub },
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
          <div className="mt-10">
  <p className="text-sm font-medium -mt-4 mb-2">My tech stack</p>
  <ul className="mt-4 flex flex-wrap gap-3">
    {stack.map(({ name, icon: Icon }) => (
      <li key={name}>
        <div
          title={name}
          className="grid size-14 place-items-center rounded-2xl border bg-card shadow-lg transition hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
        >
          <Icon className="size-6" aria-hidden="true" />
          <span className="sr-only">{name}</span>
        </div>
      </li>
    ))}
  </ul>
</div>
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