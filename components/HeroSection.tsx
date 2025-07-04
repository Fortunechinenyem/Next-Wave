import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif">
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            The Pulse of
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
            Modern Technology
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Cutting-edge insights, bold innovations, and the future of digital
          culture.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
            <Link href="/main/blog"> Explore Articles</Link>
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:border-pink-500 transition-all duration-300 hover:scale-[1.02]">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}
