import { useNavigate } from "react-router-dom";
import { useModalsStore } from "../../../store";
import { auth } from "../../../services";

export const useBlogPost = ({ id, title, content, authorId }) => {
  const navigate = useNavigate();
  const openModal = useModalsStore((state) => state.openModal);
  const isAuthor = auth.currentUser?.uid === authorId;

  const handleDelete = (e) => {
    e.stopPropagation();
    openModal("delete", { id, title });
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    openModal("edit", { id, title, content });
  };

  const navigateToPost = () => {
    navigate(`/post/${id}`);
  };

  // Truncate post content for preview
  const truncatedContent =
    content.length > 200 ? `${content.substring(0, 200)}...` : content;

  return {
    isAuthor,
    handleDelete,
    handleEdit,
    navigateToPost,
    truncatedContent,
  };
};
