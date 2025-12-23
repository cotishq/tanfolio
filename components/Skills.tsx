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
  SiClerk, 
  SiGo
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SkillBadge } from "./Skillbadge";



const Skills = () => {
  return (
    <section className="py-16" id="skills">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-display border-b border-neutral-300 dark:border-white/10 pb-2 mb-3">Tech Stack</h2>
          <p className="font-body leading-relaxed">
            This list grows faster than my GitHub stars — and I kinda <span className="text-primary">like</span> that.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              &lt; Languages /&gt;
            </p>
            <div className="flex flex-wrap gap-2">
              <SkillBadge name="HTML" icon={<SiHtml5 />} />
              <SkillBadge name="CSS" icon={<SiCss3 />} />
              <SkillBadge name="JavaScript" icon={<SiJavascript />} />
              <SkillBadge name="TypeScript" icon={<SiTypescript />} />
              <SkillBadge name="Go" icon={<SiGo />} />
              <SkillBadge name="Rust" icon={<SiRust />} />
              <SkillBadge name="Java" icon={<FaJava />} />
              
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              &lt; Frameworks & Libs /&gt;
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

          <div className="space-y-3">
            <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              &lt; Backend & Database /&gt;
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

          <div className="space-y-3">
            <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
              &lt; Developer Tools /&gt;
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