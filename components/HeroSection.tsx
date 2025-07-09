import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center px-6">
      {/* Gradient overlay similar to reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-purple-900/10" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Tagline similar to reference */}
        <div className="inline-flex px-6 py-1.5 bg-white/10 rounded-full mb-6">
          <span className="text-white text-sm font-light tracking-wide">
            For visionaries and trailblazers
          </span>
        </div>

        {/* Main heading with reference styling */}
        <h1 className="text-5xl md:text-6xl font-medium mb-6 leading-tight text-white tracking-tighter">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            The Pulse of
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Modern Technology
          </span>
        </h1>

        {/* Description with reference styling */}
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto tracking-tight">
          Cutting-edge insights, bold innovations, and the future of digital
          culture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blog"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            Explore Articles
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 10H15" stroke="white" strokeWidth="1.5" />
              <path d="M10 5L15 10L10 15" stroke="white" strokeWidth="1.5" />
            </svg>
          </Link>
          <button className="px-8 py-4 border border-gray-500 text-white rounded-full font-medium hover:border-blue-400 transition-all duration-300">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}
