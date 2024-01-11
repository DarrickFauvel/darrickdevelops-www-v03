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

    default:
      break
  }

  const baseClassNames =
    "hover:-translate-y-1 transition-transform cursor-pointer"

  return (
    <IconifyIcon
      className={`${baseClassNames}`}
      icon={iconToken}
      width="30"
      height="30"
    />
  )
}
export default Icon
