export type Blog = {
  title: string;
  url: string;
  /** Where it was published, shown under the title */
  source: string;
  date: string;
};

export const BLOGS: Blog[] = [
  {
    title: "Chick-fil-A Had to Build a Kubernetes Fleet to Fry Chicken. There's a Better Way Now.",
    url: "https://x.com/Tanishqstwt/status/2096652500304826857",
    source: "X",
    date: "Sep 2026",
  },
];
