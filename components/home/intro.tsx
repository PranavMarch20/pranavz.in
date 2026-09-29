import { AWS, ExpressJS, NodeJS, ReactJS, TypeScript, Vercel } from "../common/icons";
import { TechBadge } from "./tech-badge";

export function Intro() {
  return (
    <section className="space-y-4 pt-12 text-[15px] leading-[24.375px] text-half-muted-foreground">
      <p>
        I'm a full stack web developer passionate about building scalable,
        user-focused web applications. I spend most of my time building web
        applications, designing APIs, and exploring cloud infrastructure.
      </p>
      <p className="leading-[37.375px]">
        I enjoy working across the full stack — from <span className="pl-1.5"></span>
        <TechBadge Icon={TypeScript} effect={false}>
          TypeScript
        </TechBadge><span className="pl-1.5"></span> + <span className="pl-1.5"></span>
        <TechBadge Icon={ReactJS} effect={false}>
          React.js
        </TechBadge> <span className="pl-1.5"></span>
        frontends to <span className="pl-1.5"></span>
        <TechBadge Icon={NodeJS} effect={false}>
          Node.js
        </TechBadge> <span className="pl-1.5"></span> / <span className="pl-1.5"></span>
        <TechBadge Icon={ExpressJS} effect={false}>
          Express.js
        </TechBadge><span className="pl-1.5"></span> backends and <span className="pl-1.5"></span>
        <TechBadge Icon={AWS} effect={false}>
          AWS
        </TechBadge><span className="pl-1.5"></span> deployments.
      </p>
      <p>
        When I'm not coding, I'm solving problems on LeetCode, learning system
        design concepts, or tinkering with some DevOps tools.
      </p>
    </section>
  );
}