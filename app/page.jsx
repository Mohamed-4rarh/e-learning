import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Panner from '@/components/Panner'
import Benefits from '@/pages/home/Benefits'
import Courses from '@/pages/home/Courses'
import FAQ from '@/pages/home/FAQ'
import Hero from '@/pages/home/Hero'
import Pricing from '@/pages/home/Pricing'
import Testimonials from '@/pages/home/Testimonials'

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
