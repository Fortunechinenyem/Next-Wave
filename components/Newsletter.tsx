"use client";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "subscribers"), {
      email,
      createdAt: new Date(),
    });
    setSubscribed(true);
  };

  return (
    <section className="container mx-auto px-6 py-16 bg-gray-100 dark:bg-gray-800 rounded-xl text-center">
      <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
      <p className="mb-8 max-w-2xl mx-auto">
        Get the latest posts delivered straight to your inbox.
      </p>

      {subscribed ? (
        <p className="text-green-600">Thanks for subscribing! 🎉</p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
