import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'

const getConsortiumService = async (id: string) => {
  try {
    const consortia = await axios.get(`/api/consortium/get/${id}`)
    return consortia.data.consortium
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default getConsortiumService
