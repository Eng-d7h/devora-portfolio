import { ArrowUp } from "lucide-react";
import { links } from "@/data/navigation";

const socials = [
  { label: "GitHub", href: "https://github.com/Eng-d7h" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile" },
  { label: "Email", href: "mailto:hello@yourdomain.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <a href="#home" className="text-lg font-bold text-primary">
              DEVORA
            </a>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              White-label frontend development for design and web agencies.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {links.map((link) => (
                <li key={link.key}>
                  <a href={link.href} className="transition hover:text-primary">
                    {link.short}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="transition hover:text-primary"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t pt-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {year} DEVORA. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-1 transition hover:text-primary">
            Back to top
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}