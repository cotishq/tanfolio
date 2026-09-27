import { Box, ChevronsUpDown, Github, Link as LinkIcon } from "lucide-react";
import { PROJECTS, type Project } from "@/config/projects";
import { Panel, PanelDescription, PanelHeader, PanelTitle, PanelTitleSup } from "./Panel";
import { IconTile, Tag } from "./Tag";

export default function Projects() {
  return (
    <Panel id="projects" className="font-body">
      <PanelHeader>
        <PanelTitle>
          <a href="#projects">Projects</a>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
        <PanelDescription>Proudly presenting the code that didn&apos;t crash. Mostly</PanelDescription>
      </PanelHeader>

      <div>
        {PROJECTS.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </Panel>
  );
}

function ProjectItem({ project }: { project: Project }) {
  return (
    <div className="border-b border-line last:border-none">
      <details className="group" open={project.isExpanded}>
        <summary className="flex cursor-pointer list-none items-center hover:bg-muted/30 [&::-webkit-details-marker]:hidden">
          <IconTile className="mx-4">
            <Box />
          </IconTile>

          <div className="flex flex-1 items-center gap-3 border-l border-dashed border-line p-4">
            <div className="flex-1">
              <h3 className="mb-0.5 text-lg leading-snug font-medium">{project.title}</h3>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <span
                  className={`size-1.5 rounded-full ${project.status === "completed" ? "bg-green-500" : "bg-yellow-500"}`}
                  aria-hidden
                />
                {project.status === "completed" ? "Completed" : "Under active development"}
                {project.period && <span className="tabular-nums">· {project.period}</span>}
              </p>
            </div>

            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`} className="text-muted-foreground hover:text-foreground">
                <Github className="size-4" />
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title}`} className="text-muted-foreground hover:text-foreground">
                <LinkIcon className="size-4" />
              </a>
            )}
            <ChevronsUpDown className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          </div>
        </summary>

        <div className="space-y-4 border-t border-line p-4">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>
          <ul className="flex flex-wrap gap-1.5">
            {project.tech.map((item) => (
              <li key={item} className="flex">
                <Tag>{item}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
}
