import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { PracticeAreas } from "@/components/practice-areas"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative min-h-svh bg-background">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      
    </main>
  )
}
