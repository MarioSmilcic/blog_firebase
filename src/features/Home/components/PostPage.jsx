import {
  TrashIcon,
  EditIcon,
  Card,
  DeleteModal,
  EditModal,
  Backdrop,
} from "../../../components";
import { usePostPage } from "../hooks/usePostPage";
import "./styles/postPage.style.css";

const PostPage = () => {
  const {
    post,
    isLoading,
    isError,
    error,
    isAuthor,
    isOpen,
    modalType,
    handleDelete,
    handleEdit,
  } = usePostPage();

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
