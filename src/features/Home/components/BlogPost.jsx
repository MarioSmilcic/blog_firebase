import "../home.style.css";
import { TrashIcon, EditIcon } from "../../../components";
import { useBlogPost } from "../hooks/useBlogPost";

const BlogPost = ({ id, title, content: blogPost, author, authorId }) => {
  const {
    isAuthor,
    handleDelete,
    handleEdit,
    navigateToPost,
    truncatedContent,
  } = useBlogPost({
    id,
    title,
    content: blogPost,
    authorId,
  });

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
