import About from "@/components/About";
import Blogs from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import GithubHeatmap from "@/components/GithubHeatmap";
import LocalTime from "@/components/LocalTime";
import { FixedModeToggle } from "@/components/ModeToggle";
import OpenSource from "@/components/OpenSource";
import { PanelSeparator } from "@/components/PanelSeparator";
import Projects from "@/components/Projects";
import { Quote } from "@/components/Quote";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <FixedModeToggle />
      <LocalTime />

      <main className="mx-auto w-full max-w-3xl isolate px-2 pt-24 md:px-0">
        <PanelSeparator />
        <About />
        <GithubHeatmap />
        <PanelSeparator />
        <WorkExperience />
        <PanelSeparator />
        <Skills />
        <PanelSeparator />
        <Projects />
        <PanelSeparator />
        <OpenSource />
        <PanelSeparator />
        <Blogs />
        <PanelSeparator />
        <Quote />
        <PanelSeparator />
      </main>

      <Footer />
    </div>
  );
}
