import { FaNodeJs, FaGitAlt, FaJava, FaAws, FaLinux } from "react-icons/fa";
import { 
  SiPostgresql, 
  SiJavascript, 
  SiTypescript, 
  SiVercel, 
  SiPostman, 
  SiMongodb, 
  SiExpress, 
  SiRust, 
  SiGo,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiHelm,
  SiMinio,
  SiNginx,
  SiGooglecloud,
  SiRedis,
  SiSqlite
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { BiLogoGoLang } from "react-icons/bi";
import { SkillBadge } from "./Skillbadge";



const Skills = () => {
  return (
    <section id="skills">
      <div className="mb-8">
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
            <SkillBadge name="Go" icon={<SiGo />} />
            <SkillBadge name="Rust" icon={<SiRust />} />
            <SkillBadge name="TypeScript" icon={<SiTypescript />} />
            <SkillBadge name="JavaScript" icon={<SiJavascript />} />
            <SkillBadge name="Java" icon={<FaJava />} />
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            &lt; Backend /&gt;
          </p>
          <div className="flex flex-wrap gap-2">
            <SkillBadge name="Echo" icon={<BiLogoGoLang />} />
            <SkillBadge name="Gin" icon={<BiLogoGoLang />} />
            <SkillBadge name="Node.js" icon={<FaNodeJs />} />
            <SkillBadge name="Express" icon={<SiExpress />} />
            <SkillBadge name="gRPC" />
            <SkillBadge name="REST APIs" />
            <SkillBadge name="Websockets" />
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            &lt; Databases /&gt;
          </p>
          <div className="flex flex-wrap gap-2">
            <SkillBadge name="PostgreSQL" icon={<SiPostgresql />} />
            <SkillBadge name="MongoDB" icon={<SiMongodb />} />
            <SkillBadge name="Redis" icon={<SiRedis />} />
            <SkillBadge name="SQLite" icon={<SiSqlite />} />
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            &lt; Infrastructure /&gt;
          </p>
          <div className="flex flex-wrap gap-2">
            <SkillBadge name="Docker" icon={<SiDocker />} />
            <SkillBadge name="Kubernetes" icon={<SiKubernetes />} />
            <SkillBadge name="Terraform" icon={<SiTerraform />} />
            <SkillBadge name="Helm" icon={<SiHelm />} />
            <SkillBadge name="AWS" icon={<FaAws />} />
            <SkillBadge name="GCP" icon={<SiGooglecloud />} />
            <SkillBadge name="Azure" icon={<VscAzure />} />
            <SkillBadge name="NGINX" icon={<SiNginx />} />
            <SkillBadge name="MINIIO" icon={<SiMinio />} />

          </div>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            &lt; Tools /&gt;
          </p>
          <div className="flex flex-wrap gap-2">
            <SkillBadge name="Git" icon={<FaGitAlt />} />
            <SkillBadge name="Linux" icon={<FaLinux />} />
            <SkillBadge name="Postman" icon={<SiPostman />} />
            <SkillBadge name="VS Code" icon={<VscVscode />} />
            <SkillBadge name="Vercel" icon={<SiVercel />} />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;