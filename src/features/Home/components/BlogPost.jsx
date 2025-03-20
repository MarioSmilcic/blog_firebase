import { useNavigate } from "react-router-dom";
import "../home.style.css";
import { TrashIcon, EditIcon } from "../../../components";

import { useModalsStore } from "../../../store";
import { auth } from "../../../services";

const BlogPost = ({ id, title, content: blogPost, author, authorId }) => {
  const navigate = useNavigate();
  const openModal = useModalsStore((state) => state.openModal);
  const isAuthor = auth.currentUser?.uid === authorId;

  const handleDelete = (e) => {
    e.stopPropagation();
    openModal("delete", { id, title });
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    openModal("edit", { id, title, content: blogPost });
  };

  const navigateToPost = () => {
    navigate(`/post/${id}`);
  };

  // Truncate post content for preview
  const truncatedContent =
    blogPost.length > 200 ? `${blogPost.substring(0, 200)}...` : blogPost;

  return (
    <article className="blog-preview" onClick={navigateToPost}>
      <h3 className="post-title">{title}</h3>
      <p className="blog-post">{truncatedContent}</p>
      <div className="blog-post__footer" onClick={(e) => e.stopPropagation()}>
        <p className="author">{author}</p>
        {isAuthor && (
          <div className="blog-post__icons">
            <div className="blog-post__icon">
              <TrashIcon handleClick={handleDelete} />
            </div>
            <div className="blog-post__icon">
              <EditIcon handleClick={handleEdit} />
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPost;
