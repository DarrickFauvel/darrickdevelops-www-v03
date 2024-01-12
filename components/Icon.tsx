"use client"
import { Icon as IconifyIcon } from "@iconify/react"

type IconProps = {
  icon: string
  color?: string
}

const Icon = ({ icon, color = "black" }: IconProps) => {
  let iconToken = ""
  switch (icon) {
    case "github":
      iconToken = "bi:github"
      break
    case "linkedin":
      iconToken = "bi:linkedin"
      break
    case "box-arrow":
      iconToken = "bi:box-arrow-up-right"
      break
    case "chevron-bounce":
      iconToken = "bi:chevron-double-down"
      break
    case "close":
      iconToken = "ri:close-fill"
      break
    case "menu":
      iconToken = "ri:menu-fill"
      break
    case "light":
      iconToken = "ri:sun-line"
      break
    case "dark":
      iconToken = "ri:moon-fill"
      break

    default:
      break
  }

  return <IconifyIcon icon={iconToken} width="30" height="30" />
}
export default Icon
