import { create } from 'zustand'
import { UserProfile } from '../interfaces/userInterfaces'

interface State {
  userData: UserProfile | null
}

interface Actions {
  setData: (userData: UserProfile) => void
}

export const userStore = create<State & Actions>((set) => ({
  userData: null,
  setData: (userData: UserProfile) => {
    set((state) => ({
      userData,
    }))
  },
}))
