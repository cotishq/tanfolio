
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
    <div>
      
      <FixedModeToggle />
      <LocalTime />

      
      <div className="w-full flex flex-col items-center">
        <About />
        <Skills />
        <Projects /> 
        <Blogs />    
        <Quote />
        <Footer />
      </div>
    </div>
  );
}