import React from "react";
import { Button, Card } from "../../../components";
import { useDeletePost } from "./hooks/useDeletePost";
import "./deleteModal.style.css";

export const DeleteModal = () => {
  const { post, isPending, isError, error, handleDelete, closeModal } =
    useDeletePost();

  return (
    <div className="deleteModal">
      <Card>
        <h2>Are you sure you want to delete "{post.title}"?</h2>
        {isError && <div className="error-message">{error.message}</div>}
        <div className="deleteModal__buttons">
          <Button text="Cancel" onClick={closeModal} />
          <Button
            text={isPending ? "Deleting..." : "Delete"}
            onClick={handleDelete}
            disabled={isPending}
          />
        </div>
      </Card>
    </div>
  );
};
