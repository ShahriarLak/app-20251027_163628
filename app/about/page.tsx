import Image from 'next/image'
import { Code, Coffee, Heart, Users } from 'lucide-react'

const stats = [
  { icon: Code, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '25+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
  { icon: Heart, label: 'Years Experience', value: '5+' },
]

const timeline = [
  {
    year: '2023',
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading a team of 5 developers, architecting scalable web applications using React, Node.js, and AWS.',
  },
  {
    year: '2021',
    title: 'Full Stack Developer',
    company: 'Digital Agency Pro',
    description: 'Developed custom web applications and e-commerce solutions for various clients using modern technologies.',
  },
  {
    year: '2019',
    title: 'Frontend Developer',
    company: 'StartupX',
    description: 'Built responsive user interfaces and improved user experience for a fast-growing startup.',
  },
  {
    year: '2018',
    title: 'Computer Science Degree',
    company: 'University of Technology',
    description: 'Graduated with honors, specializing in software engineering and web technologies.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey in web development started during my computer science studies, 
                and I've been hooked ever since. I love turning complex problems into 
                simple, beautiful designs that users enjoy interacting with.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while reading about the latest industry trends.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="John Doe"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            My Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-8 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 bg-gray-300 flex-1 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <span className="text-primary-600 font-semibold">{item.year}</span>
                    <span className="hidden md:block text-gray-400">•</span>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-primary-600 font-medium mb-3">{item.company}</p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What I Believe In
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Clean Code
                  </h3>
                  <p className="text-gray-700">
                    I believe in writing code that is not only functional but also 
                    clean, maintainable, and well-documented.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    User-Centric Design
                  </h3>
                  <p className="text-gray-700">
                    Every decision I make is guided by how it will impact the 
                    end user's experience and satisfaction.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-700">
                    Technology evolves rapidly, and I'm committed to staying 
                    current with the latest trends and best practices.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Technical Expertise
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'React & Next.js', 'TypeScript', 'Node.js', 'PostgreSQL',
                  'AWS', 'Docker', 'GraphQL', 'Tailwind CSS'
                ].map((skill, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-4 text-center">
                    <span className="font-medium text-gray-900">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}