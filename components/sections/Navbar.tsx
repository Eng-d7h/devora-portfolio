"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight , Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { links } from "@/data/navigation";

const linkBase =
  "relative z-10 rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground";
const linkActive = "text-foreground font-medium";

type PillLinksProps = {
  items: typeof links;
  active: string;
  onSelect: (label: string) => void;
  short?: boolean;
  className?: string;
};

function PillLinks({ items, active, onSelect, short = false, className }: PillLinksProps) {
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
  const update = () => {
    const el = refs.current[active];
    if (el && el.offsetWidth > 0) {
      setPill({ left: el.offsetLeft, width: el.offsetWidth });
    } else {
      setPill((prev) => ({ ...prev, width: 0 }));
    }
  };

  update();
  document.fonts.ready.then(() => {
    update();
    setReady(true);
  });
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, [active]);

  return (
    <div className={cn("relative items-center gap-1", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-0 bottom-0 left-0 rounded-full bg-foreground/10",
          ready && "transition-all duration-300 ease-out"
        )}
        style={{
          transform: `translateX(${pill.left}px)`,
          width: pill.width,
          opacity: pill.width ? 1 : 0,
        }}
      />
      {items.map((link) => (
        <Link
          key={link.key}
          href={link.href}
          ref={(el) => {
            refs.current[link.label] = el;
          }}
          onClick={() => onSelect(link.label)}
          className={cn(linkBase, short && "px-3", link.label === active && linkActive)}
        >
          {short ? link.short : link.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [open, setOpen] = useState(false);

  useEffect(() => {
  const update = () => {
    const middle = window.innerHeight / 2;
    let current = links[0].label;
    let closestTop = -Infinity;

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (!section) return;
      const top = section.getBoundingClientRect().top;
      if (top <= middle && top > closestTop) {
        closestTop = top;
        current = link.label;
      }
    });

    setActive(current);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  return () => {
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  };
}, []);
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="relative flex items-center gap-2 rounded-full border bg-card/80 px-2 py-1.5 text-foreground shadow-lg backdrop-blur">
        <Link href="#home" className="px-3 font-bold text-primary">
          DEVORA
        </Link>

        <div className="h-5 w-px bg-border" />

       {/* Desktop: all links except Contact */}
<PillLinks
  items={links.filter((link) => link.href !== "#contact")}
  active={active}
  onSelect={setActive}
  className="hidden md:flex"
/>

{/* Mobile: shortcuts only */}
<PillLinks
  items={links.filter((link) => link.mobile)}
  active={active}
  onSelect={setActive}
  short
  className="flex md:hidden"
/>

        <div className="h-5 w-px bg-border" />

        <Link
  href="#contact"
  onClick={() => setActive("CONTACT")}
  className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 md:inline-flex"
>
  Contact
  <ArrowUpRight className="size-4" />
</Link>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2 hover:bg-foreground/5 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>

        {open && (
          <div className="absolute inset-x-0 top-full mt-2 flex flex-col gap-1 rounded-2xl border bg-card p-2 shadow-lg md:hidden">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setOpen(false);
                }}
                className={cn(
                  linkBase,
                  link.label === active && "bg-foreground/10 text-foreground font-medium"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
  href="#contact"
  onClick={() => setActive("CONTACT")}
  className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 md:inline-flex"
>
  Contact
  <ArrowUpRight className="size-4" />
</Link>
          </div>
        )}
      </nav>
    </header>
  );
}