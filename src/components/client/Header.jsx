"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center pb-5  relative ">
      {/* Logo */}
      <div>
        <Image src="/full-logo.png" width={159} height={52} alt="logo" />
      </div>

      {/* Links */}
      <div className="lg:flex justify-between w-[25%] hidden l">
        <Link href="/" className="text-accent2 underline underline-offset-8">
          <h1>Home</h1>
        </Link>
        <Link
          href="/#services"
          className="text-text hover:text-accent2 hover:underline hover:underline-offset-8"
        >
          <h1>Services</h1>
        </Link>
        <Link
          href="/#portfolio"
          className="text-text hover:text-accent2 hover:underline hover:underline-offset-8"
        >
          <h1>Portfolio</h1>
        </Link>
      </div>

      {/* Book a call */}
      <Link
        className="bg-accent2 lg:flex text-background py-1.5 px-1.5 rounded-sm hidden"
        href="/#meeting"
      >
        <Phone color={"white"} fill={"white"} width={14} className="mr-2" />
        Book A Call
      </Link>

      {/* Hamburger + Dropdown */}
      <div className="relative md:hidden">
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white  rounded-md py-2 text-text translate-x-1/2">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
              Home
            </Link>
            <Link
              href="/#services"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Portfolio
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
