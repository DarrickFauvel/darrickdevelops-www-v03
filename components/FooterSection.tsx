"use client"
import Icon from "./Icon"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl text-stone-600 dark:text-stone-600">
      <hr className="w-full h-[1px] mx-auto mt-8 bg-slate-300 dark:bg-stone-600 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1">
          © 2023 Darrick Develops<a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://github.com/DarrickFauvel"
            rel="noreferrer"
            target="_blank">
            <Icon icon="github" color="neutral" />
          </a>

          <a
            href="https://www.linkedin.com/in/DarrickFauvel"
            rel="noreferrer"
            target="_blank">
            <Icon icon="linkedin" color="neutral" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
