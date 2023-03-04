/* eslint-disable @typescript-eslint/member-delimiter-style */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  token: string
  id: string
  role: string
  consortium: [{ _id: string | undefined; address: string | undefined }] | never[]
}

interface Actions {
  setToken: (token: string) => void
  setLogout: () => void
  setId: (id: string) => void
  setRole: (role: string) => void
  setConsortium: (consortium: [{ _id: string | undefined; address: string | undefined }]) => void
}

export const useAuthStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        token: '',
        id: '',
        role: '',
        consortium: [],
        setToken: (token: string) => {
          set((state) => ({
            token,
          }))
        },
        setId: (id: string) => {
          set((state) => ({
            id,
          }))
        },
        setRole: (role: string) => {
          set((state) => ({
            role,
          }))
        },
        setConsortium: (consortium: [{ _id: string | undefined; address: string | undefined }] | never[]) => {
          set((state) => ({
            consortium,
          }))
        },
        setLogout: () => {
          set(() => ({
            token: '',
            id: '',
            role: '',
            consortium: [],
          }))
        },
      }),
      {
        name: 'auth',
      },
    ),
    {
      name: 'Auth',
      enabled: true,
      anonymousActionType: 'AuthAction',
      serialize: {
        options: true,
      },
    },
  ),
)

/*
    Para guardar el token/id/desloguearse en el store de zustand se deben seguir los siguientes pasos:

    1) import { useAuthStore } desde esta ruta.

    2) dentro de la función donde se vaya a guardar el token, utilizar el siguiente código:
    const setToken = useAuthStore((state) => state.setToken)

    3) dentro del handleSubmit escribir setToken(res.data.token) donde res es la constante utilizada para guardar
    los datos del post.
*/
