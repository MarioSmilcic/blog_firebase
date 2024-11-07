import { create } from "zustand";

export const useModalsStore = create((set) => ({
  isOpen: false,
  modalType: null,
  post: null,

  openModal: (type, post) =>
    set({
      isOpen: true,
      modalType: type,
      post,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      modalType: null,
      post: null,
    }),
}));
