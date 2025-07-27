import About from "@/components/About";
import Blogs from "@/components/Blogs";
import { Footer } from "@/components/Footer";
import LocalTime from "@/components/LocalTime";
import { FixedModeToggle } from "@/components/ModeToggle";
import OnekoCat from "@/components/OnekoCat";

import Projects from "@/components/Projects";
import { Quote } from "@/components/Quote";

import Skills from "@/components/Skills";
import { Separator } from "@/components/ui/separator";





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
        <Separator />
        <Footer />
        

      </div>
      
    </div>
    
  );
}
