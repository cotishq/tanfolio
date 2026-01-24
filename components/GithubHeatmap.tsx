"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GithubHeatmap() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-full flex justify-center py-4">
                <div className="w-full max-w-4xl overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm p-4 h-[188px] animate-pulse bg-muted/20" />
            </div>
        );
    }

    return (
        <div className="w-full flex justify-center py-4">
            <div className="w-full max-w-4xl overflow-hidden rounded-xl border bg-card/50 backdrop-blur-sm p-4">
                <h3 className="font-display text-lg mb-4 text-center">Days I <span className="text-primary">Coded</span></h3>
                <div className="flex justify-center">
                    <GitHubCalendar
                        username="cotishq"
                        colorScheme={resolvedTheme as "light" | "dark"}
                        fontSize={12}
                        blockSize={12}
                        blockMargin={4}
                        theme={{
                            dark: [
                                "rgb(45, 45, 45)", // Level 0 (Empty)
                                "rgb(100, 100, 100)", // Level 1
                                "rgb(150, 150, 150)", // Level 2
                                "rgb(200, 200, 200)", // Level 3
                                "rgb(255, 255, 255)", // Level 4 (Highest)
                            ],
                            light: [
                                "rgb(235, 237, 240)", // Level 0
                                "rgb(155, 155, 155)", // Level 1
                                "rgb(100, 100, 100)", // Level 2
                                "rgb(50, 50, 50)",    // Level 3
                                "rgb(0, 0, 0)",       // Level 4
                            ]
                        }}
                        labels={{
                            totalCount: '{{count}} pushes in {{year}}'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
