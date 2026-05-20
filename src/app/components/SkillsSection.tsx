import { Code2, Database, GitBranch, Smartphone } from "lucide-react";
import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["TypeScript", "JavaScript", "Java", "HTML", "CSS"],
    color: "indigo",
  },
  {
    title: "Frameworks",
    icon: Smartphone,
    skills: ["React Native", "Expo"],
    color: "purple",
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub", "VS Code"],
    color: "blue",
  },
  {
    title: "Concepts",
    icon: Database,
    skills: ["Data Structures", "Concurrent Programming", "REST APIs"],
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  indigo: { bg: "bg-indigo-600/10", border: "border-indigo-500/30", text: "text-indigo-400" },
  purple: { bg: "bg-purple-600/10", border: "border-purple-500/30", text: "text-purple-400" },
  blue: { bg: "bg-blue-600/10", border: "border-blue-500/30", text: "text-blue-400" },
  cyan: { bg: "bg-cyan-600/10", border: "border-cyan-500/30", text: "text-cyan-400" },
};

export function SkillsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0d1117] to-[#161b22]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const colors = colorMap[category.color];

            return (
              <motion.div
                key={category.title}
                className={`p-6 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 ${colors.bg} ${colors.text} text-sm rounded-full border ${colors.border}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* GitHub Stats */}
      <motion.div
        className="mt-16 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-white">GitHub Stats</h3>
        <img
          src="https://github-stats.vercel.app/api?username=MatiasTarta&show_icons=true&theme=github_dark&hide_border=true&bg_color=161b22&title_color=ffffff&text_color=ffffff"
          alt="GitHub Stats"
          className="rounded-xl"
        />
      </motion.div>
    </section>

  );
}
