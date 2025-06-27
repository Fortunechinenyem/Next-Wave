"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginWithGoogle, loginWithEmailDirect } from "@/lib/auth";
import AuthImage from "@/components/Auth/AuthImage";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await loginWithEmailDirect(email, password);
      if (result.success) {
        router.push("/dashboard"); // Redirect on success
      } else {
        setError(result.error || "Login failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError("");

    try {
      const result = await loginWithGoogle();
      if (result.success) {
        router.push("/dashboard"); // Redirect on success
      } else {
        setError(result.error || "Google login failed");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google login failed");
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
      <h1 className="text-3xl font-bold mb-6">Welcome Back</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleEmailLogin} className="space-y-4">
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
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div className="my-6 flex items-center">
        <div className="flex-1 border-t"></div>
        <span className="px-4 text-gray-500">OR</span>
        <div className="flex-1 border-t"></div>
      </div>

      <button
        onClick={handleGoogleLogin}
        className={`w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100 transition ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
      >
        <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
        {isLoading ? "Processing..." : "Continue with Google"}
      </button>

      <div className="mt-6 text-center">
        <Link
          href="/auth/forgot-password"
          className="text-blue-600 hover:underline"
        >
          Forgot password?
        </Link>
        <p className="mt-2">
          Don't have an account?{" "}
          <Link href="/auth/sign-up" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthImage>
  );
}
