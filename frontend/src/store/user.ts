import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { UserProfile } from '../interfaces/userInterfaces'

interface State {
  userData: UserProfile | null
}

interface Actions {
  setData: (userData: UserProfile) => void
  setLogout: () => void
}

export const userStore = create<State & Actions>()(
  devtools(
    (set) => ({
      userData: null,
      setData: (userData: UserProfile) => {
        set((state) => ({
          userData,
        }))
      },
      setLogout: () => {
        set(() => ({
          userData: null,
        }))
      },
    }),
    {
      name: 'user',
      enabled: true,
      anonymousActionType: 'UserAction',
      serialize: {
        options: true,
      },
    },
  ),
)
