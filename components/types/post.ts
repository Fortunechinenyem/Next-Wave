export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  content: string;
  //   createdAt: Timestamp; // Firestore timestamp type
  //   updatedAt: Timestamp;
  // Add other fields as needed
}
