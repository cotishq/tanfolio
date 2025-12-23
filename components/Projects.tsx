import { ProjectCard } from "@/components/ProjectCard";


export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl border-b border-neutral-300 dark:border-white/10  font-display mb-3 ">Proof of Work</h2>
        <p className="text-muted-foreground font-body">
          Proudly presenting the code that didn't crash. Mostly
        </p>
        
      </div>

      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="lg:col-span-2">
          <ProjectCard
            image="/og.png"
            title="CloudNest"
            description="A modern file storage platform with folders, sharing, soft deletes, auth & dashboard UI."
            tech={["Next.js","Express.js","TailwindCss" , "PostgreSQL", "Prisma", "shadcn/ui", "Clerk","ImageKit"]}
            github="https://github.com/cotishq/cloudnest"
            live="https://cloudnest-navy.vercel.app"
            status="completed"
          />
        </div>
        
        <ProjectCard
          image="/og.png"
          title="CotTorrent"
          description="A BitTorrent client written in Go implementing core protocol features, magnet links, metadata exchange (BEP 9/10), and peer-to-peer communication."
          tech={["Go", "BitTorrent", "TCP/UDP", "CLI"]}
          github="https://github.com/cotishq/cottorrent"
          live=""
          status="completed"
        />
        
      </div>
    </section>
  );
}
