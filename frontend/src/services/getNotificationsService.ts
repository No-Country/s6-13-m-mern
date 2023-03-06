import { AxiosError } from 'axios'
import axios from '../axios/axiosInstance'
import { useAuthStore } from '../store/auth'

const getNotificationsService = async (id: string) => {
  const token = useAuthStore.getState().token
  try {
    const res = await axios.get(`/api/notification/id/${id}`, {
      headers: {
        token: `${token}`,
      },
    })
    return res.data.notificationRetrived
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}

export default getNotificationsService
