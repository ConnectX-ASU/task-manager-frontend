import create from "zustand";

const store = (set) => ({
  theme: 'dark',
  setTheme: (state) => set(() => ({ theme: state })),
});

export const useStore = create(store);
