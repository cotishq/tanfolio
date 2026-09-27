"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef, useState } from "react";
import { Panel } from "./Panel";

const GITHUB_USERNAME = "cotishq";

type Activity = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const CALENDAR_STYLE = { margin: "0 auto" };

const CALENDAR_THEME = {
    dark: [
        "rgb(38, 38, 38)",
        "rgb(100, 100, 100)",
        "rgb(150, 150, 150)",
        "rgb(200, 200, 200)",
        "rgb(255, 255, 255)",
    ],
    light: [
        "rgb(235, 237, 240)",
        "rgb(155, 155, 155)",
        "rgb(100, 100, 100)",
        "rgb(50, 50, 50)",
        "rgb(0, 0, 0)",
    ],
};

export default function GithubHeatmap() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [total, setTotal] = useState<number | null>(null);
    const totalRef = useRef<number | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    // transformData runs during the calendar's render, so the total is published once its DOM updates.
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const observer = new MutationObserver(() => setTotal(totalRef.current));
        observer.observe(el, { childList: true, subtree: true });
        return () => observer.disconnect();
    }, [mounted]);

    const captureTotal = useCallback((data: Activity[]) => {
        totalRef.current = data.reduce((sum, day) => sum + day.count, 0);
        return data;
    }, []);

    return (
        <Panel className="screen-line-top-none">
            <h2 className="sr-only">GitHub contributions</h2>
            {!mounted ? (
                <div className="h-[178px] w-full animate-pulse bg-muted/20" />
            ) : (
                <figure className="py-4 font-body">
                    {/* rtl makes the scroll start at the most recent weeks on narrow screens */}
                    <div
                        ref={scrollRef}
                        dir="rtl"
                        className="overflow-x-auto px-3 [scrollbar-width:none] *:max-w-none! *:[direction:ltr]"
                    >
                        <GitHubCalendar
                            username={GITHUB_USERNAME}
                            colorScheme={resolvedTheme as "light" | "dark"}
                            fontSize={13}
                            blockSize={12}
                            blockMargin={2}
                            blockRadius={0}
                            showTotalCount={false}
                            showColorLegend={false}
                            transformData={captureTotal}
                            style={CALENDAR_STYLE}
                            theme={CALENDAR_THEME}
                        />
                    </div>
                    <figcaption className="px-3 pt-2 text-sm text-pretty tabular-nums">
                        {total !== null && <>{total.toLocaleString("en-IN")} contributions in the last year. </>}
                        Source:{" "}
                        <a
                            href={`https://github.com/${GITHUB_USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            GitHub
                        </a>
                        .
                    </figcaption>
                </figure>
            )}
        </Panel>
    );
}
