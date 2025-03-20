import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../services";
import { useNavigate } from "react-router-dom";
import { useNotificationsStore } from "../../store/notifications/notifications.store";
import { createPostSchema } from "../../validation/createPostSchema";
import "./createPost.styles.css";
import { Button, TypewriterEffect } from "../../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const showNotification = useNotificationsStore(
    (state) => state.showNotification
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(createPostSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      blogPost: "",
    },
  });

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      showNotification("Post created successfully!", "created");
      navigate("/");
    },
    onError: (error) => {
      showNotification(error.message, "error");
    },
  });

  const onSubmit = (data) => {
    mutate({
      title: data.title.trim(),
      blogPost: data.blogPost.trim(),
    });
  };

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
