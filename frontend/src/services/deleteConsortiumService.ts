import axios from '../axios/axiosInstance'

export const deleteConsortiumService = async (consortiumId: string, userId: string) => {
  try {
    const res = await axios.delete(`api/consortium/delete/${consortiumId}/${userId}`)
    return res
  } catch (err) {
    console.log(err)
  }
}
