"use client"
import { useState } from "react"
import { useTheme } from "next-themes"
import { Link as LinkScroll } from "react-scroll"
import Icon from "./Icon"
import ThemeSwitch from "./ThemeSwitch"

interface NavItem {
  label: string
  section: string
}

const navItems: NavItem[] = [
  {
    label: "Home",
    section: "home",
  },
  {
    label: "About",
    section: "about",
  },
  {
    label: "Projects",
    section: "projects",
  },
]

const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "systems" ? systemTheme : theme

  return (
    <header className="w-full mx-auto px-4 bg-slate-50 shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:py-5 md:block">
              <LinkScroll
                className={"active cursor-pointer text-2xl font-bold"}
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                Darrick Develops
              </LinkScroll>
            </div>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                <Icon icon={navbar ? "close" : "menu"} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}>
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navItems.map((item, idx) => {
                return (
                  <LinkScroll
                    className={
                      "cursor-pointer block lg:inline-block text-stone-900 hover:text-stone-500 dark:text-stone-100"
                    }
                    key={idx}
                    to={item.section}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-90}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}>
                    {item.label}
                  </LinkScroll>
                )
              })}
              {currentTheme === "dark" ? (
                <button
                  className="bg-stone-100 text-stone-950 hover:scale-95 p-2 rounded-xl"
                  onClick={() => setTheme("light")}>
                  <Icon icon="light" />
                </button>
              ) : (
                <button
                  className="bg-stone-100 hover:scale-95 p-2 rounded-xl"
                  onClick={() => setTheme("dark")}>
                  <Icon icon="dark" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Navbar
