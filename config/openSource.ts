export type PullRequest = {
  title: string;
  url: string;
  status: "merged" | "open";
};

export type OpenSourceContribution = {
  /** "owner/name", the owner's GitHub avatar is used as the icon */
  repo: string;
  description?: string;
  prs: PullRequest[];
};

// Example entry:
// {
//   repo: "kubernetes/kubernetes",
//   description: "Production-grade container orchestration",
//   prs: [
//     {
//       title: "fix: handle nil pointer in kubelet pod status",
//       url: "https://github.com/kubernetes/kubernetes/pull/123456",
//       status: "merged",
//     },
//   ],
// },
export const OPEN_SOURCE: OpenSourceContribution[] = [];
