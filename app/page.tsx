import AuthButtons from "@/components/AuthButtons";
import FeaturedPosts from "@/components/FeaturedPosts";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { auth } from "@/lib/firebase/config";

export default async function Home() {
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          NextWave
        </h1>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <AuthButtons user={user} />
        </div>
      </header>

      <main>
        <HeroSection />
        <FeaturedPosts />
        <Newsletter />
      </main>

      <footer className="container mx-auto px-6 py-8 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} NextWave Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
