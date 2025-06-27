"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/Auth/AuthLayout";
import { registerWithEmailDirect } from "@/lib/auth";
import AuthImage from "@/components/Auth/AuthImage";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await registerWithEmailDirect(email, password);
      if (result.success) {
        router.push("/dashboard"); // Redirect on success
      } else {
        setError(result.error || "Registration failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthImage
      imageUrl="/auth-bg.jpg"
      imageAlt="Developer working on laptop"
      overlayOpacity={40}
    >
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg"
            disabled={isLoading}
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </AuthImage>
  );
}
