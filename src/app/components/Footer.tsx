
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#0d1117] border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
            <p className="text-gray-400">Open to collaborations and new opportunities</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/MatiasTarta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors border border-gray-700">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/matias-tartaglia-676563369/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors border border-blue-600">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a href="mailto:tartagliamatias2@gmail.com" className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg font-medium transition-colors border border-indigo-600">
              <Mail className="w-5 h-5" /> Send Email
            </a>
          </div>

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
