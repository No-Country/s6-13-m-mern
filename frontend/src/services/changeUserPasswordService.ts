import instance from '../axios/axiosInstance'

interface passwordValues {
  id: string
  password: string
  token: string
}

export const changeUserPasswordService = async (data: passwordValues) => {
  const config = {
    headers: {
      token: data.token
    }
  }
  try {
    const response = await instance.post(`/api/auth/changepassword/${data.id}`, { password: data.password }, config)
    return response
  } catch (error) {
    return error
  }
}
