import { IAmenity } from "../../interfaces"
import Amenity from "../../models/Amenity"

export const postAmenityService = async(amenity:IAmenity) => {
  try {
    const findByName = await Amenity.findOne({ name: amenity.name})

    if(findByName === null){
      const amenityToCreate = await Amenity.create(amenity)
      await amenityToCreate.save()

      const { id, name, description } = amenityToCreate

      const response = {
        msg: 'Amenity created',
        status: 200,
        ok: true,
        id: id,
        name,
        description
      }
      return response
    }
    const response = {
      status: 404,
      msg: 'Amenity already created',
      ok: false,
    }
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}