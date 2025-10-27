'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github, Filter } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    category: 'Full Stack',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Full Stack',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS, featuring smooth animations and optimized performance.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Frontend',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current weather conditions and forecasts with interactive charts and maps.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
    technologies: ['React', 'Chart.js', 'OpenWeather API'],
    category: 'Frontend',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 5,
    title: 'REST API Service',
    description: 'A robust REST API service built with Node.js and Express, featuring authentication, rate limiting, and comprehensive documentation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    technologies: ['Node.js', 'Express', 'JWT', 'Swagger'],
    category: 'Backend',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Blog Platform',
    description: 'A modern blog platform with content management system, SEO optimization, and social sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=600&h=400&fit=crop',
    technologies: ['Next.js', 'Sanity CMS', 'Vercel'],
    category: 'Full Stack',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
]

const categories = ['All', 'Full Stack', 'Frontend', 'Backend']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600">
              A collection of projects I've worked on, showcasing different technologies 
              and approaches to solving real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-gray-500" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </Link>
                    <Link
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}