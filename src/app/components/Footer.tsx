import { Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0d1117] border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
            <p className="text-gray-400">Open to collaborations and new opportunities</p>
          </div>

          <a
            href="https://github.com/MatiasTarta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-700 hover:border-gray-600"
          >
            <Github className="w-5 h-5" />
            View GitHub Profile
          </a>

          <div className="pt-6 border-t border-gray-800 w-full">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Matias Tarta. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
