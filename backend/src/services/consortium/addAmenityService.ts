import Consortium from "../../models/Consortium";
import Amenity from "../../models/Amenity";

interface resp {
  ok: boolean,
  status: number,
  consortium?: object,
  error?: string,
  msg?: string
}

export const addAmenityService = async (consortiumId: string, amenityId: string): Promise<resp> => {
  try {
    const amenity = await Amenity.findOne({ _id: amenityId });
    if (!amenity) {return {
      ok: false,
      status: 404,
      error: 'Comodidad no encontrado'
    }}

    const modifiedConsortium = await Consortium.updateOne(
      {
        _id: consortiumId
      },
      {
        $addToSet: {
          amenity: amenity._id
        }
      }
    );

    if (!modifiedConsortium.modifiedCount) {
      return {
        ok: false,
        status: 400,
        error: 'Error ingresando la comodidad'
      }
    }

    return {
      ok: true,
      status: 200,
      msg: 'Comodidad agregada al consorcio'
    }

  } catch (error: any) {
    return error;
  }
};
