import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  type: string;
  image: string;
  href: string;
};

export default function ProjectCard({ title, type, image, href }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <Image
      loading="eager"
        src={image}
        alt={title}
        width={1200}
        height={750}
        className="aspect-[16/10] w-full rounded-2xl object-cover object-top shadow-2xl"
      />

      <div
        className="flex items-start justify-between"
        style={{ opacity: "var(--caption-opacity, 1)" }}
      >
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{type}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm transition hover:text-primary"
        >
          View Project <ArrowUpRight className="size-4" />
        </a>
      </div>
    </div>
  );
}