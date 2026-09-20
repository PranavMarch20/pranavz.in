import { skills } from "@/data/skills";

import { SkillItem } from "./skill-item";

export function SkillsSection() {
  return (
    <ul className="space-y-5">
      {skills.map((skill) => (
        <SkillItem key={skill.category} skill={skill} />
      ))}
    </ul>
  );
}
