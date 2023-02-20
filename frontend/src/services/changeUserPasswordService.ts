import instance from '../axios/axiosInstance'

interface PasswordValues {
  id?: string
  password?: string
  token?: string
}

export const changeUserPasswordService = async (data: PasswordValues) => {
  const config = {
    headers: {
      token: data.token
    }
  }
  try {
    const response = await instance.post(`/api/auth/changepassword/${data.id || 'undefined'}`, { password: data.password }, config)
    return response
  } catch (error) {
    return error
  }
}
