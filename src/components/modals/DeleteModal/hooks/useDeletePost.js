import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModalsStore, useNotificationsStore } from "../../../../store";
import { deletePost } from "../../../../services";

export const useDeletePost = () => {
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

  return {
    post,
    isPending,
    isError,
    error,
    handleDelete,
    closeModal,
  };
};
