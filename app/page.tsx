import About from "@/components/About";
import Blogs from "@/components/Blogs";
import LocalTime from "@/components/LocalTime";
import { FixedModeToggle } from "@/components/ModeToggle";

import Projects from "@/components/Projects";
import { Quote } from "@/components/Quote";

import Skills from "@/components/Skills";





export default function Home() {
  return (
    <div>
      <FixedModeToggle />
      <LocalTime />
      <div className="w-full flex flex-col items-center px-4">
        <About />
        <Skills />
        <Projects />

        <hr className="my-8 border-muted/30" />

        <Blogs />
        <Quote />
        

      </div>
      
    </div>
    
  );
}
