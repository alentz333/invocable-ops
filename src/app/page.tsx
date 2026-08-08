import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Definition from '@/components/Definition'
import Layers from '@/components/Layers'
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
        <Layers />
        <Platforms />
        <About />
        <Engagements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
