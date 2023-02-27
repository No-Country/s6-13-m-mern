import { IAmenity } from "../../interfaces"
import Amenity from "../../models/Amenity"

export const putAmenityService = async(id: string, body: IAmenity) => {
 try {
  const amenityUpdate = await Amenity.findByIdAndUpdate(id, body, {
    new: true,
  }).select(
    '-createdAt -updatedAt'
  )

  if(amenityUpdate){
    const { name, description, reservable, size, img } = amenityUpdate
    const response = {
      status: 200,
      msg: 'Amenity actualizada con exito',
      amenity: { name, description, reservable, size, img },
      ok: true
    }
    return response
  }

  const response = {
    status: 404,
    msg: 'Amenity no encontrada',
    ok: false
  }
  return response
 } catch (error) {
  return (error)
 }
}