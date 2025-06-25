import { ReactNode } from "react";

export default function AuthLayout({
  children,
  imageUrl = "/auth-bg.jpg",
}: {
  children: ReactNode;
  imageUrl?: string;
}) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 backdrop-blur-sm lg:backdrop-blur-none">
          {children}
        </div>
      </div>

      <div
        className="lg:hidden fixed inset-0 bg-cover bg-center -z-10 opacity-30"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    </div>
  );
}
