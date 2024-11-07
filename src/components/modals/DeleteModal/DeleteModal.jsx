import React from "react";
import Card from "../../Card/Card";
import Button from "../../Button/Button";
import { useModalsStore } from "../../../store/modals/modals.store";
import { useNotificationsStore } from "../../../store/notifications/notifications.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../../../api/posts";
import "./deleteModal.style.css";

const DeleteModal = () => {
  const closeModal = useModalsStore((state) => state.closeModal);
  const post = useModalsStore((state) => state.post);
  const showNotification = useNotificationsStore(
    (state) => state.showNotification
  );
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      showNotification("Post deleted successfully!", "deleted");
      closeModal();
      if (post.onSuccess) {
        post.onSuccess();
      }
    },
    onError: (error) => {
      showNotification(error.message, "error");
    },
  });

  const handleDelete = () => {
    mutate(post.id);
  };

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

export default DeleteModal;
