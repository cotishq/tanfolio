import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import LocalTime from "@/components/LocalTime";
import { FixedModeToggle } from "@/components/ModeToggle";
import { Panel, PanelHeader } from "@/components/Panel";
import { PanelSeparator } from "@/components/PanelSeparator";

export const metadata: Metadata = {
  title: "Resume · Tanishq Patil",
};

export default function ResumePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <FixedModeToggle />
      <LocalTime />

      <main className="mx-auto w-full max-w-3xl isolate px-2 pt-24 pb-16 md:px-0">
        <PanelSeparator />
        <Panel className="font-body">
          <PanelHeader className="flex items-center justify-between">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              Home
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-line px-3 py-1.5 text-sm hover:bg-muted/40"
            >
              <Download className="size-3.5" />
              Download
            </a>
          </PanelHeader>
          <iframe
            src="/resume.pdf"
            title="Tanishq Patil resume"
            className="h-[80vh] w-full bg-white"
          />
        </Panel>
        <PanelSeparator />
      </main>
    </div>
  );
}
