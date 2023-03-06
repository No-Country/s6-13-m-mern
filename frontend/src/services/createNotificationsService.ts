import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { Notification } from '../interfaces/notificationInterfaces'
import { useAuthStore } from '../store/auth'

const createNotificationsService = async (data: Notification) => {
  const token = useAuthStore.getState().token
  try {
    const res = await axios.post('/api/notification/post', data, {
      headers: {
        token: `${token}`,
      },
    })
    return res
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default createNotificationsService
