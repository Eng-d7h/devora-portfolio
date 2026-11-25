import ProjectCard from "../ui/ProjectCard";

const projects = [
  { id: 1, title: "Workshop", type: "Website of service", image: "/web1.webp", href: "https://www.a1adel.com/" },
  { id: 2, title: "Dental", type: "Website of service", image: "/web2.webp", href: "https://eng-d7h.github.io/Dental-clinic/" },
  { id: 3, title: "Plumbing", type: "Website of service", image: "/web3.webp", href: "https://plumbing-landing-steel.vercel.app/" },
  { id: 4, title: "Restaurant", type: "Website of service", image: "/web4.webp", href: "https://restaurant-landing-one-self.vercel.app/" },
];

export default function Projects() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <h2 className="text-3xl md:text-4xl font-bold">Latest Projects</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            type={project.type}
            image={project.image}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}