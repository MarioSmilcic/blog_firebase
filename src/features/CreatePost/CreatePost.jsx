import { useCreatePost } from "./hooks/useCreatePost";
import { Button, TypewriterEffect } from "../../components";
import "./createPost.styles.css";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    isPending,
    isError,
    error,
  } = useCreatePost();

  return (
    <div className="createPost">
      <h2>
        <TypewriterEffect text="Create Post" speed={150} />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="createPost-form">
        <div className="createPost-input">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            {...register("title")}
            disabled={isPending}
            className={errors.title ? "error" : ""}
          />
          {errors.title && (
            <span className="error-text">{errors.title.message}</span>
          )}
        </div>

        <div className="createPost-input">
          <label htmlFor="blogPost">Post:</label>
          <textarea
            className={`createPost-area ${errors.blogPost ? "error" : ""}`}
            id="blogPost"
            {...register("blogPost")}
            disabled={isPending}
          />
          {errors.blogPost && (
            <span className="error-text">{errors.blogPost.message}</span>
          )}
        </div>

        {isError && <div className="error-message">{error.message}</div>}

        <Button
          type="submit"
          text={isPending ? "Creating..." : "Create Post"}
          disabled={!isValid || isPending}
        />
      </form>
    </div>
  );
};

export default CreatePost;
