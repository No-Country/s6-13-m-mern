import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'

const getReserveService = async (id: string) => {
  try {
    const resGet = await axios.get(`/api/reserve/idUser/${id}`)
    return resGet.data.reserveRetrieved
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getReserveService
