import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="flex items-center gap-2 group rounded-full">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={60}
          height={20}
          className="rounded-full"
        />
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar