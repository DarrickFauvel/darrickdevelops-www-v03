import Container from "./Container"
import Icon from "./Icon"

const Footer = () => {
  return (
    <footer className="max-w-3xl md:max-w-5xl text-stone-600 dark:text-stone-600">
      <Container>
        <hr className="w-full h-[1px] mt-8 bg-slate-300 dark:bg-stone-600 border-0"></hr>
        <div className="py-4 flex flex-col text-center md:flex-row md:justify-between">
          <div className="flex flex-row items-center justify-center space-x-1">
            © 2023 Darrick Develops<a href="/" className="hover:underline"></a>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            <a
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              href="https://github.com/DarrickFauvel"
              rel="noreferrer"
              target="_blank">
              <Icon icon="github" color="neutral" />
            </a>
            <a
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              href="https://www.linkedin.com/in/DarrickFauvel"
              rel="noreferrer"
              target="_blank">
              <Icon icon="linkedin" color="neutral" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
