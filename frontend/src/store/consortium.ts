import { create } from 'zustand'
import { ConsortiaData } from '../interfaces/consortiaInterfaces'

interface State {
  consortiumData: ConsortiaData | null
}

interface Actions {
  setData: (consortiumData: ConsortiaData) => void
}

export const useConsortiumStore = create<State & Actions>((set) => ({
  consortiumData: null,
  setData: (consortiumData: ConsortiaData) => {
    set((state) => ({
      consortiumData
    }))
  },
}))
