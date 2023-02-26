import axios, { AxiosError } from 'axios'

const cloudName = process.env.VITE_APP_CLOUDNAME

interface Props {
  file: File
  preset: string
}

export const uploadImageService = async ({ file, preset }: Props) => {
  if (cloudName === undefined) {
    console.log('Cloudinary name is not defined.')
    return
  }
  try {
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)
    const resp = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, data)
    return resp.data
  } catch (error) {
    const err = error as AxiosError
    return err.response?.data
  }
}
