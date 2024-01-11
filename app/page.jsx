import Benefits from '@/containers/Benefits'
import Courses from '@/containers/Courses'
import FAQ from '@/containers/FAQ'
import Hero from '@/containers/Hero'
import Pricing from '@/containers/Pricing'
import Testimonials from '@/containers/Testimonials'

export default function Home() {
  return(
    <>
      <Hero />
      <Benefits />
      <Courses />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  )
}
