import axios from '../axios/axiosInstance'

export const renewValidateTokenAccount = async (id: string) => {
  try {
    const resp = await axios.get(`/api/user/renewToken/${id}`)
    return resp.data
  } catch (error) {
    console.log(error)

    return error
  }
}
