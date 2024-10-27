import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../asset/navbar/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://facebook.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaLinkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Image
              width={100}
              height={100}
              src={logo}
              alt="Company Logo"
              className="h-32 w-32"
            />
            <p className="text-sm">
              Your company's brief description goes here.
            </p>
          </div>
          <div className="flex space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className=" hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-white transition-colors duration-300"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
