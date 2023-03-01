import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'
import { Reserve } from '../interfaces/reserveInterface'

const addReserveService = async (data: Reserve) => {
  try {
    const resAdd = await axios.post('/api/reserve/post', data)
    return resAdd
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default addReserveService
