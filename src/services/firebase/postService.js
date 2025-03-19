import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "./firebase-config";

const postsCollection = collection(db, "posts");

// Fetch all posts
export const fetchPosts = async () => {
  const data = await getDocs(postsCollection);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

// Fetch single post
export const fetchPost = async (postId) => {
  const postDoc = doc(db, "posts", postId);
  const postSnapshot = await getDoc(postDoc);

  if (!postSnapshot.exists()) {
    throw new Error("Post not found");
  }

  return { id: postSnapshot.id, ...postSnapshot.data() };
};

// Create new post
export const createPost = async ({ title, blogPost }) => {
  return await addDoc(postsCollection, {
    title,
    blogPost,
    author: {
      name:
        auth.currentUser.displayName || auth.currentUser.email.split("@")[0],
      id: auth.currentUser.uid,
    },
  });
};

// Delete post
export const deletePost = async (postId) => {
  const postDoc = doc(db, "posts", postId);
  return await deleteDoc(postDoc);
};

// Update post
export const updatePost = async ({ id, title, content }) => {
  const postDoc = doc(db, "posts", id);
  return await updateDoc(postDoc, {
    title,
    blogPost: content,
  });
};
