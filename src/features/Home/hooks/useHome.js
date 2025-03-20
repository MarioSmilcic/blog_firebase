import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../../services";
import { useModalsStore } from "../../../store";

export const useHome = () => {
  const isOpen = useModalsStore((state) => state.isOpen);
  const modalType = useModalsStore((state) => state.modalType);

  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return {
    posts,
    isLoading,
    isError,
    error,
    isOpen,
    modalType,
  };
};
