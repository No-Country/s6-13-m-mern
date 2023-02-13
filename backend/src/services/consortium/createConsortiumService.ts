import Consortium from './../../models/Consortium';
import User from './../../models/User';


export const createConsortiumService = async (body: any) => {
  try {
    const { email, name, address, floor, apt } = body;
    const creator = await User.findOne({ email });
    
    if (!creator) return {
      ok: false,
      status: 404,
      error: 'Email/Usuario no encontrado'
    }

    const existConsort = await Consortium.findOne({ name });
    if (existConsort) return {
      ok: false,
      status: 400,
      error: 'Ya existe consorcio con misma direccion'
    }

    const consortium = await Consortium.create({
      name,
      address,
      users: [],
      admin: creator._id,
      floor,
      apt,
      amenities: []
    });
    consortium.save();

    const { modifiedCount } = await User.updateOne(
      {
        email
      }, {
        $addToSet: {
          consortium: consortium._id
        }
      }
    );

    if (!modifiedCount) {
      return {
        ok: false,
        status: 400,
        error: 'Error al asignarle un consorcio al administrador'
      }
    }

    return {
      ok: true,
      status: 200,
      consortium
    }
  } catch (error: any) {
    return error;
  }
};
