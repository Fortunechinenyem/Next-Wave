import Link from "next/link";

import { loginWithGoogle, loginWithEmail } from "@/lib/auth";

import AuthImage from "@/components/Auth/AuthImage";

export default function SignInPage() {
  return (
    <AuthImage
      imageUrl="/auth-bg.jpg"
      imageAlt="Developer working on laptop"
      overlayOpacity={40}
    >
      <h1 className="text-3xl font-bold mb-6">Welcome Back</h1>

      <form action={loginWithEmail} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Sign In
        </button>
      </form>

      <div className="my-6 flex items-center">
        <div className="flex-1 border-t"></div>
        <span className="px-4 text-gray-500">OR</span>
        <div className="flex-1 border-t"></div>
      </div>

      <button
        onClick={loginWithGoogle}
        className="w-full flex items-center justify-center gap-2 border py-2 rounded-lg hover:bg-gray-100"
      >
        <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
        Continue with Google
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
