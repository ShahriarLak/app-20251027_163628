import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-primary-600">John Doe</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              Full Stack Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I craft digital experiences that combine beautiful design with 
              robust functionality. Specialized in React, Next.js, and modern 
              web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects" className="btn-primary inline-flex items-center gap-2">
                View My Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="/resume.pdf"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Download CV
                <Download className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="John Doe"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-sm">5+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}