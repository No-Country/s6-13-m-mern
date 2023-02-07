import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  token: string;
};

type Actions = {
  setToken: (token: string) => void;
};

export const useAuthStore = create(
  persist<State & Actions>(
    (set) => ({
      token: '',
      setToken: (token: string) =>
        set((state) => ({
          token,
        })),
    }),
    {
      name: 'auth',
    }
  )
);

/* 
    Para guardar el token en el store de zustand se deben seguir los siguientes pasos:

    1) import { useAuthStore } desde esta ruta.

    2) dentro de la función donde se vaya a guardar el token, utilizar el siguiente código:
    const setToken = useAuthStore((state) => state.setToken)

    3) dentro del handleSubmit escribir setToken(res.data.token) donde res es la constante utilizada para guardar 
    los datos del post.
*/
