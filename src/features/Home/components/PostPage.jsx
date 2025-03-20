import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { auth, fetchPost } from "../../../services";
import {
  TrashIcon,
  EditIcon,
  Card,
  DeleteModal,
  EditModal,
  Backdrop,
} from "../../../components";

import { useModalsStore } from "../../../store/modals/modals.store";

import "../components/styles/postPage.style.css";

const PostPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const isOpen = useModalsStore((state) => state.isOpen);
  const modalType = useModalsStore((state) => state.modalType);
  const openModal = useModalsStore((state) => state.openModal);

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPost(postId),
    onError: () => {
      navigate("/");
    },
  });

  if (isLoading) {
    return (
      <div className="post-page">
        <Card>
          <div className="loading">Loading post...</div>
        </Card>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="post-page">
        <Card>
          <div className="error">{error.message}</div>
        </Card>
      </div>
    );
  }

  const isAuthor = auth.currentUser?.uid === post.author.id;

  const handleDelete = () => {
    openModal("delete", {
      id: post.id,
      title: post.title,
      onSuccess: () => navigate("/"),
    });
  };

  const handleEdit = () => {
    openModal("edit", {
      id: post.id,
      title: post.title,
      content: post.blogPost,
    });
  };

  return (
    <>
      <div className="post-page">
        <Card>
          <article className="post-content">
            <h1>{post.title}</h1>
            <div className="post-metadata">
              <span className="author">Written by {post.author.name}</span>
            </div>
            <div className="post-body">{post.blogPost}</div>
            {isAuthor && (
              <div className="post-actions">
                <div className="blog-post__icon icon-edit">
                  <EditIcon handleClick={handleEdit} />
                </div>
                <div className="blog-post__icon icon-delete">
                  <TrashIcon handleClick={handleDelete} />
                </div>
              </div>
            )}
          </article>
        </Card>
      </div>

      {isOpen && modalType === "delete" && <DeleteModal />}
      {isOpen && modalType === "edit" && <EditModal />}
      {isOpen && <Backdrop />}
    </>
  );
};

export default PostPage;
