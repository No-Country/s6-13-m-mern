import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  token: string
  id: string
  role: string
}

interface Actions {
  setToken: (token: string) => void
  setLogout: () => void
  setId: (id: string) => void
  setRole: (role: string) => void
}

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      id: '',
      role: '',
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
      setLogout: () => {
        set(() => ({
          token: '',
          id: '',
        }))
      },
    }),
    {
      name: 'auth',
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
