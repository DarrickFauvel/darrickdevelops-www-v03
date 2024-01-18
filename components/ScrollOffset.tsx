import { ReactNode } from "react"

type PropTypes = {
  children: ReactNode
}

function ScrollOffset({ children }: PropTypes) {
  return <div className="pt-[5.5rem] md:pt-32">{children}</div>
}
export default ScrollOffset
