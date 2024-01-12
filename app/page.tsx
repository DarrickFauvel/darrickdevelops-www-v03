import AboutSection from "@/features/AboutSection"
import Footer from "@/components/FooterSection"
import HeroSection from "@/features/HeroSection"
import ProjectsSection from "@/features/ProjectsSection"

export default function Home() {
  return (
    <main className="md:max-w-5xl">
      {/* <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl"> */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}
