import { Timer, ShieldCheck, RefreshCw } from "lucide-react";
import GuaranteeCard from "../ui/GuaranteeCard";
import Reveal from "../ui/Reveal";

const guarantees = [
  {
    id: 1,
    icon: Timer,
    title: "48-Hour First Preview",
    description: "You see the first sections live on a preview link within 48 hours of receiving the Figma file.",
    featured: false,
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "100% White-Label",
    description: "Your brand only. I sign your NDA, never contact your client, and my name appears nowhere in the site.",
    featured: true,
  },
  {
    id: 3,
    icon: RefreshCw,
    title: "Revisions Until It Matches",
    description: "Unlimited fixes until the build matches the approved design. New features are quoted separately.",
    featured: false,
  },
];

export default function Guarantees() {
  return (
    <section id="guarantees" className="mx-auto max-w-5xl px-4 py-16 md:py-28">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">Our Guarantees</h2>
        <p className="mt-6 text-muted-foreground">
          Clear process, no surprises. Here&apos;s what every agency project includes.
        </p>
      </Reveal>

      <div className="mt-16 grid items-center gap-6 md:grid-cols-3">
        {guarantees.map((item, index) => (
  <Reveal key={item.id} delay={index * 0.12}>
    <GuaranteeCard
      icon={item.icon}
      title={item.title}
      description={item.description}
      featured={item.featured}
    />
  </Reveal>
))}
      </div>
    </section>
  );
}