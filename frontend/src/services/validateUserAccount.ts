import axios from 'axios'

export const validateUserAccount = async (id: string, token: string) => {
  const config = { headers: { token } }
  try {
    const resp = await axios.get(`/api/user/validate/${id}`, config)
    return resp.data
  } catch (error) {
    console.log(error)
  }
}
