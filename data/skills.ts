import { Cloud, Code, Database, Monitor, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Skill = {
  category: string;
  technologies: string;
  accentClassName: string;
  Icon: LucideIcon;
};

export const skills: Skill[] = [
  {
    category: "Languages",
    technologies: "C++, JavaScript, TypeScript, Go, SQL",
    accentClassName: "bg-blue-500",
    Icon: Code,
  },
  {
    category: "Backend",
    technologies: "Node.js, Express.js, REST APIs, Bun, Drizzle, Zod, BetterAuth",
    accentClassName: "bg-orange-500",
    Icon: Server,
  },
  {
    category: "Frontend",
    technologies: "React.js, Next.js, Redux, Tailwind CSS, Shadcn UI",
    accentClassName: "bg-teal-500",
    Icon: Monitor,
  },
  {
    category: "Databases",
    technologies: "PostgreSQL, MongoDB, Redis, Convex",
    accentClassName: "bg-rose-500",
    Icon: Database,
  },
  {
    category: "Cloud & DevOps",
    technologies:
      "AWS (EC2, S3, Lambda, DynamoDB, VPC, IAM), Docker, GitHub Actions, Linux",
    accentClassName: "bg-indigo-500",
    Icon: Cloud,
  },
  {
    category: "Testing & Tools",
    technologies: "Git, GitHub, Postman, Jest, React Testing Library, Vitest",
    accentClassName: "bg-amber-500",
    Icon: Wrench,
  },
];
