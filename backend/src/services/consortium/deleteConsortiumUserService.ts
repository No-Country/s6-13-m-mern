import Consortium from "../../models/Consortium";
import User from "../../models/User";

interface resp {
  ok: boolean,
  status: number,
  consortium?: object,
  error?: string | any,
  msg?: string
}

// TODO: CHECKS
export const deleteConsortiumUserService = async (consortium: string, user: string): Promise<resp> => {
  try {
    const deletedUser = await Consortium.updateOne(
      { 
        _id: consortium 
      },
      {
        $pull: {
          users: user
        }
      }
      );

    const deletedConsortium = await User.updateOne(
      {
        _id: user
      },
      {
        $pull: {
          consortium
        }
      });

    if (!deletedUser.modifiedCount) return {
      ok: false,
      status: 404,
      error: 'Error al eliminar usuario del consorcio'
    }
    if (!deletedConsortium.modifiedCount) return {
      ok: false,
      status: 404,
      error: 'Error al remover consorcio del usuario'
    }

    return {
      ok: true,
      status: 200,
      msg: 'Usuario eliminado de consorcio'
    }
  } catch (error: any) {
    return error;
  }
};
