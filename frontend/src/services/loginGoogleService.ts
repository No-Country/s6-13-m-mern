import axios from '../axios/axiosInstance'
import { AxiosError } from 'axios'

export interface GoogleApiResponse {
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  locale: string
  name: string
  picture: string
  sub: string
}
export const loginGoogleService = async (data: GoogleApiResponse) => {
  const body = {
    name: data.given_name,
    lastname: data.family_name,
    img: data.picture,
    email: data.email,
    externalId: data.sub,
  }
  try {
    const resp = await axios.post('/api/auth/googleLogin', body)
    console.log(resp)
    return resp.data
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}
