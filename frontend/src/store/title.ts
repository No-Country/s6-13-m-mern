import { create } from 'zustand'

interface State {
  title: string | null
}

interface Actions {
  setTitle: (title: string) => void
  setClearTitle: () => void
}

export const useTitle = create<State & Actions>((set) => ({
  title: null,
  setTitle: (title: string) => {
    set((state) => ({
      title,
    }))
  },
  setClearTitle: () => {
    set(() => ({
      title: null,
    }))
  },
}))
