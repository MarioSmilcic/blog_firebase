import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Card } from "../../../components";
import { useModalsStore, useNotificationsStore } from "../../../store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "../../../services";
import { editPostSchema } from "../../../validation";
import "./editModal.style.css";

export const EditModal = () => {
  const closeModal = useModalsStore((state) => state.closeModal);
  const post = useModalsStore((state) => state.post);
  const showNotification = useNotificationsStore(
    (state) => state.showNotification
  );
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(editPostSchema(post?.title, post?.content)),
    mode: "onChange",
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
    },
  });

  const watchedFields = watch(["title", "content"]);
  const hasNoChanges =
    watchedFields[0]?.trim() === post?.title?.trim() &&
    watchedFields[1]?.trim() === post?.content?.trim();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      showNotification("Post updated successfully!", "updated");
      closeModal();
    },
    onError: (error) => {
      showNotification(error.message, "error");
    },
  });

  const onSubmit = (data) => {
    mutate({
      id: post.id,
      title: data.title.trim(),
      content: data.content.trim(),
    });
  };

  const getSubmitButtonText = () => {
    if (isPending) return "Saving...";
    if (!isDirty || hasNoChanges) return "No changes made";
    if (!isValid) return "Please fix the errors";
    return "Save Changes";
  };

  return (
    <div className="editModal">
      <Card>
        <h2>Update Post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="editModal__form">
          <div className="editModal__input">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              {...register("title")}
              disabled={isPending}
              className={errors.title ? "error" : ""}
              autoComplete="off"
            />
            {errors.title && (
              <span className="error-text">{errors.title.message}</span>
            )}
          </div>

          <div className="editModal__input">
            <label htmlFor="content">Post:</label>
            <textarea
              id="content"
              {...register("content")}
              className={`editModal__textarea ${errors.content ? "error" : ""}`}
              disabled={isPending}
            />
            {errors.content && (
              <span className="error-text">{errors.content.message}</span>
            )}
          </div>

          {isError && <div className="error-message">{error.message}</div>}

          <div className="editModal__buttons">
            <Button text="Cancel" onClick={closeModal} />
            <Button
              text={getSubmitButtonText()}
              type="submit"
              disabled={!isDirty || !isValid || isPending || hasNoChanges}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};
