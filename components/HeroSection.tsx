export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Write, Share, <span className="text-blue-600">Inspire</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
        NextWave is the modern blogging platform for developers.
      </p>
      <div className="flex gap-4 justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition">
          Start Reading
        </button>
        <button className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 px-8 py-3 rounded-lg font-medium transition">
          Write a Post
        </button>
      </div>
    </section>
  );
}
