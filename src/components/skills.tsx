import { Code, Layout, Server } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="w-8 h-8 mb-4 text-gray-700" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Backend",
      icon: <Server className="w-8 h-8 mb-4 text-gray-700" />,
      skills: ["Node.js", "Express",  "API Development"],
    },
 
    {
      title: "Other",
      icon: <Code className="w-8 h-8 mb-4 text-gray-700" />,
      skills: ["TypeScript", "Git", "Testing", "Agile"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

