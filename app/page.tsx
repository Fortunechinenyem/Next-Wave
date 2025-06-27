import AuthButtons from "@/components/AuthButtons";
// import FeaturedPosts from "@/components/FeaturedPosts";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SparklesCore } from "@/components/ui/sparklescore";
import { auth } from "@/lib/firebase/config";

export default async function Home() {
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#3b82f6"
        />
      </div>

      <div className="fixed inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          NextWave
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <AuthButtons user={user} />
        </div>
      </header>

      <main className="relative">
        <HeroSection />

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center relative">
            <span className="relative inline-block">
              Trending Content
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
            </span>
          </h2>
          {/* <FeaturedPosts /> */}
        </section>

        <div className="relative my-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-gray-900 px-4 text-2xl text-gray-500 dark:text-gray-400">
              ✍️
            </span>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-24">
          <Newsletter />
        </div>
      </main>

      <footer className="container mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
        <p className="mb-2">
          © {new Date().getFullYear()} NextWave Blog. All rights reserved.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-blue-500 transition">
            Terms
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
