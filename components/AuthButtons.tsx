"use client";
import { loginWithGoogle, logout } from "@/lib/auth";
import { User } from "firebase/auth";

interface AuthButtonsProps {
  user: User | null;
}

export default function AuthButtons({ user }: AuthButtonsProps) {
  return (
    <div className="flex gap-2">
      {user ? (
        <>
          <button
            onClick={() => logout()}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Sign Out
          </button>
          <img
            src={user.photoURL || ""}
            alt={user.displayName || "User"}
            className="w-10 h-10 rounded-full"
          />
        </>
      ) : (
        <button
          onClick={() => loginWithGoogle()}
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
