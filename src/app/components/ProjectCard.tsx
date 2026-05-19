import { motion } from "motion/react";
import { Github, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  githubUrl: string;
  featured?: boolean;
  gradientClass?: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  imageUrl,
  githubUrl,
  featured = false,
  gradientClass = "from-indigo-500/20 to-purple-500/20",
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative bg-[#161b22] rounded-xl overflow-hidden border border-gray-800 hover:border-indigo-500/50 transition-all duration-300"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 bg-yellow-500/90 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Star className="w-4 h-4 fill-current" />
          Featured
        </div>
      )}

      {/* Image with gradient overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-60 z-10`} />
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 bg-indigo-600/20 text-indigo-300 text-xs rounded-full border border-indigo-600/30"
            >
              {t}
            </span>
          ))}
        </div>

        {/* GitHub link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium text-sm group-hover:gap-3 duration-300"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
      </div>
    </motion.div>
  );
}
