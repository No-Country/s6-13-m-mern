import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'

const addMembersService = async (consortiumId: string, userId: string) => {
  try {
    const resAdd = await axios.put(`/api/consortium/addUser/${consortiumId}/${userId}`)
    return resAdd
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default addMembersService
