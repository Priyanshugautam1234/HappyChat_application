import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "sunset",
  isMoodMode: false,
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
  toggleMoodMode: () => set((state) => ({ isMoodMode: !state.isMoodMode })),
}));
