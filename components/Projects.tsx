import { ProjectCard } from "@/components/ProjectCard";
import { ComingSoonCard } from "@/components/ComingSoonCard";

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-display mb-2">Proof of Work</h2>
      <p className="text-muted-foreground mb-10 font-body">
        Showcasing some of the things I've built. More on the way!
      </p>

      <div className="space-y-8">
        <ProjectCard
          image="/og.png"
          title="CloudNest"
          description="A modern file storage platform with folders, sharing, soft deletes, auth & dashboard UI."
          tech={["Next.js","Express.js","Node.js" , "PostgreSQL", "Prisma",  "shadcn/ui", "Clerk","ImageKit"]}
          github="https://github.com/cotishq/cloudnest"
          live="https://cloudnest-navy.vercel.app"
        />

        <ComingSoonCard />
      </div>
    </section>
  );
}
