"use client"
import Image from "next/image"
import { Link as LinkScroll } from "react-scroll"
import Container from "../components/Container"
// import Icon from "../components/Icon"
// import { Icon } from "@iconify/react"
// import chevronDoubleDown from "@iconify/icons-bi/chevron-double-down"
import chevronIcon from "../assets/chevron-double-down.svg"

const HeroSection = () => {
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
              width={300}
              height={300}
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
            <LinkScroll
              className={
                "active cursor-pointer text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              }
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              Projects
            </LinkScroll>
          </div>
        </div>

        <div className="flex flex-row justify-center">
          <span className="animate-bounce cursor-pointer">
            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 16 16">
                <g fill="currentColor" fill-rule="evenodd">
                  <path d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                  <path d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </g>
              </svg>
            </LinkScroll>
          </span>
        </div>
      </Container>
    </section>
  )
}
export default HeroSection
