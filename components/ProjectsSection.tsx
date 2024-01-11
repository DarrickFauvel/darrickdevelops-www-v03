"use client"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { Icon } from "@iconify/react"

const projects = [
  {
    name: "YumYumYes! Recipes",
    description:
      "YumYumYes is a web app that helps culinary enthusiests to search for and save their favorite recipes.",
    image: "/screenshot-home-dev.png",
    github: "https://github.com/chingu-voyages/v46-tier2-team-19",
    link: "https://yumyumyes.com/",
  },
  {
    name: "Target redTool",
    description:
      "Target redTool is a mobile web app that helps Target team members quickly generate barcodes on the go.",
    image: "/redtool_01.png",
    github: "https://github.com/DarrickFauvel/redtool",
    link: "https://redtool.darrickdevelops.com/",
  },
  {
    name: "Darrick Develops",
    description:
      "Darrick Develops is a portfolio website developed using the Next.js framework.",
    image: "/darrickdevelops-www.png",
    github: "https://github.com/DarrickFauvel/darrickdevelops-www",
    link: "https://darrickdevelops.com/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <Icon
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                          icon="bi:github"
                          width="30"
                          height="30"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <Icon
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                          icon="bi:box-arrow-up-right"
                          width="30"
                          height="30"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection
