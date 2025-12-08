"use client"

import Image from "next/image"
import Link from "next/link"
import NavItems, { navItems } from "./NavItems"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleSidebar = () => {
    setOpen(!open);
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  return (
    <>
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

        <button
          className="md:hidden"
          onClick={handleSidebar}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>

        <div className="hidden md:flex items-center gap-8">
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

      {open && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50 z-40 md:hidden"
          onClick={handleSidebar}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${open ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={handleSidebar}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-6 py-4">
            {navItems.map(({ label, href }) => (
              <Link
                href={href}
                key={label}
                onClick={handleSidebar}
                className="py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors text-gray-700 font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-6 border-t border-gray-200">
            <SignedOut>
              <SignInButton>
                <button className="btn-signin w-full">Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center gap-3">
                <UserButton />
                <span className="text-sm text-gray-600">Account</span>
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar