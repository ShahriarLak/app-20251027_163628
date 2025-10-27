import { Code, Database, Globe, Smartphone } from 'lucide-react'

const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript (ES6+)'],
    description: 'Creating responsive and interactive user interfaces with modern frameworks.'
  },
  {
    icon: Database,
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
    description: 'Building scalable server-side applications and APIs.'
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    skills: ['HTML5', 'CSS3', 'SASS', 'Webpack', 'REST APIs'],
    description: 'Leveraging web standards and modern tooling for optimal performance.'
  },
  {
    icon: Smartphone,
    title: 'Tools & Deployment',
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Jest'],
    description: 'Version control, containerization, and cloud deployment solutions.'
  },
]

export default function Skills() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            I work with modern technologies to build fast, scalable, and 
            user-friendly web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <category.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full"
                  >
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