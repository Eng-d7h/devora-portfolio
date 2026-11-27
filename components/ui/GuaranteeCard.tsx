import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type GuaranteeCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  featured?: boolean;
};

export default function GuaranteeCard({
  icon,
  title,
  description,
  featured = false,
}: GuaranteeCardProps) {
  const Icon = icon;

  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-3xl border bg-card px-8 py-12 text-center shadow-sm",
        featured &&
          "border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20 md:-my-4 md:py-16"
      )}
    >
      <Icon
        strokeWidth={1.5}
        className={cn("size-12 text-primary", featured && "text-primary-foreground")}
      />
      <h3 className="mt-8 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>
      <p className={cn("mt-4 text-muted-foreground", featured && "text-primary-foreground/80")}>
        {description}
      </p>
    </div>
  );
}