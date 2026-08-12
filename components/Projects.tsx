import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="mb-8">
        <h2 className="text-2xl font-display border-b border-neutral-300 dark:border-white/10 pb-2 mb-3">Proof of Work</h2>
        <p className="text-muted-foreground font-body">
          Proudly presenting the code that didn't crash. Mostly
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          image="/kronos2.png"
          title="Kronos"
          description="A distributed event processing pipeline built in Go - featuring gRPC ingestion, Kafka fan-out, multiple consumers, and GitOps-driven deployment on Kubernetes with full observability."
          tech={["Go", "gRPC", "Kafka", "Kubernetes", "Helm", "ArgoCD", "Prometheus"]}
          github="https://github.com/cotishq/kronos"
          live=""
          status="completed"
        />
        <ProjectCard
          image="/shipyard.jpg"
          title="Shipyard"
          description="An MVP deployment orchestration platform for static sites with containerized builds, FIFO retries, MinIO artifact storage, logs/status APIs, and deployment serving by ID."
          tech={["Go", "Echo v5", "PostgreSQL", "MinIO", "Docker", "NGINX"]}
          github="https://github.com/cotishq/shipyard"
          live=""
          status="completed"
        />
        <ProjectCard
          image="/rustis.png"
          title="Rustis"
          description="A Redis clone built from scratch in Rust. This project implements core Redis functionality including data structures, persistence, replication, pub/sub messaging, and more."
          tech={["Rust", "Tokio", "RESP", "Redis"]}
          github="https://github.com/cotishq/Rustis"
          live=""
          status="completed"
        />
        <ProjectCard
          image="/og.png"
          title="CloudNest"
          description="A modern file storage platform with folders, sharing, soft deletes, auth & dashboard UI."
          tech={["Next.js", "Express.js", "TailwindCss", "PostgreSQL", "Prisma", "shadcn/ui", "Clerk", "ImageKit"]}
          github="https://github.com/cotishq/cloudnest"
          live="https://cloudnest-navy.vercel.app"
          status="completed"
        /> 
      </div>
    </section>
  );
}
