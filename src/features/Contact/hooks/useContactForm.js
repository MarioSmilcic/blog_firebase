import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../../validation/contactSchema";
import { useNotificationsStore } from "../../../store/notifications/notifications.store";

export const useContactForm = () => {
  const showNotification = useNotificationsStore(
    (state) => state.showNotification
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    showNotification("Message sent successfully!", "created");
    reset();
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
};
