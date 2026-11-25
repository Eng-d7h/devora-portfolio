import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroBg from "@/public/hero-bg.webp";

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 text-center text-foreground"
    >
      {/* Layer 1: background image */}
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />

      {/* Layer 2: overlay + bottom fade */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />

      {/* Layer 3: content */}
      <div className="relative z-10 mx-auto max-w-3xl pt-32 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Status pill */}
        <p className="inline-flex items-center gap-2 rounded-full border bg-card/50 px-4 py-1 text-sm text-muted-foreground backdrop-blur">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          Available for agency projects
        </p>

        {/* Headline */}
        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight">
  <span className="text-primary">Front-end</span> Developer
</h1>

        {/* Subtext */}
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
  I&apos;m Abdelrahman. I turn agency Figma designs into fast,
  pixel-perfect Next.js websites, delivered under your brand.
</p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className={cn(buttonVariants(), "rounded-full ")}>
            HIRE ME
          </a>
          <a
            href="#portfolio"
            className={cn(buttonVariants({ variant: "outline" }), "rounded-full backdrop-blur")}
          >
            VIEW MY WORK
          </a>
        </div>

        {/* Tech stack */}
        
      </div>
      <ul className="absolute bottom-8 inset-x-0 z-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-sm text-muted-foreground">
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
    </section>
  );
}