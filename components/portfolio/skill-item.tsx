import type { Skill } from "@/data/skills";

type SkillItemProps = {
  skill: Skill;
};

export function SkillItem({ skill }: SkillItemProps) {
  const { Icon } = skill;

  return (
    <li className="flex gap-4">
      <div
        className={`flex size-9 mt-[5px] shrink-0 items-center justify-center rounded-lg shadow-xl text-white ${skill.accentClassName}`}
      >
        <Icon aria-hidden="true" className="size-5 stroke-[2.2]" />
      </div>

      <div className="min-w-0">
        <h3 className="text-[15px] font-medium leading-[24.375px] text-foreground">
          {skill.category}
        </h3>
        <p className="text-[14px] font-normal leading-[22.75px] text-muted-foreground">
          {skill.technologies}
        </p>
      </div>
    </li>
  );
}
