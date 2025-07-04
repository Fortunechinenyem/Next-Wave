import AuthButtons from "@/components/AuthButtons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";

export default async function AboutPage() {
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 dark:opacity-5" />
      </div>

      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          NextWave
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="font-medium hover:text-blue-600 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-medium text-blue-600 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-medium hover:text-purple-600 transition"
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

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-12 text-center">
            <span className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About NextWave
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
          </h1>

          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800 mb-16">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-6">
                Our Story
              </h2>
              <p className="text-lg mb-6">
                NextWave was founded in 2023 with a simple mission: to create a
                platform where technology, design, and culture intersect to
                inspire and educate the next generation of creators.
              </p>
              <p className="text-lg mb-6">
                What started as a small blog has grown into a thriving community
                of developers, designers, and thought leaders who share our
                passion for innovation.
              </p>

              <h2 className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-6 mt-12">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-purple-400">
                    Innovation
                  </h3>
                  <p>
                    We believe in pushing boundaries and exploring new ideas
                    that shape the future.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-purple-400">
                    Community
                  </h3>
                  <p>
                    Building connections and fostering collaboration is at the
                    heart of what we do.
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-purple-400">
                    Quality
                  </h3>
                  <p>
                    We're committed to delivering exceptional content that
                    educates and inspires.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-6">
                Meet the Team
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Alex Johnson",
                    role: "Founder & CEO",
                    image: "/team1.jpg",
                  },
                  {
                    name: "Sam Wilson",
                    role: "Editor in Chief",
                    image: "/team2.jpg",
                  },
                  {
                    name: "Taylor Smith",
                    role: "Design Director",
                    image: "/team3.jpg",
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl"
                  >
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Member Photo
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-600 dark:text-purple-400">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
