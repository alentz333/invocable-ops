import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Definition from '@/components/Definition'
import Services from '@/components/Services'
import Platforms from '@/components/Platforms'
import About from '@/components/About'
import Engagements from '@/components/Engagements'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Definition />
        <Services />
        <Platforms />
        <About />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
