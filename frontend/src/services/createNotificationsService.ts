import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { Notification } from '../interfaces/notificationInterfaces'

const createNotificationsService = async (data: Notification) => {
  try {
    const res = await axios.post('/api/notification/post', data)
    return res
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default createNotificationsService
