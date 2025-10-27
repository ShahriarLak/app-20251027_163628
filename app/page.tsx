import Hero from './components/Hero'
import FeaturedProjects from './components/FeaturedProjects'
import Skills from './components/Skills'
import CTA from './components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <CTA />
    </>
  )
}