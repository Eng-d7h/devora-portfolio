import { ArrowRight, Check } from "lucide-react";
import Reveal from "../ui/Reveal";

const expectations = [
  "NDA signed when required",
  "No client contact unless you ask",
  "Code and docs in your repository",
  "Replies within 24 hours on weekdays",
];

const steps = [
  { title: "Brief", description: "Send the Figma file, the pages you need and your deadline." },
  { title: "Scope & Quote", description: "You get a clear scope, timeline and fixed quote before I start." },
  { title: "Build", description: "Next.js, TypeScript and Tailwind, with clean, reusable components." },
  { title: "Preview", description: "First sections live on a preview link within 48 hours." },
  { title: "QA", description: "Tested on mobile, tablet and desktop, and checked in Lighthouse." },
  { title: "Handover", description: "Code pushed to your repo with a short README. Your brand only." },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-16 md:py-28">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <Reveal>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[0.95] tracking-tighter">
            Your frontend partner, behind the scenes.
          </h2>
          </Reveal>
          <Reveal delay={0.1}>
          <p className="mt-6 max-w-md text-muted-foreground">
            I&apos;m Abdelrahman, a frontend developer based in Türkiye. I work for design and
            web agencies, turning approved Figma designs into production-ready Next.js sites,
            so you can take on more projects without hiring.
          </p>
          </Reveal>

          <ul className="mt-8 flex flex-col gap-3">
            {expectations.map((item, index) => (
  <Reveal as="li" key={item} delay={0.15 + index * 0.05} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                {item}
              </Reveal>
            ))}
          </ul>

          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-medium transition hover:text-primary"
          >
            Start with a small paid task
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </a>
        </div>

        <ol className="flex flex-col gap-8 border-l pl-8">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.1} className="relative">
              <span className="absolute -left-[45px] top-0 grid size-6 place-items-center rounded-full border bg-background text-xs font-medium text-primary">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}