import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { auth, fetchPost } from "../../../services";
import { useModalsStore } from "../../../store";

export const usePostPage = () => {
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

  const isAuthor = post ? auth.currentUser?.uid === post.author.id : false;

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

  return {
    post,
    isLoading,
    isError,
    error,
    isAuthor,
    isOpen,
    modalType,
    handleDelete,
    handleEdit,
  };
};
