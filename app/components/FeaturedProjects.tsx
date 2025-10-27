import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]

export default function FeaturedProjects() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              A showcase of my recent work and favorite projects.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="hidden sm:flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <Link
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </Link>
                  <Link
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:hidden">
          <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}