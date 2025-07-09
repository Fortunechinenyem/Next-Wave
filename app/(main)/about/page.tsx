import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { auth } from "@/lib/firebase/config";
import Link from "next/link";

export default async function AboutPage() {
  const user = auth.currentUser;

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      </div>

      <Navbar user={user} />

      <main className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-12 text-center text-white tracking-tighter">
            <span className="relative inline-block">
              About NextWave
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
          </h1>

          <div className="bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-700 mb-16">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl font-medium text-purple-400 mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 mb-6">
                NextWave was founded in 2025 with a simple mission: to create a
                platform where technology, design, and culture intersect to
                inspire and educate the next generation of creators.
              </p>
              <p className="text-gray-300 mb-6">
                What started as a small blog has grown into a thriving community
                of developers, designers, and thought leaders who share our
                passion for innovation.
              </p>

              <h2 className="text-3xl font-medium text-purple-400 mb-6 mt-12">
                Our Values
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-3 text-purple-400">
                    Innovation
                  </h3>
                  <p className="text-gray-300">
                    We believe in pushing boundaries and exploring new ideas
                    that shape the future.
                  </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-3 text-purple-400">
                    Community
                  </h3>
                  <p className="text-gray-300">
                    Building connections and fostering collaboration is at the
                    heart of what we do.
                  </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-medium mb-3 text-purple-400">
                    Quality
                  </h3>
                  <p className="text-gray-300">
                    We're committed to delivering exceptional content that
                    educates and inspires.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-medium text-purple-400 mb-6">
                Meet the Team
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Alex Johnson",
                    role: "Founder & CEO",
                    image: "/team1.jpg",
                  },
                  {
                    name: "Sam Wilson",
                    role: "Editor in Chief",
                    image: "/team2.jpg",
                  },
                  {
                    name: "Taylor Smith",
                    role: "Design Director",
                    image: "/team3.jpg",
                  },
                ].map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-6 rounded-xl hover:bg-gray-600 transition"
                  >
                    <div className="w-full h-48 bg-gray-600 rounded-lg mb-4 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Member Photo
                      </div>
                    </div>
                    <h3 className="text-xl font-medium text-white">
                      {member.name}
                    </h3>
                    <p className="text-purple-400">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
