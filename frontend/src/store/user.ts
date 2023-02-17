import { create } from 'zustand'

interface State {
  userData: object
}

interface Actions {
  setData: (userData: object) => void
}

export const userStore = create<State & Actions>((set) => ({
  userData: {},
  setData: (userData: object) => {
    set((state) => ({
      userData,
    }))
  },
}))
