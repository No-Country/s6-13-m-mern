import axios from '../axios/axiosInstance'

export const deleteConsortiumService = async (id: string) => {
  try {
    const res = await axios.delete(`api/consortium/delete/${id}`)
    return res
  } catch (err) {
    console.log(err)
  }
}
