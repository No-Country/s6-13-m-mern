import instance from '../axios/axiosInstance'

export const getAllAmenitiesService = async () => {
  try {
    const allAmenities = await instance.get('api/amenity/id/all')
    return allAmenities
  } catch (err) {
    console.log(err)
  }
}

export const createConsortiumService(data){
  const response = await instance.post('api/amenity')
}