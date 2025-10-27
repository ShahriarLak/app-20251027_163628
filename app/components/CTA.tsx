import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-primary-600">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's work together to create something amazing. I'm always excited 
            to take on new challenges and help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </Link>
            <Link 
              href="/projects" 
              className="border border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}