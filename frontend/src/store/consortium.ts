import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { ConsortiaData } from '../interfaces/consortiaInterfaces'

interface State {
  consortiumData: ConsortiaData | null
}

interface Actions {
  setData: (consortiumData: ConsortiaData) => void
}

export const useConsortiumStore = create<State & Actions>()(
  devtools(
    (set) => ({
      consortiumData: null,
      setData: (consortiumData: ConsortiaData) => {
        set((state) => ({
          consortiumData,
        }))
      },
    }),
    {
      name: 'consortium',
      enabled: true,
      anonymousActionType: 'ConsortiumAction',
      serialize: {
        options: true,
      },
    },
  ),
)
