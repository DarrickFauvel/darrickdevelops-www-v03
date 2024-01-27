"use client"
import { useState, useEffect } from "react"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      className={`${
        isVisible ? null : "hidden"
      } fixed bottom-[20px] right-[30px] z-50 border-none outline-none bg-red-500 text-white cursor-pointer p-[15px] rounded-[10px] text-lg hover:bg-stone-600`}
      onClick={scrollToTop}
      title="Go to top">
      Top
    </button>
  )
}

export default ScrollToTop
