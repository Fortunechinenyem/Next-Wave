import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";

import TrendingCategories from "@/components/TrendingCategories";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function Home() {
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      </div>

      <Navbar user={user} />

      <main className="relative">
        <HeroSection />

        <section className="container mx-auto px-6 py-16">
          <h2 className="text-5xl font-medium mb-12 text-center text-white tracking-tighter">
            <span className="relative inline-block">
              The Future of Tech
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
          </h2>
        </section>

        <TrendingCategories />

        <div className="relative my-24">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-900 px-6 text-3xl text-purple-400">
              ✨
            </span>
          </div>
        </div>

        <div className="container mx-auto px-6 pb-24">
          <div className="bg-gray-800 rounded-3xl p-12 shadow-xl border border-gray-700">
            <Newsletter />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
