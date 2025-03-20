import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useModalsStore, useNotificationsStore } from "../../../../store";
import { updatePost } from "../../../../services";
import { editPostSchema } from "../../../../validation";

export const useEditPost = () => {
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

  return {
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
  };
};
