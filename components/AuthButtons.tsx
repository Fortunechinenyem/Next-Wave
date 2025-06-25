"use client";
import { loginWithGoogle, logout } from "@/lib/auth";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface AuthButtonsProps {
  user: User | null;
}

export default function AuthButtons({ user }: AuthButtonsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await loginWithGoogle();
      // Redirect after successful login (optional)
      // router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await logout();
      router.push("/"); // Redirect to home after logout
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthNavigation = () => {
    router.push("/auth/sign-in"); // Navigate to sign-in page
  };

  return (
    <div className="flex gap-2">
      {user ? (
        <>
          <button
            onClick={handleSignOut}
            disabled={isLoading}
            className={`px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Signing Out..." : "Sign Out"}
          </button>
          <img
            src={user.photoURL || "/default-avatar.png"}
            alt={user.displayName || "User"}
            className="w-10 h-10 rounded-full"
          />
        </>
      ) : (
        <>
          <button
            onClick={handleAuthNavigation} // Changed from direct login
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
          >
            Sign In
          </button>
          <button
            onClick={handleSignIn}
            disabled={isLoading}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              "Signing In..."
            ) : (
              <>
                <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
                Google
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
}
