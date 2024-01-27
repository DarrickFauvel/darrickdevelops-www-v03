"use client"
import { useState } from "react"
import { useTheme } from "next-themes"
import Icon from "@/components/Icon"
import ThemeSwitch from "@/components/ThemeSwitch"

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

function Navbar() {
  const [navbar, setNavbar] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "systems" ? systemTheme : theme

  const toggleNavbar = () => setNavbar(!navbar)
  const closeNavbar = () => setNavbar(false)

  return (
    <header className="w-full mx-auto px-4 bg-slate-50 shadow fixed top-0 z-50 sm:px-20 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3">
            <div className="md:py-5 md:block">
              <a
                className="active cursor-pointer text-2xl font-bold"
                href="#home"
                onClick={closeNavbar}>
                Darrick Develops
              </a>
            </div>
            <div className="md:hidden">
              <button onClick={toggleNavbar}>
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
                  <a
                    className="cursor-pointer block lg:inline-block text-stone-900 hover:text-stone-500 dark:text-stone-100"
                    href={"#" + item.section}
                    key={idx}
                    onClick={toggleNavbar}>
                    {item.section}
                  </a>
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
