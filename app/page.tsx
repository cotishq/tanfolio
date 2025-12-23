
import About from "@/components/About";
import Blogs from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import LocalTime from "@/components/LocalTime";
import { FixedModeToggle } from "@/components/ModeToggle";

import Projects from "@/components/Projects";
import { Quote } from "@/components/Quote";

import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FixedModeToggle />
      <LocalTime />

      <main className="w-full max-w-4xl mx-auto px-6 py-24 space-y-24">
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <Quote />
      </main>
      
      <Footer />
    </div>
  );
}