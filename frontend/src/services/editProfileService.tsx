import axios from '../axios/axiosInstance'
import { UserProfile } from '../interfaces/userInterfaces'
import { useAuthStore } from '../store/auth'

const editProfileService = async (data: UserProfile) => {
  try {
    const id = useAuthStore.getState().id
    const resp = await axios.put(`/api/user/update/${id}`, data)
    return resp
  } catch (error) {
    console.log(error)
  }
}

export default editProfileService
