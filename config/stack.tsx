import type { ReactNode } from "react";
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
  SiSqlite,
} from "react-icons/si";
import { VscAzure, VscVscode } from "react-icons/vsc";
import { BiLogoGoLang } from "react-icons/bi";

export type StackItem = {
  name: string;
  icon?: ReactNode;
};

export type StackCategory = {
  category: string;
  items: StackItem[];
};

export const STACK: StackCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "Go", icon: <SiGo /> },
      { name: "Rust", icon: <SiRust /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Echo", icon: <BiLogoGoLang /> },
      { name: "Gin", icon: <BiLogoGoLang /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "gRPC" },
      { name: "REST APIs" },
      { name: "Websockets" },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "SQLite", icon: <SiSqlite /> },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "Terraform", icon: <SiTerraform /> },
      { name: "Helm", icon: <SiHelm /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "GCP", icon: <SiGooglecloud /> },
      { name: "Azure", icon: <VscAzure /> },
      { name: "NGINX", icon: <SiNginx /> },
      { name: "MinIO", icon: <SiMinio /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];
