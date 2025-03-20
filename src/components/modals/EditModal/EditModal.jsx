import React from "react";
import { Button, Card } from "../../../components";
import { useEditPost } from "./hooks/useEditPost";
import "./editModal.style.css";

export const EditModal = () => {
  const {
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    isPending,
    isError,
    error,
    hasNoChanges,
    onSubmit,
    getSubmitButtonText,
    closeModal,
  } = useEditPost();

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
