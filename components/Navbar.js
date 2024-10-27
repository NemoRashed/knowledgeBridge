"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "./../asset/navbar/logo.png";
import { FaSearch, FaBars } from "react-icons/fa";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser();

  const isInstructor =
    user?.primaryEmailAddress?.emailAddress === "nemorashed12@gmail.com";

  return (
    <>
      <nav className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <div className="flex-shrink-0">
                <Image
                  className="w-32 h-32"
                  src={logo}
                  alt="Logo"
                  width={200}
                  height={200}
                />
              </div>
            </Link>

            {/* Search bar - hidden on mobile, visible on larger screens */}
            <div className="hidden sm:block flex-grow mx-4">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white bg-opacity-20 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>

            {/* Menu items and user icon - hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-4">
              <Link href="/" className="text-gray-800 hover:text-yellow-300">
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-800 hover:text-yellow-300"
              >
                About
              </Link>
              <Link
                href="/courses"
                className="text-gray-800 hover:text-yellow-300"
              >
                Courses
              </Link>
              <Link
                href="/blog"
                className="text-gray-800 hover:text-yellow-300"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-yellow-300"
              >
                Contact
              </Link>
              <Link
                href="/student"
                className="text-gray-800 hover:text-yellow-300"
              >
                Student
              </Link>
              {isInstructor && (
                <Link
                  href="/instructor"
                  className="text-gray-800 hover:text-yellow-300"
                >
                  Instructor
                </Link>
              )}

              <UserButton
                afterSignOutUrl="/sign-in"
                size="lg"
                appearance={{
                  elements: {
                    avatarBox: "w-12 h-12",
                  },
                }}
              />
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-blue-500 focus:outline-none"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-gray-800 hover:text-blue-500 hover:bg-blue-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-gray-800 hover:text-blue-500 hover:bg-blue-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-gray-800 hover:text-blue-500 hover:bg-blue-50"
              >
                Contact
              </Link>
              <div className="relative mt-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white bg-opacity-20 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
              <Link
                href="/student"
                className="block px-3 py-2 rounded-md text-gray-800 hover:text-blue-500 hover:bg-blue-50"
              >
                Student
              </Link>
              {isInstructor && (
                <Link
                  href="/instructor"
                  className="block px-3 py-2 rounded-md text-gray-800 hover:text-blue-500 hover:bg-blue-50"
                >
                  Instructor
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
      <div className="h-20"></div> {/* Spacer */}
    </>
  );
}
