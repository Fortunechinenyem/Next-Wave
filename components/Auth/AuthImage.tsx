import { ReactNode } from "react";
import Image from "next/image";

type AuthImageProps = {
  children: ReactNode;
  imageUrl: string;
  imageAlt?: string;
  overlayOpacity?: number;
  priority?: boolean;
};

export default function AuthImage({
  children,
  imageUrl,
  imageAlt = "Authentication background",
  overlayOpacity = 30,
  priority = false,
}: AuthImageProps) {
  return (
    <div className="relative min-h-screen w-full flex">
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover"
          quality={80}
          sizes="(max-width: 1024px) 0vw, 50vw"
        />
      </div>

      <div className="lg:hidden fixed inset-0 -z-10">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover"
          quality={60}
          sizes="100vw"
          style={{ opacity: overlayOpacity / 100 }}
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white dark:bg-gray-900/95 backdrop-blur-sm lg:backdrop-blur-none rounded-xl shadow-xl p-8 transition-all duration-300">
          {children}
        </div>
      </div>
    </div>
  );
}
