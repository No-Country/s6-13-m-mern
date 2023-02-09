import Consortium from './../../models/Consortium';
import User from './../../models/User';

interface Resp {
  ok: boolean,
  status: number,
  consortium?: Promise<any>,
  error?: string 
}

export const createConsortiumService = async (body: any): Promise<Resp> => {
  try {
    const { userName, name, address, floor, apt } = body;
    const creator = await User.findOne({ userName });

    if (!creator) return {
      ok: false,
      status: 404
    }

    const newConsortium = Consortium.create({
      name,
      address,
      users: [],
      admin: creator._id,
      floor,
      apt,
      amenities: []
    });
    (await newConsortium).save();
    
    return {
      ok: true,
      status: 200,
      consortium: newConsortium
    }
  } catch (error: any) {
    return error.message;
  }
};
