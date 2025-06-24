import { db } from "@/lib/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const postRef = doc(db, "posts", params.slug);
  const postSnap = await getDoc(postRef);

  if (!postSnap.exists()) {
    return <div>Post not found!</div>;
  }

  const post = postSnap.data();

  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <div className="prose prose-lg dark:prose-invert mt-8">
        {post.content}
      </div>
    </article>
  );
}

// export async function generateMetadata({ params }) {
//   const post = await client.fetch(
//     `*[_type == "post" && slug.current == $slug][0]`,
//     { slug: params.slug }
//   );

//   return {
//     title: `${post.title} | NextWave Blog`,
//     description: post.excerpt,
//     openGraph: {
//       images: [post.mainImage.asset.url],
//     },
//   };
// }
