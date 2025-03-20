import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../../services";
import { useNotificationsStore } from "../../../store";
import { createPostSchema } from "../../../validation";

export const useCreatePost = () => {
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

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    onSubmit,
    isPending,
    isError,
    error,
  };
};
