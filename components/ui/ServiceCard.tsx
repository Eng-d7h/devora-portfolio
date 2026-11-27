import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export default function ServiceCard({ title, icon, description }: ServiceCardProps) {
  const Icon = icon;

  return (
    <li className="group flex items-start gap-5">
      <div className="grid size-14 shrink-0 place-items-center rounded-full border bg-card text-primary shadow-lg shadow-primary/10 transition group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </li>
  );
}