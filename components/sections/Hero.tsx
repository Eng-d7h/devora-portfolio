import { ArrowRight } from "lucide-react";

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background text-foreground px-4 pt-36 py-6 md:py-28 "
    >
      <div aria-hidden="true" className="bg-grid absolute inset-0" />

      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="inline-flex rounded-full border bg-card px-4 py-1.5 text-xs font-semibold shadow-sm">
              For Design Agencies
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[0.95] tracking-tighter">
              <span className="text-primary">Front-end</span>
              <br />
              Developer.
            </h1>

            <p className="mt-8 max-w-xs text-base md:text-lg leading-relaxed text-foreground/80">
              I turn your Figma designs into fast, pixel-perfect Next.js
              websites, delivered under your brand.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary py-1 pl-1 pr-5 text-sm font-medium text-primary-foreground shadow-xl transition hover:bg-primary/90"
            >
              <span className="grid size-9 place-items-center rounded-full bg-primary-foreground text-primary">
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </span>
              Book a call with me
            </a>
          </div>

          <div
  id="hero-stack-anchor"
  aria-hidden="true"
  className="relative hidden aspect-[4/3] w-full md:block"
>
  <div className="absolute left-1/2 top-1/2 aspect-square w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[100px]" />
  <div className="absolute left-1/2 top-1/2 aspect-square w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20" />
  <div className="absolute left-1/2 top-1/2 aspect-square w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
</div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-y py-6 text-center md:mt-24 md:flex-row md:justify-between md:py-10 md:text-left">
  <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
    Built with
  </p>
  <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:justify-end md:gap-x-8">
    {stack.map((tech) => (
      <li key={tech}>{tech}</li>
    ))}
  </ul>
</div>
      </div>
    </section>
  );
}