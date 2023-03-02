import { useState } from 'react'
import { upLoadFile } from '../utils/uploadFile'

interface Props {
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>
  image: string | undefined
  preset: string | undefined
}

const ImageUploader = ({ setImage, image, preset }: Props) => {
  const id = `photoPicker-${new Date().getTime().toString()}`
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const changePicture = () => {
    const picker = document.getElementById(id)
    picker?.click()
  }

  const onImageChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileSelected = event.target.files?.[0]
    if (!fileSelected) {
      return
    }

    setLoading(true)
    upLoadFile(fileSelected, preset, setLoading, setImage, setError)
      .then((response) => {
        console.log(response)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const renderError = () => {
    return (
      <div className="absolute top-0 right-0 z-10 bg-slate-400 bg-opacity-80 h-[130px] w-[130px] overflow-hidden flex flex-col justify-center items-center p-2">
        <span className="text-[30px]">❌</span>
        <span className=" text-[12px] text-red font-bold">Image upload failed. Please try again later.</span>
      </div>
    )
  }

  const renderLoading = () => {
    return (
      <div className="absolute top-0 right-0 z-10 bg-slate-300 bg-opacity-80 h-[130px] w-[130px] overflow-hidden flex justify-center items-center">
        <span className="w-[108px] h-[108px] border-[10px] border-dotted border-blueDark rounded-full inline-block relative box-border animate-rotation"></span>
      </div>
    )
  }

  return (
    <div className=" h-[130px] w-[130px] overflow-hidden border-2 border-black rounded-lg relative mx-auto my-6">
      <button
        onClick={changePicture}
        className="absolute top-2 right-2 z-10 bg-slate-300 bg-opacity-80 rounded-full w-8 h-8 cursor-pointer"
      >
        <img
          src="../assets/edit.png"
          alt=""
          className="mx-auto pt-1"
        />
      </button>

      {error && renderError()}
      {loading && renderLoading()}

      <img
        className="object-cover h-[130px] min-w-full"
        src={image}
        alt=""
      />
      <input
        id={id}
        hidden
        type="file"
        name="file"
        accept="image/*"
        onChange={onImageChanged}
      ></input>
    </div>
  )
}

export default ImageUploader
