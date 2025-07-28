
import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaJava } from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPrisma, 
  SiPostgresql, 
  SiJavascript, 
  SiTypescript, 
  SiVercel, 
  SiPostman, 
  SiMongodb, 
  SiShadcnui, 
  SiExpress, 
  SiHtml5, 
  SiCss3, 
  SiRust, 
  SiDrizzle, 
  SiFigma, 
  SiWeb3Dotjs, 
  SiClerk 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SkillBadge } from "./Skillbadge";


const Skills = () => {
  return (
    <section 
      id="skills"
      className="scroll-mt-20 pt-8 pb-16 px-6 bg-background text-foreground"
    >
      <div className="max-w-3xl w-full flex flex-col items-start text-left space-y-4 font-body">
        
        
        <div className="space-y-1">
          <h2 className="text-3xl md:text-4xl font-display text-primary tracking-wide">
            TECH STACK
          </h2>
          <p className="text-muted-foreground italic text-base">
            This list grows faster than my GitHub stars — and I kinda <span className="text-primary">like</span> that.
          </p>
        </div>

        
        <div className="space-y-3 w-full">
          
          
          <div className="space-y-2">
            <p className="font-mono text-xs text-muted-foreground tracking-wider">
              &lt; LANGUAGES /&gt;
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="HTML" icon={<SiHtml5 />} />
              <SkillBadge name="CSS" icon={<SiCss3 />} />
              <SkillBadge name="JavaScript" icon={<SiJavascript />} />
              <SkillBadge name="TypeScript" icon={<SiTypescript />} />
              <SkillBadge name="Rust" icon={<SiRust />} />
              <SkillBadge name="Java" icon={<FaJava />} />
            </div>
          </div>

          
          <div className="space-y-2">
            <p className="font-mono text-xs text-muted-foreground tracking-wider">
              &lt; FRAMEWORKS & LIBS /&gt;
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="React" icon={<FaReact />} />
              <SkillBadge name="Next.js" icon={<SiNextdotjs />} />
              <SkillBadge name="TailwindCSS" icon={<SiTailwindcss />} />
              <SkillBadge name="Express.js" icon={<SiExpress />} />
              <SkillBadge name="Web3.js" icon={<SiWeb3Dotjs />} />
              <SkillBadge name="Shadcn/ui" icon={<SiShadcnui />} />
            </div>
          </div>

          
          <div className="space-y-2">
            <p className="font-mono text-xs text-muted-foreground tracking-wider">
              &lt; BACKEND & DATABASE /&gt;
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="Node.js" icon={<FaNodeJs />} />
              <SkillBadge name="Clerk" icon={<SiClerk />} />
              <SkillBadge name="PostgreSQL" icon={<SiPostgresql />} />
              <SkillBadge name="MongoDB" icon={<SiMongodb />} />
              <SkillBadge name="Prisma" icon={<SiPrisma />} />
              <SkillBadge name="Drizzle" icon={<SiDrizzle />} />
            </div>
          </div>

          
          <div className="space-y-2">
            <p className="font-mono text-xs text-muted-foreground tracking-wider">
              &lt; DEVELOPER TOOLS /&gt;
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="Git" icon={<FaGitAlt />} />
              <SkillBadge name="GitHub" icon={<FaGithub />} />
              <SkillBadge name="VS Code" icon={<VscVscode />} />
              <SkillBadge name="Vercel" icon={<SiVercel />} />
              <SkillBadge name="Postman" icon={<SiPostman />} />
              <SkillBadge name="Figma" icon={<SiFigma />} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;