import { create } from "zustand";

export const useNotificationsStore = create((set) => ({
  message: null,
  type: null,

  showNotification: (message, type = "created") => {
    set({ message, type });

    setTimeout(() => {
      set({ message: null, type: null });
    }, 3000);
  },

  hideNotification: () => set({ message: null, type: null }),
}));
