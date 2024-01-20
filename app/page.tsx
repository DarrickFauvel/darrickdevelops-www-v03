import { ScrollToTop } from "@/components/ScrollToTop"
import { AboutSection } from "@/features/about"
import { FooterSection } from "@/features/footer"
import { HeroSection } from "@/features/hero"
import { ProjectsSection } from "@/features/projects"

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
