import {
  Code2,
  // Database,
  // Palette,
  // Cloud,
  Wrench,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "text-blue-400",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },

  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "text-cyan-400",
    skills: ["VS Code", "Jest", "Webpack", "Redux", "Firebase", "Vercel"],
  },
  {
    title: "Creative Skills",
    icon: Sparkles,
    color: "text-yellow-400",
    skills: ["UI Animation", "SVG Animation", "3D Modeling", "Motion Graphics"],
  },
];

function Skills() {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-cyan-400 mb-4">
          Skills & Expertise
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A diverse set of technical skills and creative abilities that enable
          me to build amazing digital experiences
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div
              key={index}
              className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md p-6 hover:border-cyan-500/60 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <IconComponent className={`${category.color}`} size={28} />
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm border border-cyan-500/30 bg-cyan-500/5 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
