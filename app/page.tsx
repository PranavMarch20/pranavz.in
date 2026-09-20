import { AchievementsSection } from "@/components/portfolio/achievements-section";
import { Divider } from "@/components/portfolio/divider";
import { EducationSection } from "@/components/portfolio/education-section";
import { Footer } from "@/components/portfolio/footer";
import { Header } from "@/components/portfolio/header";
import { Intro } from "@/components/portfolio/intro";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SectionLabel } from "@/components/portfolio/section-label";
import { SkillsSection } from "@/components/portfolio/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen px-5 sm:px-6">
      <div className="mx-auto w-full max-w-[670px]">
        <Header />

        <div className="pt-12">
          <Intro />
        </div>

        <Divider />

        <section aria-labelledby="what-i-know">
          <SectionLabel id="what-i-know">WHAT I KNOW</SectionLabel>
          <div className="mt-6">
            <SkillsSection />
          </div>
        </section>

        <Divider />

        <section aria-labelledby="projects">
          <SectionLabel id="projects">PROJECTS I&apos;VE WORKED ON</SectionLabel>
          <div className="mt-6">
            <ProjectsSection />
          </div>
        </section>

        <Divider />

        <section aria-labelledby="achievements">
          <SectionLabel id="achievements">ACHIEVEMENTS</SectionLabel>
          <div className="mt-5">
            <AchievementsSection />
          </div>
        </section>

        <Divider />

        <section aria-labelledby="education">
          <SectionLabel id="education">WHERE I HAVE STUDIED</SectionLabel>
          <div className="mt-6">
            <EducationSection />
          </div>
        </section>

        <Divider />
        <Footer />
      </div>
    </main>
  );
}
