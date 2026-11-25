"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionStyle,
  type MotionValue,
} from "motion/react";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    id: 1,
    title: "A1 Auto Workshop",
    type: "Online booking + WhatsApp reminders for a car repair shop",
    image: "/web1.webp",
    href: "https://www.a1adel.com/",
  },
  {
    id: 2,
    title: "Dental Clinic",
    type: "Patients book appointments online, no phone calls needed",
    image: "/web2.webp",
    href: "https://eng-d7h.github.io/Dental-clinic/",
  },
  {
    id: 3,
    title: "Lone Star Plumbing",
    type: "Turns emergency visitors into calls and quote requests",
    image: "/web3.webp",
    href: "https://plumbing-landing-steel.vercel.app/",
  },
  {
    id: 4,
    title: "Fiamma Trattoria",
    type: "Showcases the menu and drives table reservations",
    image: "/web4.webp",
    href: "https://restaurant-landing-one-self.vercel.app/",
  },
];

// Pile shape in the hero: front card first, the others peek from behind
const fan = [
  { x: 0, y: 0, rotate: -4 },
  { x: 30, y: -25, rotate: 6 },
  { x: -35, y: -10, rotate: -10 },
  { x: 15, y: -40, rotate: 12 },
];

const PILE_SCALE = 0.7;

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

type StackedCardProps = {
  index: number;
  scrollY: MotionValue<number>;
  end: MotionValue<number>;
  enabled: boolean;
  children: ReactNode;
};

function StackedCard({ index, scrollY, end, enabled, children }: StackedCardProps) {
  const cellRef = useRef<HTMLDivElement>(null);
  const dx = useMotionValue(0);
  const dy = useMotionValue(0);
  const startScale = useMotionValue(1);
  const pile = fan[index % fan.length];

useEffect(() => {
  if (!enabled) return;

  const measure = () => {
    const anchor = document.getElementById("hero-stack-anchor");
    const cell = cellRef.current;
    if (!anchor || !cell) return;

    const a = anchor.getBoundingClientRect();
    const c = cell.getBoundingClientRect();

    dx.set(a.left + a.width / 2 - (c.left + c.width / 2) + pile.x);
    dy.set(a.top + a.height / 2 - (c.top + c.height / 2) + pile.y);
    startScale.set(Math.min(a.width / c.width, 1) * PILE_SCALE);
  };

  measure();
  const observer = new ResizeObserver(measure);
  observer.observe(document.body);
  document.fonts.ready.then(measure);
  window.addEventListener("resize", measure);

  return () => {
    observer.disconnect();
    window.removeEventListener("resize", measure);
  };
}, [enabled, dx, dy, startScale, pile.x, pile.y]);

  const progress = useTransform([scrollY, end], ([s, e]: number[]) => clamp(s / e));
  const x = useTransform([progress, dx], ([p, d]: number[]) => d * (1 - p));
  const y = useTransform([progress, dy], ([p, d]: number[]) => d * (1 - p));
  const rotate = useTransform(progress, [0, 1], [pile.rotate, 0]);
  const scale = useTransform([progress, startScale], ([p, s]: number[]) => s + (1 - s) * p);
  const captionOpacity = useTransform(progress, [0.8, 1], [0, 1]);

  const style = {
    x,
    y,
    rotate,
    scale,
    zIndex: 40 - index,
    "--caption-opacity": captionOpacity,
  } as MotionStyle;

  return (
    <div ref={cellRef}>
      {enabled ? (
        <motion.div className="relative" style={style}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </div>
  );
}

export default function Projects() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();
  const end = useMotionValue(1);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
  const measure = () => {
    const grid = gridRef.current;
    if (!grid) return;
    const top = grid.getBoundingClientRect().top + window.scrollY;
    end.set(Math.max(top - window.innerHeight * 0.25, 1));
  };

  measure();
  const observer = new ResizeObserver(measure);
  observer.observe(document.body);
  document.fonts.ready.then(measure);
  window.addEventListener("resize", measure);

  return () => {
    observer.disconnect();
    window.removeEventListener("resize", measure);
  };
}, [end]);

  const animate = isDesktop && !reduceMotion;

  return (
    <section id="portfolio" className="relative mx-auto max-w-5xl overflow-x-clip px-4 py-20 md:py-28">
  <div
    aria-hidden="true"
    className="absolute left-1/2 top-1/2 aspect-square w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]"
  />

  <h2 className="relative text-4xl md:text-6xl font-semibold tracking-tighter">Latest Projects</h2>

      <div ref={gridRef} className="relative mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <StackedCard
            key={project.id}
            index={index}
            scrollY={scrollY}
            end={end}
            enabled={animate}
          >
            <ProjectCard
              title={project.title}
              type={project.type}
              image={project.image}
              href={project.href}
            />
          </StackedCard>
        ))}
      </div>
    </section>
  );
}