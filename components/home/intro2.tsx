import { AWS, ExpressJS, NodeJS, ReactJS, TypeScript, Vercel } from "../common/icons";
import { TechBadge } from "./tech-badge";

export function Intro2() {
  return (
    <section className="space-y-4 text-[15px] leading-[24.375px] text-accent font-medium">
      <p className="leading-[41.375px]">
        I enjoy working across the full stack — from <span className="pl-1"></span>
        <TechBadge Icon={TypeScript} effect={false} className="!text-foreground/90">
          TypeScript
        </TechBadge><span className="pl-1"></span> + <span className="pl-1"></span>
        <TechBadge Icon={ReactJS} effect={false} className="!text-foreground/90">
          React.js
        </TechBadge> <span className="pl-1"></span>
        frontends to <span className="pl-1"></span>
        <TechBadge Icon={NodeJS} effect={false} className="!text-foreground/90">
          Node.js
        </TechBadge> <span className="pl-1"></span> / <span className="pl-1"></span>
        <TechBadge Icon={ExpressJS} effect={false} className="!text-foreground/90">
          Express.js
        </TechBadge><span className="pl-1"></span> backends and <span className="pl-1"></span>
        <TechBadge Icon={AWS} effect={false} className="!text-foreground/90">
          AWS
        </TechBadge><span className="pl-1"></span> deployments. <span className="pl-1"></span> 
        I’m particularly interested in <span className="text-foreground">backend systems</span> and cloud infrastructure, with a focus on <span className="text-foreground">scalable software</span>. 
        Enthusiastic about <span className="text-foreground">Devops</span>.
      </p>
    </section>
  );
}