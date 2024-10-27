"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../asset/navbar/logo.png";
import { usePathname } from "next/navigation";

import {
  MdDashboard,
  MdSchool,
  MdMenuBook,
  MdQuiz,
  MdLogout,
  MdMenu,
  MdClose,
  MdPerson,
  MdEmail,
  MdRssFeed,
  MdSearch,
} from "react-icons/md";
import { UserButton } from "@clerk/nextjs";

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: "Dashboard", href: "/student", icon: <MdDashboard /> },
    { label: "My Courses", href: "/student/mycourses", icon: <MdSchool /> },
    { label: "E-Books", href: "/student/ebooks", icon: <MdMenuBook /> },
    { label: "Quiz", href: "/student/quiz", icon: <MdQuiz /> },
  ];

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logout clicked");
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Top bar */}
      <header className="bg-white px-4 sm:px-6 md:px-10 lg:px-14 flex justify-between items-center border-b border-gray-200">
        <Link href="/">
          <div className="flex items-center ">
            <Image
              src={Logo}
              alt="Logo"
              width={300}
              height={300}
              className="w-28 h-2w-28 -my-4"
            />
          </div>
        </Link>
        <div className="flex-1 flex justify-center">
          <div className="relative w-1/2 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="hidden md:block absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-500">
              <MdSearch size={20} />
            </button>
          </div>
        </div>

        <div className=" flex items-center justify-center w-14 h-14 bg-green-500 rounded-full overflow-hidden ">
          <UserButton
            afterSignOutUrl="/sign-in"
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          />
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <aside
          className={`bg-white pt-5 text-black w-64 h-full overflow-y-auto p-4 border-r border-gray-200 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <nav>
            <ul>
              {menuItems.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    href={item.href}
                    className={`flex items-center p-2 rounded ${
                      pathname === item.href
                        ? "bg-green-500 text-white"
                        : "hover:bg-green-500 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="absolute bottom-4 left-4 right-4 bg-green-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            onClick={handleLogout}
          >
            <MdLogout className="mr-2" />
            Log Out
          </button>
        </aside>

        {/* Main content area */}
        <div className="flex-1 overflow-y-auto">
          {/* Mobile menu button */}
          <button
            className="fixed top-20 left-4 z-20 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>

          {/* Page content */}
          <main className="p-4">{children}</main>
        </div>
      </div>
    </div>
  );
}
