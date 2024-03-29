import Image from "next/image"
import Container from "@/components/Container"
import Icon from "@/components/Icon"

function HeroSection() {
  return (
    <section
      id="home"
      className="pt-8 pb-52 md:h-[calc(100vh-96px)] md:mb-[96px] md:flex">
      <Container>
        <div className="flex flex-col items-center text-center pt-16 pb-32 md:flex-row md:space-x-4 md:text-left md:py-52">
          <div className="md:w-1/2 md:mt-2">
            <Image
              className="rounded-full shadow-2xl"
              src="/headshot.jpg"
              alt=""
              width={200}
              height={200}
              priority
            />
          </div>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
              Hi, I&apos;m Darrick!
            </h1>
            <p className="text-lg mt-4 mb-6 md:max-w-none md:text-2xl">
              I&apos;m a{" "}
              <span className="font-semibold text-teal-600">
                Software Engineer
              </span>{" "}
              based in Lowell, MA. Working towards creating software that makes
              life easier and more meaningful.
            </p>
            <a
              className={
                "active cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              }
              href="#projects">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <div className="cursor-pointer animate-bounce">
            <a href="#about">
              <Icon icon="chevron" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
