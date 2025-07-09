import AuthButtons from "@/components/AuthButtons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";

// Mock data - replace with real data from your CMS or API
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build web applications.",
    category: "Tech",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "/ai-web-dev.jpg",
  },
  {
    id: 2,
    title: "Minimalist Design Trends for 2023",
    excerpt:
      "Discover the minimalist design approaches that are dominating this year's digital landscape.",
    category: "Design",
    date: "April 28, 2023",
    readTime: "4 min read",
    image: "/design-trends.jpg",
  },
  {
    id: 3,
    title: "How Remote Work is Changing Tech Culture",
    excerpt:
      "An in-depth look at the cultural shifts happening in tech companies as remote work becomes permanent.",
    category: "Culture",
    date: "April 10, 2023",
    readTime: "6 min read",
    image: "/remote-work.jpg",
  },
  {
    id: 4,
    title: "The Rise of Web3 and What It Means for Developers",
    excerpt:
      "Understanding the Web3 ecosystem and how developers can prepare for the decentralized web.",
    category: "Tech",
    date: "March 22, 2023",
    readTime: "8 min read",
    image: "/web3.jpg",
  },
  {
    id: 5,
    title: "Color Psychology in UI/UX Design",
    excerpt:
      "How different colors affect user behavior and how to use them effectively in your designs.",
    category: "Design",
    date: "March 15, 2023",
    readTime: "5 min read",
    image: "/color-psychology.jpg",
  },
  {
    id: 6,
    title: "The Ethics of AI Content Generation",
    excerpt:
      "Examining the moral implications of AI-generated content and how to use it responsibly.",
    category: "Trends",
    date: "February 28, 2023",
    readTime: "7 min read",
    image: "/ai-ethics.jpg",
  },
];

export default async function BlogPage() {
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      </div>

      {/* Header with updated styling */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          NextWave
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
            <Link
              href="/"
              className="font-normal text-white hover:text-blue-400 transition text-sm"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="font-normal text-white hover:text-blue-400 transition text-sm"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="font-normal text-white hover:text-blue-400 transition text-sm"
            >
              About
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

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Blog Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-medium mb-6 text-white tracking-tighter">
              <span className="relative inline-block">
                NextWave Blog
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Explore the latest in technology, design, culture, and trends with
              our in-depth articles and tutorials.
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { name: "Tech", icon: "💻", count: 12 },
              { name: "Design", icon: "🎨", count: 8 },
              { name: "Culture", icon: "🌍", count: 5 },
              { name: "Trends", icon: "📈", count: 7 },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/blog/${category.name.toLowerCase()}`}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl group-hover:text-purple-400 transition">
                    {category.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition">
                      {category.name}
                    </h3>
                    <p className="text-gray-400">{category.count} articles</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-medium mb-8 text-purple-400">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.slice(0, 2).map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition"
                >
                  <div className="h-64 bg-gray-700 overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Featured Image
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 text-xs font-medium bg-gray-700 text-purple-400 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-400">
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-5">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-purple-400 font-medium hover:underline flex items-center gap-2"
                    >
                      Read more
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8H13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M8 3L13 8L8 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Latest Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-medium mb-8 text-purple-400">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition"
                >
                  <div className="h-48 bg-gray-700 overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Post Image
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-gray-700 text-purple-400 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-400">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-purple-400 text-sm font-medium hover:underline flex items-center gap-1"
                    >
                      Read more
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 7H11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M7 3L11 7L7 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More Button */}
          <div className="flex justify-center">
            <button className="bg-gray-800 text-white font-medium px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-700 hover:border-purple-500 transition">
              Load More Articles
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
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
                    href="/about"
                    className="hover:text-blue-400 transition text-gray-400"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
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
