import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type ServiceCardProps = {
  title: string;
  icon: LucideIcon;
  description: string;
  index: number;
};

export default function ServiceCard({ title, icon, description , index}: ServiceCardProps) {
  const Icon = icon;

  return (
    
   
      <Reveal as="li" delay={index * 0.1} className="group flex items-start gap-5">
      <div className="grid size-14 shrink-0 place-items-center rounded-full border bg-card text-primary shadow-lg shadow-primary/10 transition group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      </Reveal>
    
    
  );
}