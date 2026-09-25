import { education } from "@/data/education";

import { EducationItem } from "./education-item";

export function EducationSection() {
  return (
    <ul className="space-y-4">
      {education.map((item) => (
        <EducationItem key={`${item.institution}-${item.qualification}`} education={item} />
      ))}
    </ul>
  );
}
