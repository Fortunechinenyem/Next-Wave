import AuthButtons from "@/components/AuthButtons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";

// Mock data for tech posts
const techPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    excerpt:
      "Exploring how artificial intelligence is revolutionizing the way we build web applications.",
    date: "May 15, 2023",
    readTime: "5 min read",
    image: "/ai-web-dev.jpg",
  },
  {
    id: 4,
    title: "The Rise of Web3 and What It Means for Developers",
    excerpt:
      "Understanding the Web3 ecosystem and how developers can prepare for the decentralized web.",
    date: "March 22, 2023",
    readTime: "8 min read",
    image: "/web3.jpg",
  },
  {
    id: 7,
    title: "Next.js 13: What's New and Why It Matters",
    excerpt:
      "A deep dive into the latest features of Next.js 13 and how they improve developer experience.",
    date: "February 10, 2023",
    readTime: "6 min read",
    image: "/nextjs.jpg",
  },
  {
    id: 10,
    title: "TypeScript Best Practices for Large Codebases",
    excerpt:
      "Learn how to effectively use TypeScript in enterprise-level applications.",
    date: "January 5, 2023",
    readTime: "7 min read",
    image: "/typescript.jpg",
  },
];

export default async function TechCategoryPage() {
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
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/blog"
              className="text-blue-600 dark:text-purple-400 hover:underline"
            >
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium">Tech</span>
          </div>

          <h1 className="text-5xl font-bold mb-6">
            <span className="relative inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech Articles
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
            The latest in technology, programming, and developer tools. Stay
            updated with cutting-edge tech trends and innovations.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {techPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Tech Image
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-purple-400 rounded-full">
                      Tech
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date} · {post.readTime}
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

          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-800 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-purple-400">
              About Tech Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our Tech category covers everything from web development
              frameworks to artificial intelligence and cloud computing. We
              provide practical tutorials, in-depth analysis, and the latest
              news in the tech world.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Whether you're a beginner looking to learn the basics or an
              experienced developer staying updated with the latest trends, our
              tech articles have something for everyone.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="bg-white dark:bg-gray-900 text-blue-600 dark:text-purple-400 font-medium px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
              Load More Tech Articles
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
