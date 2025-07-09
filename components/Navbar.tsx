"use client";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import AuthButtons from "./AuthButtons";
import { User } from "firebase/auth";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            NextWave
          </Link>

          <nav className="hidden md:flex items-center gap-6 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-normal text-white hover:text-blue-400 transition text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <AuthButtons user={user} />
            </div>

            <button
              className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <div className="flex flex-col gap-4 bg-gray-800 p-4 rounded-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-normal text-white hover:text-blue-400 transition text-sm py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
              <ThemeToggle />
              <AuthButtons user={user} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
