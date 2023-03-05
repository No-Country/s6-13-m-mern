import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'
import { useAuthStore } from '../store/auth'

export interface Complaint {
  name: string
  apt?: string
  email?: string
  subject: string
  message: string
}

const UserComplaintService = async (data: Complaint) => {
  const token = useAuthStore.getState().token
  try {
    const resComplaint = await axios.post('/api/sendConstraint', data, {
      headers: {
        token: `${token}`,
      },
    })
    return resComplaint.data
  } catch (error) {
    const err = error as AxiosError
    console.log(err)
    console.log('catch')
    return err.response?.data
  }
}

export default UserComplaintService
