import { useHome } from "./hooks/useHome";
import "./home.style.css";

import BlogPost from "./components/BlogPost";

import {
  TypewriterEffect,
  DeleteModal,
  EditModal,
  Backdrop,
} from "../../components";

const Home = () => {
  const { posts, isLoading, isError, error, isOpen, modalType } = useHome();

  if (isLoading) return <div className="home">Loading posts...</div>;
  if (isError) return <div className="home">Error: {error.message}</div>;

  return (
    <>
      <div className="home">
        <h1>
          <TypewriterEffect text="Welcome to my Blog" speed={150} />
        </h1>
        {posts.map((post) => (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.blogPost}
            author={post.author.name}
            authorId={post.author.id}
          />
        ))}
      </div>

      {isOpen && modalType === "delete" && <DeleteModal />}
      {isOpen && modalType === "edit" && <EditModal />}
      {isOpen && <Backdrop />}
    </>
  );
};

export default Home;
