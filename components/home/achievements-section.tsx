import { achievements } from "@/data/achievements";

export function AchievementsSection() {
  return (
    <ul className="list-disc space-y-2.5 pl-5 text-[15px] font-medium leading-[24.375px] text-half-muted-foreground marker:text-section-label">
      {achievements.map((achievement) => (
        <li key={achievement}>{achievement}</li>
      ))}
    </ul>
  );
}
