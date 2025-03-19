export { auth, db, provider } from "./firebase-config";

export {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
} from "./postService";

export { handleEmailAuth, signInWithGoogle, handleLogout } from "./authService";
