import instance from '../axios/axiosInstance'
import { ConsortiumCreationValues } from '../interfaces/amenitiesInterfaces'
import { useAuthStore } from '../store/auth'

const token = useAuthStore.getState().token
export const getAllAmenitiesService = async () => {
  try {
    const allAmenities = await instance.get('api/amenity/id/all', {
      headers: {
        token: `${token}`,
      },
    })
    return allAmenities.data.amenityRetrieved
  } catch (err) {
    console.log(err)
  }
}

export const createConsortiumService = async (data: ConsortiumCreationValues) => {
  try {
    const response = await instance.post('api/consortium/create', data, {
      headers: {
        token: `${token}`,
      },
    })
    return response
  } catch (err) {
    console.log(err)
  }
}

export const getConsortiumAmenities = async (consortiumId: string) => {
  const consortiumAmenities = await instance.get(`api/amenity/${consortiumId}`, {
    headers: {
      token: `${token}`,
    },
  })
  console.log(consortiumAmenities)
}
// export editConsortiumService = async (data: any){
// const response = await instance.put
// }
