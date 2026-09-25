import { AWS, ExpressJS, NodeJS, ReactJS, TypeScript, Vercel } from "../common/icons";
import { TechBadge } from "./tech-badge";

const paragraphs = [
  <>
    I'm a software developer passionate about building scalable systems. I
    spend most of my time writing backend code, designing APIs, and exploring
    cloud infrastructure.
  </>,

  <>
    I'm currently pursuing B.Tech in Computer Science at Babu Banarasi Das
    University, Lucknow. I enjoy working across the full stack — from{" "}
    <TechBadge Icon={TypeScript} effect={false}>
      TypeScript
    </TechBadge>{" "} + {" "}
    <TechBadge Icon={ReactJS} effect={false}>
      React.js
    </TechBadge>{" "}
    frontends to{" "}
    <TechBadge Icon={NodeJS} effect={false}>
      Node.js
    </TechBadge>{" "}/{" "}
    <TechBadge Icon={ExpressJS} effect={false}>
      Express.js
    </TechBadge>{" "}backends and{" "}
    <TechBadge Icon={AWS} effect={false}>
      AWS
    </TechBadge>{" "} + {" "}
    <TechBadge Icon={Vercel} effect={false}>
      Vercel
    </TechBadge>{" "}deployments.
  </>,

  <>
    When I'm not coding, I'm solving problems on LeetCode, learning system
    design concepts, or tinkering with some DevOps tools.
  </>,
];

export function Intro() {
  return (
    <section className="space-y-4 text-[15px] leading-[24.375px] text-half-muted-foreground">
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