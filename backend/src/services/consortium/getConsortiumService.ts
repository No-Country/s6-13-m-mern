import User from "../../models/User";

interface resp {
  ok: boolean,
  status: number,
  consortium?: object,
  error?: string
}
//TODO: CAMPO USERS INCLUIDO EN RESPUESTA A SOLICITUD DE INQUILINO? SOLO PARA ADMINISTRADOR? CONFIRMAR
export const getConsortiumService = async (email: string): Promise<resp> => {
  try {
    const user = await User.findOne({ email }).populate('consortium');

    if (!user) return {
      ok: false,
      status: 404,
      error: 'No posee consorcios asociados'
    }

    return {
      ok: true,
      status: 200,
      consortium: user.consortium
    }

  } catch (error: any) {
    return error;
  }
};
