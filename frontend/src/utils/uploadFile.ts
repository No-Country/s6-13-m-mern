import { Dispatch, SetStateAction } from 'react'
import { uploadImageService } from '../services/cloudinary/uploadImageService'

export const upLoadFile = async (
  file: File | null,
  preset: string | undefined,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setImage: Dispatch<SetStateAction<string | undefined>>,
  setError: Dispatch<SetStateAction<boolean>>,
) => {
  if (!file) {
    console.log('The file is undefined')
    return
  }

  if (!preset) {
    console.log('The preset is undefined')
    return
  }

  setLoading(true)
  try {
    const response = await uploadImageService({ file, preset })
    setImage(response.secure_url)
  } catch (error) {
    console.log(error)
    setLoading(false)
    setError(true)
  }
}
