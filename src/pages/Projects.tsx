import { ExternalLink, Github } from "lucide-react";
import milliyIT from "../img/projects/milliyIT.png";
import tkti from "../img/projects/tkti.png";
import devimg from "../img/projects/devConnector.png";
import beun from "../img/projects/beun.png";
const projects = [
  {
    title: "Beun",
    description:
      "A brand website designed to sell dermatological and professional cosmetic products.",
    image: beun,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    links: {
      live: "https://beun.uz/",
      code: "#",
    },
  },
  {
    title: "Milliy IT Center",
    description:
      "We have gathered all the services you are looking for for your business in one place and called it the National IT Center",
    image: milliyIT,
    tags: ["React", "Tailwind CSS", "JavaScript", "Code Editor"],
    links: {
      live: "https://milliyitcenter.uz/",
      code: "#",
    },
  },

  {
    title: "Students Social Activity Index",
    description:
      "Platform for determining the status of students' grants/contracts for Tashkent University of Chemical",
    image: tkti,
    tags: ["React", "Tailwind CSS", "TypeScript"],
    links: {
      live: "https://grand.tkti.uz/",
      code: "#",
    },
  },
  {
    title: "NT-Developer (In progress)",
    description:
      "A communication platform for developers that facilitates experience sharing, profile creation, and networking",
    image: devimg,
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    links: {
      live: "https://milliyitcenter.uz/",
      code: "#",
    },
  },
];

function Projects() {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-cyan-400 mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Innovative solutions showcasing technical expertise and creative
          problem-solving
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md overflow-hidden hover:border-cyan-500/60 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] group"
          >
            <div className="h-60 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded text-xs border border-cyan-500/30 bg-cyan-500/5 text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="px-2 py-1 rounded text-xs text-gray-400">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.links.live}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-sm font-semibold transition-all"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
                <a
                  href={project.links.code}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-gray-300 text-sm font-semibold transition-all"
                >
                  <Github size={16} />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
