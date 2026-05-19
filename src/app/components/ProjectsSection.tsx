import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Monopay",
    description:
      "Mobile payment application built with TypeScript and Expo. Includes backend integration, custom hooks, and services layer.",
    tech: ["TypeScript", "React Native", "Expo", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    githubUrl: "https://github.com/MatiasTarta/monopay",
    gradientClass: "from-green-500/30 to-purple-600/30",
  },
  {
    title: "Data Structures Projects",
    description:
      "Academic work implementing data structures for Universidad Nacional del Comahue.",
    tech: ["Java"],
    imageUrl: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    githubUrl: "https://github.com/MatiasTarta/Data_Structures",
    gradientClass: "from-blue-500/30 to-cyan-500/30",
  },
  {
    title: "Concurrent Programming (Final Project)",
    description:
      "Final project for Concurrent Programming course — advanced multithreading concepts in Java.",
    tech: ["Java", "Multithreading"],
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    githubUrl: "https://github.com/MatiasTarta/TPFinalProgramacionConcurrente",
    gradientClass: "from-orange-500/30 to-yellow-600/30",
  },
  {
    title: "Laboratorio 2025",
    description: "Frontend assignments for the Web Design & Programming Laboratory course · Universidad Nacional del Comahue.",
    tech: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    githubUrl: "https://github.com/nicocayo/lab2025",
    gradientClass: "from-gray-600/30 to-gray-400/30",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my work spanning mobile development, web applications, and academic projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
