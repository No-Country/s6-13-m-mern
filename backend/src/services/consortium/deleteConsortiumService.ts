import Consortium from "../../models/Consortium";
import User from "../../models/User";

//TODO: CONFIRMAR ELIMINACION Y ACTUALIZACION DE USUARIOS
export const deleteConsortiumService = async (address: string) => {
  try {
    const consortium = await Consortium.findOne({ address });
    if (!consortium) {
      return {
        ok: false,
        status: 404,
        error: 'No existe consorcio en esa direccion'
      }
    }
    const users = consortium.users;

    // const deletedConsortium = await Consortium.remove();
    await Consortium.deleteOne({ address });
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