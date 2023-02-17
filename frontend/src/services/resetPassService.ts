import instance from '../axios/axiosInstance'

export const resetPassService = async (email: string) => {
  try {
    const response = await instance.post('/api/auth/forgetPassword', email)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
