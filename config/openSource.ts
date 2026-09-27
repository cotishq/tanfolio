export type PullRequest = {
  title: string;
  url: string;
  status: "merged" | "open" | "closed";
};

export type OpenSourceContribution = {
  /** "owner/name", used for the GitHub link */
  repo: string;
  /** Shown in the row; falls back to repo */
  title?: string;
  description?: string;
  role?: string;
  /** Falls back to the owner's GitHub avatar */
  logo?: string;
  /** Set for white-on-transparent logos so they stay visible in light mode */
  invertLogoInLight?: boolean;
  /** Set for black-on-transparent logos so they stay visible in dark mode */
  invertLogoInDark?: boolean;
  prs: PullRequest[];
};

const pr = (
  repo: string,
  number: number,
  title: string,
  status: PullRequest["status"]
): PullRequest => ({
  title,
  url: `https://github.com/${repo}/pull/${number}`,
  status,
});

const HARBOR = "container-registry/harbor-satellite";
const SWARM = "sugar-org/swarm-external-secrets";
const HAMI = "Project-HAMi/HAMi";

export const OPEN_SOURCE: OpenSourceContribution[] = [
  {
    repo: "container-registry/harbor-satellite",
    title: "harbor-satellite",
    description: "Brings a central Harbor registry to edge and air-gapped locations.",
    role: "LFX Mentee",
    logo: "/harbor.svg",
    invertLogoInLight: true,
    prs: [
      pr(HARBOR, 656, "ci: unify main and tag publish into one hosted pipeline", "merged"),
      pr(HARBOR, 651, "ci: parallelize release publishing with prebuilt image binaries", "merged"),
      pr(HARBOR, 614, "refactor: move shared internal packages under internal/shared", "merged"),
      pr(HARBOR, 546, "ci: parallelize latest image publishing by platform", "merged"),
      pr(HARBOR, 539, "Containerize lint task tooling", "merged"),
      pr(HARBOR, 500, "feat: implement satellite authentication on sync endpoint", "merged"),
      pr(HARBOR, 492, "docs: add README to ground-control and a root CONTRIBUTING.md", "merged"),
      pr(HARBOR, 490, "docs: fix ground control satellite API routes", "merged"),
    ],
  },
  {
    repo: SWARM,
    title: "sugar-org",
    description:
      "A Docker plugin that manages external secrets providers, such as Vault, for Docker Swarm.",
    logo: "/swarm-external-secrets.png",
    invertLogoInDark: true,
    prs: [
      pr(SWARM, 149, "fix: secret rotation prefix matching", "merged"),
      pr(SWARM, 143, "fix: move rotation tracking metadata logs to trace", "merged"),
      pr(SWARM, 132, "fix: restore monitoring dashboard rendering", "merged"),
      pr(SWARM, 127, "fix: custom vault openbao mount path", "merged"),
      pr(SWARM, 120, "refactor: reduce complexity and deduplicate literals", "merged"),
      pr(SWARM, 101, "feat: validate vault+openbao multi-instance plugin usage in swarm", "merged"),
      pr(SWARM, 95, "docs: use global rotation env vars in docs and examples", "merged"),
    ],
  },
  {
    repo: HAMI,
    title: "HAMi",
    description: "Heterogeneous GPU sharing on Kubernetes.",
    logo: "/hami.png",
    prs: [
      pr(HAMI, 2293, "fix: release node lock on allocate response failure", "merged"),
    ],
  },
];
