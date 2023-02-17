import Consortium from "../../models/Consortium";
import User from "../../models/User";

//  TODO: CONFIRMAR ELIMINACION Y ACTUALIZACION DE USUARIOS
export const deleteConsortiumService = async (id: string) => {
  try {
    const consortium = await Consortium.findOne({ id });
    if (!consortium) {
      return {
        ok: false,
        status: 404,
        error: 'No existe consorcio en esa direccion'
      }
    }
    const users = consortium.users;

    await Consortium.deleteOne({ id });
    for (let i = 0; i < users.length; i++) {
      await User.updateOne(
        {
          _id: users[i]
        },
        {
          $pull: {
            consortium: consortium._id
          }
        }
      );
    }
    
    return {
      ok: true,
      status: 200,
      msg: 'Consorcio eliminado'
    }

  } catch (error) {
    return error;
  }
};