import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

export function ProjectCard({ image, title, description, tech, github, live }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:shadow-lg transition">
      <Image
        src={image}
        alt={title}
        width={320}
        height={200}
        className="rounded-lg object-cover"
      />

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-display">{title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {tech.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-zinc-800 px-3 py-1 rounded text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github size={18} />
          </a>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
