import React from "react";

export default function TrendingCategories() {
  const categories = [
    { name: "Artificial Intelligence", color: "bg-pink-500", posts: 24 },
    { name: "Web Development", color: "bg-purple-500", posts: 18 },
    { name: "UI/UX Design", color: "bg-blue-500", posts: 15 },
    { name: "Future Tech", color: "bg-green-500", posts: 12 },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        Trending Categories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${category.color} rounded-2xl p-8 text-white hover:scale-105 transition-transform`}
          >
            <h4 className="text-xl font-bold mb-2">{category.name}</h4>
            <p className="text-white/80">{category.posts} articles</p>
          </div>
        ))}
      </div>
    </section>
  );
}
