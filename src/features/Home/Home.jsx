import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../api/posts";
import { useModalsStore } from "../../store/modals/modals.store";
import "./home.style.css";

import BlogPost from "./components/BlogPost";
import DeleteModal from "../../components/modals/DeleteModal/DeleteModal";
import EditModal from "../../components/modals/EditModal/EditModal";
import Backdrop from "../../components/modals/Backdrop/Backdrop";

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
        <h1>Blog</h1>
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
