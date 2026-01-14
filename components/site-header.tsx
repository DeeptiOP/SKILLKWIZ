"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <nav className="flex flex-col w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto bg-white/90 text-gray-800 rounded-b-2xl shadow-xl backdrop-blur-sm border-b border-black-200">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-20">
          {/* Mobile Logo */}
          <Link
            href="/"
            className={`md:hidden flex items-center ${
              pathname === "/" ? "text-blue-600 font-bold" : "text-gray-800 font-bold"
            }`}
          >
            <div className="h-14 flex items-center">
              <Image
                src="/images/logo.svg"
                alt="SkillKwiz Logo"
                width={200}
                height={76}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            {/* Desktop Logo */}
            <Link
              href="/"
              className={`flex items-center px-6 ${
                pathname === "/" ? "text-blue-600 font-bold" : "text-gray-800 font-bold"
              }`}
            >
              <div className="h-14 flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="SkillKwiz Logo"
                  width={150}
                  height={52}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Menu Links */}
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative group px-5 py-3 text-base font-bold transition-all ${
                  pathname === href
                    ? "text-blue-600 font-bold"
                    : "text-gray-800"
                }`}
              >
                <span>{label}</span>
                <span className="absolute left-0 bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center bg-white/90 rounded-b-2xl shadow-xl backdrop-blur-sm border-t border-gray-200">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="w-full text-center py-5 text-lg font-bold relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>{label}</span>
                <span className="absolute left-1/4 right-1/4 bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}
