import About from "@/components/About";
import LocalTime from "@/components/LocalTime";
import { FixedModeToggle } from "@/components/ModeToggle";
import Projects from "@/components/Projects";
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
        

      </div>
      
    </div>
    
  );
}
