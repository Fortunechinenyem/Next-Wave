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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 dark:opacity-5" />
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400 dark:bg-purple-500 opacity-70 animate-sparkle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          NextWave
        </h1>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <Link
              href="#"
              className="font-medium hover:text-blue-600 transition"
            >
              Tech
            </Link>
            <Link
              href="#"
              className="font-medium hover:text-purple-600 transition"
            >
              Design
            </Link>
            <Link
              href="#"
              className="font-medium hover:text-indigo-600 transition"
            >
              Culture
            </Link>
            <Link
              href="#"
              className="font-medium hover:text-teal-600 transition"
            >
              Trends
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <AuthButtons user={user} />
          </div>
        </div>
      </header>

      <main className="relative">
        <HeroSection />

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Future of Tech
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
          </h2>
        </section>

        <TrendingCategories />

        <div className="relative my-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-gray-900 px-6 text-3xl text-blue-500 dark:text-purple-400">
              ✨
            </span>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-24">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-xl border border-gray-100 dark:border-gray-800">
            <Newsletter />
          </div>
        </div>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-purple-400">
                Explore
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Latest
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Popular
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Editors' Picks
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-purple-400">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    AI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Web Dev
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Design
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-purple-400">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-purple-400">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-500 transition">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} NextWave. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
