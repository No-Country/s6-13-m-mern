import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'

const getNotificationsService = async (id: string) => {
  try {
    const res = await axios.get(`/api/notification/id/${id}`)
    return res.data.notificationRetrived
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default getNotificationsService
