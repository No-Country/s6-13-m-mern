import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { PulseLoader } from 'react-spinners'

interface Complaint {
  subject: string
  description: string
}

const UserComplaints = () => {
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<Complaint>({ mode: 'onTouched' })

  const customSubmit: SubmitHandler<Complaint> = async (data: Complaint) => {
    setLoading(true)
    console.log('hola')
  }

  return (
    <div>
      <h3 className="font-bold text-xl ml-11 mt-7">New Complaint</h3>
      <div className=" px-14 py-4">
        <p>Complete the following form to create a complaint to the Admin.</p>
        <div className="">
          <form
            onSubmit={handleSubmit(customSubmit)}
            className=" text-center"
          >
            <div>
              <input
                className="w-[250px] sm:w-[370px] mx-4 mt-8 rounded-lg border-2 border-blueDark p-2 placeholder:italic placeholder:text-grey"
                placeholder="Subject"
                autoComplete="off"
                {...register('subject', {
                  required: true,
                })}
              />
            </div>
            <div>
              <textarea
                className="w-[250px] sm:w-[370px] h-36 mx-4 mt-8 rounded-lg border-2 border-blueDark p-2 placeholder:italic placeholder:text-grey"
                placeholder="Description"
                autoComplete="off"
                {...register('description', {
                  required: true,
                })}
              />
            </div>
            <button
              type="submit"
              className="bg-blueDark disabled:opacity-60 text-white text-xl w-60 h-12 rounded-2xl block mx-auto mt-8 mb-5"
              disabled={!isDirty || !isValid}
            >
              {loading ? <PulseLoader color="white" /> : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UserComplaints
