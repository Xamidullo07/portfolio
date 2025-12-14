import { Award, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Artificial Intelligence",
    institution:
      " Tashkent State Technical University named after Islam Karimov",
    year: "2022-2026",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-400/50",
    icon: "🎓",
    description:
      "Focused on core science subjects with emphasis on practical laboratory work and scientific research methodologies.",
    achievements: [
      { label: "GPA", value: "4.69" },
      { label: "Subject", value: "AI " },
    ],
    subjects: ["Mathematics", "Physics", "Chemistry", "AI"],
  },

  {
    degree: "Frontend",
    institution: "Najot Ta’lim Learning Center",
    year: "2024-2025",
    color: "from-green-500/20 to-green-600/20",
    borderColor: "border-green-400/50",
    icon: "📚",
    description:
      "In-depth knowledge of frontend was gained, and the course was successfully completed with practical testing.",
    achievements: [
      { label: "GPA", value: "4.25" },
      { label: "Subject", value: "Frontend" },
    ],
    subjects: ["Literature", "Social Studies", "Economics", "History"],
  },
];

function Education() {
  return (
    <div className="container mx-auto px-8 py-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-cyan-400 mb-4">
          Educational Journey
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover how academic excellence shapes innovative thinking and
          professional growth.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`rounded-2xl border-2 ${edu.borderColor} bg-gradient-to-br ${edu.color} backdrop-blur-md p-8 hover:shadow-[0_0_40px_rgba(34,211,238,0.2)] transition-all`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="text-5xl">{edu.icon}</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-cyan-300 font-semibold">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 italic leading-relaxed">
              {edu.description}
            </p>

            <div className="mb-6">
              <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <Award size={18} />
                Key Achievements
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {edu.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="bg-slate-800/50 rounded-lg p-3 border border-cyan-500/20"
                  >
                    <p className="text-gray-400 text-xs">{achievement.label}</p>
                    <p className="text-cyan-400 font-bold text-lg">
                      {achievement.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-cyan-400 font-semibold mb-3 flex items-center gap-2">
                <BookOpen size={18} />
                Key Subjects
              </h4>
              <div className="flex flex-wrap gap-2">
                {edu.subjects.map((subject, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
