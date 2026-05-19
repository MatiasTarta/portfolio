import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117]">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}