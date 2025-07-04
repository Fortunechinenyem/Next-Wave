import AuthButtons from "@/components/AuthButtons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";

// Mock post data - replace with data from your CMS or API
const post = {
  id: 1,
  title: "The Future of AI in Web Development",
  category: "Tech",
  date: "May 15, 2023",
  readTime: "5 min read",
  image: "/ai-web-dev.jpg",
  author: {
    name: "Alex Johnson",
    role: "Senior Developer",
    avatar: "/author1.jpg",
  },
  content: `
    <h2>Introduction</h2>
    <p>Artificial Intelligence is transforming the web development landscape at an unprecedented pace. From automated code generation to intelligent debugging tools, AI is changing how developers work.</p>
    
    <h2>Current Applications</h2>
    <p>Several AI-powered tools are already making waves in web development:</p>
    <ul>
      <li>GitHub Copilot for code suggestions</li>
      <li>Automated testing tools</li>
      <li>AI-powered design to code converters</li>
    </ul>
    
    <h2>The Future Outlook</h2>
    <p>Looking ahead, we can expect:</p>
    <ol>
      <li>More sophisticated AI pair programmers</li>
      <li>Self-healing code that fixes its own bugs</li>
      <li>AI-generated entire applications from simple prompts</li>
    </ol>
    
    <h2>Conclusion</h2>
    <p>While AI won't replace developers anytime soon, it will significantly augment our capabilities and change the nature of web development work.</p>
  `,
};

export default async function BlogPostPage() {
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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link
              href="/blog"
              className="text-blue-600 dark:text-purple-400 hover:underline"
            >
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href={`/blog/${post.category.toLowerCase()}`}
              className="text-blue-600 dark:text-purple-400 hover:underline"
            >
              {post.category}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="font-medium">{post.title}</span>
          </div>

          <article>
            <header className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-purple-400 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date} · {post.readTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  {/* Replace with author image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    AV
                  </div>
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </header>

            <div className="mb-12 rounded-xl overflow-hidden">
              <div className="h-96 bg-gray-200 dark:bg-gray-800">
                {/* Replace with post image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Featured Image
                </div>
              </div>
            </div>

            <div
              className="prose dark:prose-invert max-w-none mb-16"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mb-16">
              <h3 className="text-xl font-bold mb-6">About the Author</h3>
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex-shrink-0">
                  {/* Replace with author image */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    AV
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{post.author.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.author.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.author.name} is a seasoned developer with over 10
                    years of experience in web technologies and AI applications.
                    They regularly contribute to open source projects and speak
                    at tech conferences worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-800 mb-16">
              <h3 className="text-xl font-bold mb-6">Join the Discussion</h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Your Comment
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"
                    placeholder="Share your thoughts..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </article>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8">
              More from {post.category}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  id: 4,
                  title: "The Rise of Web3 and What It Means for Developers",
                  excerpt:
                    "Understanding the Web3 ecosystem and how developers can prepare for the decentralized web.",
                  date: "March 22, 2023",
                  readTime: "8 min read",
                },
                {
                  id: 7,
                  title: "Next.js 13: What's New and Why It Matters",
                  excerpt:
                    "A deep dive into the latest features of Next.js 13 and how they improve developer experience.",
                  date: "February 10, 2023",
                  readTime: "6 min read",
                },
              ].map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold mb-2">
                    {relatedPost.title}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-purple-400 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {relatedPost.date} · {relatedPost.readTime}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {relatedPost.excerpt}
                  </p>
                  <Link
                    href={`/blog/${relatedPost.id}`}
                    className="text-blue-600 dark:text-purple-400 text-sm font-medium hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
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
