import instance from '../axios/axiosInstance'

export const resetPassService = async (data: { mail: string }) => {
  try {
    const response = await instance.post('/api/auth/forgetPassword', data)
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
