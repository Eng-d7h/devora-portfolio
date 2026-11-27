import { Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "../ui/ContactForm";
import Reveal from "../ui/Reveal";

const details = [
  { id: 1, icon: Mail, label: "Email", value: "DEVOORA999@gmail.com", href: "mailto:devoora999@gmail.com" },
  { id: 2, icon: Clock, label: "Response time", value: "Within 24 hours", href: "" },
  { id: 3, icon: MapPin, label: "Based in", value: "Türkiye · overlaps US mornings", href: "" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-28">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Reveal>
          <h2 className="text-4xl md:text-6xl font-semibold leading-[0.95] tracking-tighter">
            Let&apos;s work together.
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Send me your Figma file or a short brief. I&apos;ll reply with a timeline and a quote.
          </p>
          </Reveal>
          
          <ul className="mt-10 flex flex-col gap-6">
            {details.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id} className="flex items-center gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-full border bg-card text-primary">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium transition hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
            <Reveal delay={0.15}>
        <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}