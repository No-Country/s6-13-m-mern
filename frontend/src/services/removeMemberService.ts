import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'

const removeMembersService = async (consortiumId: string, userId: string) => {
  try {
    await axios.put(`/api/consortium/removeUser/${consortiumId}/${userId}`)
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default removeMembersService
