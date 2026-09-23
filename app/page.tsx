import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { IntroSection } from '@/components/intro-section'
import { StoneCollection } from '@/components/stone-collection'
import { Marquee } from '@/components/marquee'
import { Applications } from '@/components/applications'
import { StorySection } from '@/components/story-section'
import { WhyNRK } from '@/components/why-nrk'
import { StoneExplorer } from '@/components/stone-explorer'
import { Gallery } from '@/components/gallery'
import { Location } from '@/components/location'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { ScrollProgress } from '@/components/scroll-progress'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <StoneCollection />
        <Marquee />
        <Applications />
        <StorySection />
        <WhyNRK />
        <StoneExplorer />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
