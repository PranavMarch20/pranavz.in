const paragraphs = [
  "I'm a software developer passionate about building scalable systems. I spend most of my time writing backend code, designing APIs, and exploring cloud infrastructure.",
  "I'm currently pursuing B.Tech in Computer Science at Babu Banarasi Das University, Lucknow. I enjoy working across the full stack — from React frontends to Node.js/Express backends and AWS deployments.",
  "When I'm not coding, I'm solving problems on LeetCode, learning system design concepts, or tinkering with some DevOps tools.",
];

export function Intro() {
  return (
    <section className="space-y-4 text-[15px] leading-[24.375px] text-half-muted-foreground">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </section>
  );
}
