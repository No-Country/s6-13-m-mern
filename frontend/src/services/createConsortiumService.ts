import instance from '../axios/axiosInstance'
import { ConsortiumCreationValues, EditConsortium } from '../interfaces/amenitiesInterfaces'
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
  try {
    const consortiumAmenities = await instance.get(`api/amenity/${consortiumId}`, {
      headers: {
        token: `${token}`,
      },
    })
    return consortiumAmenities
  } catch (err) {
    console.log(err)
  }
}

export const editConsortiumService = async (consortiumId: string, userId: string, data: EditConsortium) => {
  console.log('TOKEN', token)
  console.log('CONSORTIUM ID:', consortiumId)
  console.log('USER ID:', userId)
  console.log('EDIT CONSORTIUM:', data)
  try {
    const response = await instance.put(`api/consortium/editConsortium/${consortiumId}/${userId}`, data, {
      headers: {
        token: `${token}`,
      },
    })
    return response
  } catch (err) {
    console.log(err)
  }
}
