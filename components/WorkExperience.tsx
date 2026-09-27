import { BriefcaseBusiness, ChevronsUpDown, Infinity as InfinityIcon } from "lucide-react";
import { EXPERIENCES, type Experience, type ExperiencePosition } from "@/config/experience";
import { Panel, PanelHeader, PanelTitle } from "./Panel";
import { IconTile, Tag } from "./Tag";

export default function WorkExperience() {
    return (
        <Panel id="experience" className="font-body">
            <PanelHeader>
                <PanelTitle>
                    <a href="#experience">Experience</a>
                </PanelTitle>
            </PanelHeader>

            <div>
                {EXPERIENCES.map((experience) => (
                    <ExperienceItem key={experience.company} experience={experience} />
                ))}
            </div>
        </Panel>
    );
}

function ExperienceItem({ experience }: { experience: Experience }) {
    return (
        <div className="screen-line-bottom space-y-4 py-4 pr-2 pl-4 last:after:content-none">
            <div className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center" aria-hidden>
                    {experience.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={experience.logo}
                            alt=""
                            className={`size-6 object-contain ${experience.invertLogoInLight ? "invert dark:invert-0" : ""}`}
                        />
                    ) : (
                        <span className="size-2 rounded-full bg-muted-foreground/40" />
                    )}
                </span>
                <h3 className="text-lg leading-snug font-medium">
                    {experience.companyUrl ? (
                        <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                            {experience.company}
                        </a>
                    ) : (
                        experience.company
                    )}
                </h3>
                {experience.isCurrent && (
                    <span className="relative flex size-2.5" aria-label="Current">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500/60" />
                        <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
                    </span>
                )}
            </div>

            <div className="relative space-y-4 before:absolute before:top-0 before:bottom-2 before:left-3 before:w-px before:bg-line">
                {experience.positions.map((position) => (
                    <PositionItem key={`${position.title}-${position.start}`} position={position} />
                ))}
            </div>
        </div>
    );
}

function PositionItem({ position }: { position: ExperiencePosition }) {
    const header = (
        <>
            <div className="relative z-1 mb-1 flex items-start gap-3">
                <IconTile className="bg-background">
                    <BriefcaseBusiness />
                </IconTile>
                <h4 className="flex-1 font-medium text-base">{position.title}</h4>
                {position.description && position.description.length > 0 && (
                    <ChevronsUpDown className="size-4 shrink-0 text-muted-foreground" aria-hidden />
                )}
            </div>

            <p className="flex flex-wrap items-center gap-2 pl-9 text-sm text-muted-foreground tabular-nums">
                {position.employmentType && (
                    <>
                        <span>{position.employmentType}</span>
                        <span className="h-4 w-px bg-line" aria-hidden />
                    </>
                )}
                <span className="flex items-center gap-1">
                    {position.start}
                    <span className="font-code">—</span>
                    {position.end ?? <InfinityIcon className="size-4" aria-label="Present" />}
                </span>
                <span className="h-4 w-px bg-line" aria-hidden />
                <span>{formatDuration(position.start, position.end)}</span>
            </p>
        </>
    );

    return (
        <div className="relative">
            {position.description && position.description.length > 0 ? (
                <details className="group">
                    <summary className="cursor-pointer list-none rounded-lg py-1 pr-1 hover:bg-muted/40 [&::-webkit-details-marker]:hidden">
                        {header}
                    </summary>
                    <ul className="list-disc space-y-1.5 pt-2 pl-14 text-sm leading-relaxed text-muted-foreground marker:text-muted-foreground/60 md:text-base">
                        {position.description.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </details>
            ) : (
                <div className="py-1">{header}</div>
            )}

            {position.skills && position.skills.length > 0 && (
                <ul className="flex flex-wrap gap-1.5 pt-2 pl-9">
                    {position.skills.map((skill) => (
                        <li key={skill} className="flex">
                            <Tag>{skill}</Tag>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function parsePeriod(period: string) {
    const [month, year] = period.split(".").map(Number);
    return year * 12 + (month - 1);
}

function formatDuration(start: string, end?: string) {
    const now = new Date();
    const endMonths = end ? parsePeriod(end) : now.getFullYear() * 12 + now.getMonth();
    const total = endMonths - parsePeriod(start) + 1;
    if (total <= 0) return "";
    const years = Math.floor(total / 12);
    const months = total % 12;
    if (years === 0) return `${months}m`;
    return months === 0 ? `${years}y` : `${years}y ${months}m`;
}
