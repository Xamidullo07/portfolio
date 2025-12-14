import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Junior Frontend Developer",
    company: "Target IT School",
    location: "Remote",
    period: "2025",
    description:
      "Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs. Collaborated with design teams.",
    skills: ["React", "Next.js", "Responsive Design", "JavaScript"],
    icon: "💼",
  },
];

function Experience() {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-cyan-400 mb-4">
          Professional Journey
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transforming ideas into digital reality, one project at a time
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md p-8 hover:border-cyan-500/60 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
          >
            <div className="flex items-start gap-6">
              <div className="text-4xl flex-shrink-0">{exp.icon}</div>

              <div className="flex-grow">
                <div className="flex items-start justify-between mb-2 flex-wrap gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold">{exp.company}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-gray-400 text-sm mb-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs border border-cyan-500/30 bg-cyan-500/5 text-cyan-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
