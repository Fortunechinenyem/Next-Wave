import AuthButtons from "@/components/AuthButtons";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import { ThemeToggle } from "@/components/ThemeToggle";
import TrendingCategories from "@/components/TrendingCategories";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";

export default async function Home() {
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      </div>

      {/* Header with updated styling */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          NextWave
        </h1>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            <Link
              href="/"
              className="font-normal text-white hover:text-blue-400 transition text-sm"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-normal text-white hover:text-blue-400 transition text-sm"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="font-normal text-white hover:text-blue-400 transition text-sm"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="font-normal text-white hover:text-blue-400 transition text-sm"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <AuthButtons user={user} />
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Updated Hero Section */}
        <HeroSection />

        {/* The Future of Tech Section with updated styling */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-5xl font-medium mb-12 text-center text-white tracking-tighter">
            <span className="relative inline-block">
              The Future of Tech
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
          </h2>
        </section>

        {/* Trending Categories with updated card styling */}
        <TrendingCategories />

        {/* Divider with updated styling */}
        <div className="relative my-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-900 px-6 text-3xl text-purple-400">
              ✨
            </span>
          </div>
        </div>

        {/* Newsletter with updated styling */}
        <div className="container mx-auto px-6 pb-24">
          <div className="bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-700">
            <Newsletter />
          </div>
        </div>
      </main>

      {/* Footer with updated styling */}
      <footer className="bg-gray-950 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Latest
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Popular
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Editors' Picks
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Web Dev
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500">
              © {new Date().getFullYear()} NextWave. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
