import type { Education } from "@/data/education";

type EducationItemProps = {
  education: Education;
};

export function EducationItem({ education }: EducationItemProps) {
  return (
    <li className="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-8">
      <div className="min-w-0 flex flex-col gap-1">
        <h3 className="text-[15px] font-medium leading-[18.375px] text-foreground">
          {education.institution}
        </h3>
        <p className="text-[13px] font-normal leading-[14.75px] text-muted-foreground">
          {education.qualification}
        </p>
        <p className="text-[13px] font-normal leading-[14.75px] text-muted-foreground">
          {education.location}
        </p>
      </div>

      <div className="flex-col flex-nowrap font-mono text-[12px] font-normal leading-[18.75px] text-muted-foreground sm:text-right">
        <p className="inline-flex pt-1.5 sm:pt-0 border-t-2 border-dotted border-divider sm:border-t-0">{education.duration}</p>
        <p>{education.score}</p>
      </div>
    </li>
  );
}
