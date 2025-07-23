import { Github, ExternalLink, Code, Database, Shield, Globe } from "lucide-react";
import { Badge } from "./ui/badge";

const techIcons : {[key: string] : any} = {
  "Next.js": Code,
  "Express.js": Code,
  "Node.js": Code,
  "PostgreSQL": Database,
  "Prisma": Database,
  "shadcn/ui": Code,
  "Clerk": Shield,
  "ImageKit": Globe,
  "React": Code,
  "TypeScript": Code,
  "Tailwind": Code
};


type Props = {
  image: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  status : string
};

export function ProjectCard({ image, title, description, tech, github, live , status = "completed" }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
      
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {github && (
            <a 
              href={github}
              className="p-2 bg-background/80 backdrop-blur-sm rounded-lg hover:bg-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
            </a>
          )}
          {live && (
            <a 
              href={live}
              className="p-2 bg-primary/80 backdrop-blur-sm rounded-lg hover:bg-primary transition-colors text-primary-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        
        {status && (
          <div className="absolute bottom-4 left-4">
            <Badge 
              variant={status === "completed" ? "default" : "secondary"}
              className="backdrop-blur-sm"
            >
              {status === "completed" ? "Live" : "In Progress"}
            </Badge>
          </div>
        )}
      </div>

      
      <div className="p-6">
        <h3 className="text-xl font-display mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 font-body leading-relaxed">
          {description}
        </p>

        
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => {
            const Icon = techIcons[item];
            return (
              <div 
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-muted/50 rounded-full text-xs font-medium hover:bg-muted transition-colors"
              >
                {Icon && <Icon size={12} />}
                {item}
              </div>
            );
          })}
        </div>

        
        <div className="flex gap-3 pt-2 border-t">
          {github && (
            <a 
              href={github}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={14} />
              Code
            </a>
          )}
          {live && (
            <a 
              href={live}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


