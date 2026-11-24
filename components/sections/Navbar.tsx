"use client";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { key: 1, label: "HOME", short: "Home", href: "#home", mobile: false },
  { key: 2, label: "ABOUT ME", short: "About", href: "#aboutme", mobile: false },
  { key: 3, label: "MY SERVICE", short: "Services", href: "#service", mobile: true },
  { key: 4, label: "PORTFOLIO", short: "Work", href: "#portfolio", mobile: false },
  { key: 5, label: "TESTIMONIALS", short: "Reviews", href: "#testimonials", mobile: false },
  { key: 6, label: "CONTACT", short: "Contact", href: "#contact", mobile: true },
];

const linkBase =
  "rounded-full px-4 py-1.5 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground";
const linkActive = "bg-foreground/10 text-foreground font-medium";

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [open, setOpen] = useState(false);

  return (
    <header className="dark fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="relative flex items-center gap-2 rounded-full border bg-card/80 backdrop-blur px-2 py-1.5 shadow-lg text-foreground">
        <Link href="/" className="px-3 font-bold text-primary">
          DEVORA
        </Link>

        <div className="bg-border h-5 w-px" />

        {/* Desktop: all links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={cn(linkBase, link.label === active && linkActive)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile: shortcuts only */}
        <div className="flex md:hidden items-center gap-1">
          {links
            .filter((link) => link.mobile)
            .map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={cn(linkBase, "px-3", link.label === active && linkActive)}
              >
                {link.short}
              </Link>
            ))}
        </div>

        <div className="bg-border h-5 w-px" />

        {/* Desktop: CV button */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:block rounded-full bg-primary px-4 py-1.5 text-sm font-medium text-background"
        >
          DOWNLOAD CV
        </a>

        {/* Mobile: menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-full hover:bg-primary/5"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5 " />}
        </button>

        {/* Mobile: dropdown */}
        {open && (
          <div className="absolute top-full mt-2 inset-x-0 flex flex-col gap-1 rounded-2xl border bg-card p-2 shadow-lg md:hidden">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => {
                  setActive(link.label);
                  setOpen(false);
                }}
                className={cn(linkBase, link.label === active && linkActive)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/cv.pdf"
              download
              className="text-background  mt-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-medium "
            >
              DOWNLOAD CV
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}