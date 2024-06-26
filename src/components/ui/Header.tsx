import Image from "next/image"
import mbLogo from '../../../public/images/logo.png'
import { BurgerMenu } from "../../../public/icons/Icons"
import Link from "next/link"
import { ROUTES } from "@/routes/routes"

export const Header = () => {
  return (
    <header>
      <Link href={ROUTES.HOME}>
        <Image 
          src={mbLogo}
          alt="logo"
          className="logo-image"
          priority
        />
    </Link>
      <BurgerMenu 
        className="burger-menu-svg"
      />
    </header>
  )
}