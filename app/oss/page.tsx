import type { Metadata } from "next";
import LocalTime from "@/components/LocalTime";
import { FixedModeToggle } from "@/components/ModeToggle";
import OpenSource from "@/components/OpenSource";
import { PanelSeparator } from "@/components/PanelSeparator";
import { OPEN_SOURCE } from "@/config/openSource";

export const metadata: Metadata = {
  title: "Open Source · Tanishq Patil",
};

export default function OpenSourcePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <FixedModeToggle />
      <LocalTime />

      <main className="mx-auto w-full max-w-3xl isolate px-2 pt-24 pb-16 md:px-0">
        <PanelSeparator />
        <OpenSource contributions={OPEN_SOURCE} id="oss" homeLink />
        <PanelSeparator />
      </main>
    </div>
  );
}
