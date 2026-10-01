import Link from "next/link";
import { ArrowUpRight, ChevronsUpDown, GitMerge, GitPullRequest, GitPullRequestClosed } from "lucide-react";
import { FEATURED_OPEN_SOURCE, type OpenSourceContribution } from "@/config/openSource";
import { Panel, PanelDescription, PanelHeader, PanelTitle, PanelTitleSup } from "./Panel";

export default function OpenSource({
  contributions = FEATURED_OPEN_SOURCE,
  id = "open-source",
  homeLink = false,
}: {
  contributions?: OpenSourceContribution[];
  id?: string;
  homeLink?: boolean;
}) {
  return (
    <Panel id={id} className="font-body">
      <PanelHeader>
        <div className="flex items-baseline justify-between gap-4">
          <PanelTitle>
            <a href={`#${id}`}>Open Source</a>
            {contributions.length > 0 && <PanelTitleSup>({contributions.length})</PanelTitleSup>}
          </PanelTitle>
          {homeLink ? (
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
          ) : (
            <Link href="/oss" className="text-sm text-muted-foreground hover:text-foreground">
              All
            </Link>
          )}
        </div>
        <PanelDescription>Where most of my serious work lives.</PanelDescription>
      </PanelHeader>

      {contributions.length === 0 ? (
        <p className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
          <span className="size-2 animate-pulse rounded-full bg-orange-400" aria-hidden />
          Contributions list coming soon...
        </p>
      ) : (
        <div>
          {contributions.map((contribution) => (
            <ContributionItem key={contribution.repo} contribution={contribution} />
          ))}
        </div>
      )}
    </Panel>
  );
}

function ContributionItem({ contribution }: { contribution: OpenSourceContribution }) {
  const owner = contribution.repo.split("/")[0];

  return (
    <div className="border-b border-line last:border-none">
      <details className="group">
      <summary className="flex cursor-pointer list-none items-center hover:bg-muted/30 [&::-webkit-details-marker]:hidden">
        <span className="mx-4 flex size-6 shrink-0 items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={contribution.logo ?? `https://github.com/${owner}.png?size=48`}
            alt=""
            className={`size-6 rounded-md object-contain ${contribution.invertLogoInLight ? "invert dark:invert-0" : ""} ${contribution.invertLogoInDark ? "dark:invert" : ""} ${contribution.logo ? "" : "border border-line"}`}
            loading="lazy"
          />
        </span>
        <div className="flex flex-1 items-center gap-3 border-l border-dashed border-line p-4">
          <div className="flex-1">
            <h3 className="text-lg leading-snug font-medium">{contribution.title ?? contribution.repo}</h3>
            {contribution.role && (
              <p className="text-sm text-muted-foreground">{contribution.role}</p>
            )}
            {contribution.description && (
              <p className="text-sm text-muted-foreground">{contribution.description}</p>
            )}
          </div>
          <a
            href={`https://github.com/${contribution.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${contribution.title ?? contribution.repo} on GitHub`}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowUpRight className="size-4" />
          </a>
          <ChevronsUpDown className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        </div>
      </summary>

      <ul className="border-t border-line">
        {contribution.prs.map((pr) => (
          <li key={pr.url} className="flex items-center">
            <span className="mx-4 flex size-6 shrink-0 items-center justify-center">
              {pr.status === "merged" ? (
                <GitMerge className="size-4 text-purple-400" aria-label="Merged" />
              ) : pr.status === "closed" ? (
                <GitPullRequestClosed className="size-4 text-red-400" aria-label="Closed" />
              ) : (
                <GitPullRequest className="size-4 text-green-500" aria-label="Open" />
              )}
            </span>
            <a
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center gap-2 border-l border-dashed border-line px-4 py-2 text-sm hover:bg-muted/30"
            >
              <span className="flex-1">{pr.title}</span>
              <span className="font-code text-xs text-muted-foreground">
                #{pr.url.split("/").pop()}
              </span>
            </a>
          </li>
        ))}
      </ul>
      </details>
    </div>
  );
}
