import { db } from "@/lib/firebase/config";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import Link from "next/link";

import { Timestamp } from "firebase/firestore";
import { Post } from "./types/post";

export default async function FeaturedPosts() {
  const q = query(
    collection(db, "posts"),
    orderBy("createdAt", "desc"),
    limit(3)
  );

  const snapshot = await getDocs(q);
  const posts = snapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Post)
  );

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            {post.coverImage && (
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              {post.excerpt && (
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {post.excerpt}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
