import User from "../../models/User";
import Consortium from "../../models/Consortium";

interface resp {
  ok: boolean,
  status: number,
  consortium?: object,
  error?: string,
  data?: object
}

//  TODO: LIMPIAR CODIGO, HACER FN IF PARA MODIFIEDCOUNT/MATCHEDCOUNT
export const addUserService = async (consrotiumId: string, userId: string, apt: string, floor: number): Promise<resp> => {
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) {return {
      ok: false,
      status: 404,
      error: 'User no registrado'
    }}
    const consortium = await Consortium.findOne({ _id: consrotiumId });

    const modifiedConsortium = await Consortium.updateOne(
    {
      _id: consrotiumId
    }, {
      $addToSet: {
        users: user._id
      }
    }
    );

    const modifiedUser = await User.updateOne(
      {
        _id: userId
      }, {
        $addToSet: {
          consortium: consortium?._id
        },
        $set: {
          apt,
          floor
        }
      }
      );

      if (!modifiedConsortium.matchedCount) {
        return {
          ok: false,
          status: 404,
          error: 'Consorcio no encontrado'
        }
      }
      if (!modifiedConsortium.modifiedCount) {
        return {
          ok: false,
          status: 400,
          error: 'Error ingresando el usuario'
        }
      }
      if (!modifiedUser.modifiedCount) {
        return {
          ok: false,
          status: 404,
          error: 'Error al asignarle un consorcio al usuario'
        }
      }
    
    return {
      ok: true,
      status: 200
    }

  } catch (error: any) {
    return error;
  }
};
