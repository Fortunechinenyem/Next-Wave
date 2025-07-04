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
            <Link href="/blog" className="font-medium text-blue-600 transition">
              Blog
            </Link>
            <Link
              href="/about"
              className="font-medium hover:text-purple-600 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-medium hover:text-indigo-600 transition"
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
          <h1 className="text-5xl font-bold mb-6 text-center">
            <span className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NextWave Blog
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
          </h1>

          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Explore the latest in technology, design, culture, and trends with
            our in-depth articles and tutorials.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { name: "Tech", icon: "💻", count: 12 },
              { name: "Design", icon: "🎨", count: 8 },
              { name: "Culture", icon: "🌍", count: 5 },
              { name: "Trends", icon: "📈", count: 7 },
            ].map((category, index) => (
              <Link
                key={index}
                href={`/blog/${category.name.toLowerCase()}`}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {category.count} articles
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-purple-400">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.slice(0, 2).map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
                >
                  <div className="h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Featured Image
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-purple-400 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 dark:text-purple-400 font-medium hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-purple-400">
              Latest Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition"
                >
                  <div className="h-40 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    {/* Replace with actual image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Post Image
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-purple-400 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 dark:text-purple-400 text-sm font-medium hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-white dark:bg-gray-900 text-blue-600 dark:text-purple-400 font-medium px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              Load More Articles
            </button>
          </div>
        </div>
      </main>

      {/* Reuse the same footer from homepage */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
        {/* ... same footer content as homepage ... */}
      </footer>
    </div>
  );
}
