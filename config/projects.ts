export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  status: "completed" | "in-progress";
  /** e.g. "01.2025" or "2025"; shown next to the status when set */
  period?: string;
  isExpanded?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "ProximaDB",
    description:
      "A high-performance vector database with first-class observability, written in Go.",
    tech: ["Go", "HNSW", "gRPC", "OpenTelemetry", "Prometheus", "Grafana"],
    github: "https://github.com/cotishq/proximadb",
    status: "in-progress",
  },
  {
    title: "Kronos",
    description:
      "A distributed event processing pipeline built in Go - featuring gRPC ingestion, Kafka fan-out, multiple consumers, and GitOps-driven deployment on Kubernetes with full observability.",
    tech: ["Go", "gRPC", "Kafka", "Kubernetes", "Helm", "ArgoCD", "Prometheus"],
    github: "https://github.com/cotishq/kronos",
    status: "completed",
    isExpanded: true,
  },
  {
    title: "Shipyard",
    description:
      "An MVP deployment orchestration platform for static sites with containerized builds, FIFO retries, MinIO artifact storage, logs/status APIs, and deployment serving by ID.",
    tech: ["Go", "Echo v5", "PostgreSQL", "MinIO", "Docker", "NGINX"],
    github: "https://github.com/cotishq/shipyard",
    status: "completed",
  },
  {
    title: "Rustis",
    description:
      "A Redis clone built from scratch in Rust. This project implements core Redis functionality including data structures, persistence, replication, pub/sub messaging, and more.",
    tech: ["Rust", "Tokio", "RESP", "Redis"],
    github: "https://github.com/cotishq/Rustis",
    status: "completed",
  },
  {
    title: "CloudNest",
    description:
      "A modern file storage platform with folders, sharing, soft deletes, auth & dashboard UI.",
    tech: ["Next.js", "Express.js", "TailwindCss", "PostgreSQL", "Prisma", "shadcn/ui", "Clerk", "ImageKit"],
    github: "https://github.com/cotishq/cloudnest",
    live: "https://cloudnest-navy.vercel.app",
    status: "completed",
  },
];
