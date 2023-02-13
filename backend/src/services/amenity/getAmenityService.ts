import Amenity from '../../models/Amenity'

export const getAmenityService = async(id: string) => {
  if(id !== 'all'){
    try {
      const amenityRetrieved = await Amenity.findById(id).select(
        '-createdAt -updatedAt'
      )
  
    if(!amenityRetrieved){
      const response = {
        ok: false,
        status: 404,
      }
      return response
    }
      const response = {
        ok: true,
        status: 200,
        amenityRetrieved
      }
      return response
    } catch(error) {
      return error
    }
  }
  const amenityRetrieved = await Amenity.find().select(
    '-createdAt -updatedAt'
  )
  const response = {
    ok: true,
    status: 200,
    amenityRetrieved
  }
  return response
}