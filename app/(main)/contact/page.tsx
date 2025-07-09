import { auth } from "@/lib/firebase/config";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function ContactPage() {
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
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-medium mb-6 text-purple-400">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-700 rounded-lg text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-400">Email</h3>
                    <p className="text-gray-300">hello@nextwave.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-700 rounded-lg text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-400">Phone</h3>
                    <p className="text-gray-300">+234 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gray-700 rounded-lg text-purple-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-400">Address</h3>
                    <p className="text-gray-300">
                      123 Tech Street, Gbegborun, Lagos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-700">
              <h2 className="text-2xl font-medium mb-6 text-purple-400">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-300"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-medium mb-6 text-purple-400">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "How can I contribute to NextWave?",
                  answer:
                    "We welcome guest contributors! Please email us at contributors@nextwave.com with your ideas.",
                },
                {
                  question: "Do you offer advertising opportunities?",
                  answer:
                    "Yes, we have several advertising options available. Contact our sales team at ads@nextwave.com.",
                },
                {
                  question: "How often do you publish new content?",
                  answer:
                    "We publish new articles every weekday, with special features on weekends.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-700 pb-6 last:border-0 last:pb-0"
                >
                  <h3 className="text-lg font-medium text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-400 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
