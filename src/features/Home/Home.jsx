import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../services";
import { useModalsStore } from "../../store";
import "./home.style.css";

import BlogPost from "./components/BlogPost";

import {
  TypewriterEffect,
  DeleteModal,
  EditModal,
  Backdrop,
} from "../../components";

const Home = () => {
  const isOpen = useModalsStore((state) => state.isOpen);
  const modalType = useModalsStore((state) => state.modalType);

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

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
