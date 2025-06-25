import AuthLayout from "@/components/Auth/AuthLayout";
import { sendPasswordResetEmail } from "@/lib/auth";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout imageUrl="/forgot-password-bg.jpg">
      <h1 className="text-3xl font-bold mb-6">Reset Password</h1>

      <form action={sendPasswordResetEmail} className="space-y-4">
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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Send Reset Link
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link href="/auth/sign-in" className="text-blue-600 hover:underline">
          Back to Sign In
        </Link>
      </div>
    </AuthLayout>
  );
}
