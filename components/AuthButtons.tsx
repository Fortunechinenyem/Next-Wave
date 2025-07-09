"use client";
import { loginWithGoogle, logout } from "@/lib/auth";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface AuthButtonsProps {
  user: User | null;
}

export default function AuthButtons({ user }: AuthButtonsProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      await loginWithGoogle();
      router.refresh(); // Refresh to update auth state
    } catch (error) {
      console.error("Google login failed:", error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    try {
      await logout();
      router.push("/"); // Redirect to home after logout
      router.refresh(); // Refresh to update auth state
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignIn = () => {
    router.push("/auth/sign-in");
  };

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <>
          <button
            onClick={handleSignOut}
            disabled={isLoading}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg border border-gray-700 hover:bg-gray-800 transition ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing Out...
              </>
            ) : (
              "Sign Out"
            )}
          </button>
          <div className="flex items-center gap-2">
            <img
              src={user.photoURL || "/default-avatar.png"}
              alt={user.displayName || "User"}
              className="w-8 h-8 rounded-full border border-gray-700"
              referrerPolicy="no-referrer"
            />
            <span className="hidden sm:inline text-sm text-gray-300">
              {user.displayName || "User"}
            </span>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={handleEmailSignIn}
            className="px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition border border-gray-700"
          >
            Sign In
          </button>
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white hover:bg-gray-100 text-gray-800 transition border border-gray-300 ${
              googleLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {googleLoading ? (
              <Loader2 className="w-4 h-4 animate-spin text-gray-800" />
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Sign in with Google</span>
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
}
