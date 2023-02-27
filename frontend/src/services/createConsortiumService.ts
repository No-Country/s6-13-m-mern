import instance from '../axios/axiosInstance'
import { ConsortiumCreationValues } from '../interfaces/amenitiesInterfaces'

export const getAllAmenitiesService = async () => {
  try {
    const allAmenities = await instance.get('api/amenity/id/all')
    return allAmenities.data.amenityRetrieved
  } catch (err) {
    console.log(err)
  }
}

export const createConsortiumService = async (data: ConsortiumCreationValues) => {
  const response = await instance.post('api/consortium/create', { data })
  return response
}
