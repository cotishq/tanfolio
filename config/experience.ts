export type ExperiencePosition = {
  title: string;
  employmentType?: string;
  location?: string;
  /** "MM.YYYY" */
  start: string;
  /** "MM.YYYY"; omit for a current role */
  end?: string;
  /** Each entry renders as a bullet point */
  description?: string[];
  skills?: string[];
};

export type Experience = {
  company: string;
  companyUrl?: string;
  logo?: string;
  /** Set for white-on-transparent logos so they stay visible in light mode */
  invertLogoInLight?: boolean;
  isCurrent?: boolean;
  positions: ExperiencePosition[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "CNCF Harbor",
    companyUrl: "https://github.com/container-registry/harbor-satellite",
    logo: "/cncf-icon.svg",
    isCurrent: true,
    positions: [
      {
        title: "LFX Mentee · Harbor-Satellite",
        employmentType: "Remote",
        start: "09.2026",
        end: "11.2026",
        description: [
          "Designing and implementing an opt-in peer-to-peer artifact distribution system for Harbor-Satellite, enabling OCI images and artifacts to be served across trusted local peers in air-gapped and intermittently connected environments.",
          "Designing peer selection, trust, retries, and failure recovery, while building OCI manifest/blob transfer with digest verification, Prometheus metrics, structured logs, and multi-Satellite integration tests.",
        ],
      },
    ],
  },
  {
    company: "Codehelp",
    logo: "/codehelp.png",
    invertLogoInLight: true,
    positions: [
      {
        title: "Full Stack Developer",
        employmentType: "Remote",
        start: "09.2025",
        end: "11.2025",
        description: [
          "Built and extended backend services using Hono.js and GraphQL, focusing on scalable API design and authentication with better-auth.",
          "Designed an async notification system using AWS SQS/SNS and collaborated with frontend teams on Next.js and shadcn/ui improvements.",
        ],
      },
    ],
  },
];
