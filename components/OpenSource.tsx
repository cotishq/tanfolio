import { ArrowUpRight, GitMerge, GitPullRequest } from "lucide-react";
import { OPEN_SOURCE, type OpenSourceContribution } from "@/config/openSource";
import { Panel, PanelDescription, PanelHeader, PanelTitle, PanelTitleSup } from "./Panel";

export default function OpenSource() {
  const totalPrs = OPEN_SOURCE.reduce((sum, c) => sum + c.prs.length, 0);

  return (
    <Panel id="open-source" className="font-body">
      <PanelHeader>
        <PanelTitle>
          <a href="#open-source">Open Source</a>
          {totalPrs > 0 && <PanelTitleSup>({totalPrs})</PanelTitleSup>}
        </PanelTitle>
        <PanelDescription>Where most of my serious work lives.</PanelDescription>
      </PanelHeader>

      {OPEN_SOURCE.length === 0 ? (
        <p className="flex items-center gap-2 p-4 text-sm text-muted-foreground">
          <span className="size-2 animate-pulse rounded-full bg-orange-400" aria-hidden />
          Contributions list coming soon...
        </p>
      ) : (
        <div>
          {OPEN_SOURCE.map((contribution) => (
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
      <div className="flex items-center">
        <span className="mx-4 flex size-6 shrink-0 items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://github.com/${owner}.png?size=48`}
            alt=""
            className="size-6 rounded-md border border-line"
            loading="lazy"
          />
        </span>
        <div className="flex-1 border-l border-dashed border-line p-4">
          <a
            href={`https://github.com/${contribution.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 text-lg leading-snug font-medium hover:underline underline-offset-4"
          >
            {contribution.repo}
            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground" />
          </a>
          {contribution.description && (
            <p className="text-sm text-muted-foreground">{contribution.description}</p>
          )}
        </div>
      </div>

      <ul className="border-t border-line">
        {contribution.prs.map((pr) => (
          <li key={pr.url} className="flex items-center">
            <span className="mx-4 flex size-6 shrink-0 items-center justify-center">
              {pr.status === "merged" ? (
                <GitMerge className="size-4 text-purple-400" aria-label="Merged" />
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
    </div>
  );
}
