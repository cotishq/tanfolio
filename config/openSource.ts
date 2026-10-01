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
const OLAKE = "datazip-inc/olake";
const MICROCKS = "microcks/microcks-cli";
const TALAWA = "PalisadoesFoundation/talawa-admin";
const KARMADA = "karmada-io/karmada";

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
  {
    repo: OLAKE,
    title: "olake",
    description: "Replicates databases, Kafka, and S3 into Apache Iceberg.",
    logo: "/olake.png",
    invertLogoInLight: true,
    prs: [
      pr(OLAKE, 1058, "fix: move RetryCount default to config.Validate() across all drivers", "open"),
      pr(OLAKE, 1039, "feat: optional schema discovery and stream validation during sync", "merged"),
    ],
  },
  {
    repo: MICROCKS,
    title: "microcks",
    description: "A CLI for interacting with Microcks test APIs.",
    logo: "/microcks.png",
    prs: [
      pr(MICROCKS, 508, "fix: add missing copyright header to rand_test.go", "merged"),
      pr(MICROCKS, 261, "docs: fix small typo in available commands", "merged"),
    ],
  },
  {
    repo: TALAWA,
    title: "palisadoes",
    description: "Admin portal for the Talawa mobile app.",
    logo: "/palisadoes.png",
    prs: [
      pr(TALAWA, 7203, "fix: resolve ui issues,add currency-aware-donation fallback and migrate history to DataTable", "merged"),
      pr(TALAWA, 7168, "test(organizations): add code-coverage tests and simplify unreachable conditionals", "merged"),
      pr(TALAWA, 7159, "tests/improve code coverage for UserPortalNavigationBarMocks.ts", "merged"),
      pr(TALAWA, 7135, "test(verify-email): remove redundant return and cover verificationFailed fallback branch", "merged"),
      pr(TALAWA, 7088, "chore: remove unused UserListCard component", "merged"),
      pr(TALAWA, 6812, "fix(chat): improve chat-ui/ux and fix admin-modal z-index", "merged"),
      pr(TALAWA, 6580, "feat: add common shell utilities library for install scripts", "merged"),
      pr(TALAWA, 6475, "feat: add Storybook stories for CRUDModalTemplate components", "merged"),
      pr(TALAWA, 6404, "test(Groups): achieve 100% coverage for Groups.tsx by fixing leader search test", "merged"),
      pr(TALAWA, 6397, "test(CampaignModal): add tests for null date handling to achieve 100% coverage", "merged"),
      pr(TALAWA, 6370, "Refactor/avatar as a shared component", "merged"),
      pr(TALAWA, 6296, "fix(setup): add JSDoc, extract env constants and simplify logic", "merged"),
    ],
  },
  {
    repo: KARMADA,
    title: "karmada",
    description: "Multi-cluster Kubernetes orchestration.",
    logo: "/karmada.png",
    prs: [
      pr(KARMADA, 7420, "Automated cherry pick of #7394: fix: record schedule result correctly in the event", "merged"),
      pr(KARMADA, 7419, "Automated cherry pick of #7394: fix: record schedule result correctly in the event", "merged"),
      pr(KARMADA, 7418, "Automated cherry pick of #7394: fix: record schedule result correctly in the event", "merged"),
    ],
  },
];

const FEATURED = [HARBOR, OLAKE, HAMI];

export const FEATURED_OPEN_SOURCE = FEATURED.map(
  (repo) => OPEN_SOURCE.find((contribution) => contribution.repo === repo)!
);
