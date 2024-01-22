import { AboutSection } from "@/components/AboutSection"
import { FooterSection } from "@/components/FooterSection"
import { HeroSection } from "@/components/HeroSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ScrollToTop } from "@/components/ScrollToTop"

export default function Home() {
  return (
    <main className="relative md:max-w-5xl">
      {/* <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl"> */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
      <ScrollToTop />
    </main>
  )
}
