import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href='/'>
        <div className="cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={80} height={20} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <p>Sign In</p>
      </div>
    </nav>
  )
}

export default Navbar