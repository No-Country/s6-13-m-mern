import { PulseLoader } from 'react-spinners'
import BackTitleComponent from '../../../components/BackTitleComponent'
import WhiteModal from '../../../components/modal/WhiteModal'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import BlueModal from '../../../components/modal/BlueModal'

interface Entrance {
  subject: string
  description: string
}

const UserNotifications = () => {
  const [loading, setLoading] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalOk, setModalOk] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<Entrance>({ mode: 'onTouched' })

  const customSubmit: SubmitHandler<Entrance> = async (data: Entrance) => {
    setLoading(true)
    console.log('hola')
    setModal(false)
    setModalOk(true)
    setLoading(false)
  }

  return (
    <div className=" min-h-screen m-[50px]">
      <BackTitleComponent
        navigateTo="/user"
        title="Notifications"
      />
      <div className=" m-12">
        <h4>Consortium Meeting</h4>
        <hr />
      </div>
      <button
        className="bg-blueDark disabled:opacity-60 text-white text-xl w-60 h-12 rounded-lg block mt-8 mb-5 ml-auto mr-12"
        onClick={() => {
          setModal(true)
        }}
      >
        Add entrance
      </button>
      <WhiteModal isOpen={modal}>
        <div className="px-4 -my-3">
          <h3 className="font-bold text-xl text-blueDark text-start">Add New Event</h3>
          <form
            onSubmit={handleSubmit(customSubmit)}
            className=" text-center"
          >
            <div>
              <input
                className="w-[250px] sm:w-[370px] h-11 mx-4 mt-4 rounded-lg border border-blueDark p-2 placeholder:italic placeholder:text-grey"
                placeholder="Subject"
                autoComplete="off"
                {...register('subject', {
                  required: true,
                })}
              />
            </div>
            <div>
              <textarea
                className="w-[250px] sm:w-[370px] h-36 mx-4 mt-3 rounded-lg border border-blueDark p-2 placeholder:italic placeholder:text-grey"
                placeholder="Description"
                autoComplete="off"
                {...register('description', {
                  required: true,
                })}
              />
            </div>
            <button
              type="submit"
              className="bg-blueDark disabled:opacity-60 text-white text-xl w-60 h-10 rounded-lg block mx-auto my-2"
              disabled={!isDirty || !isValid}
            >
              {loading ? <PulseLoader color="white" /> : 'Add new event'}
            </button>
          </form>
        </div>
      </WhiteModal>
      <BlueModal isOpen={modalOk}>
        <p>Your notification has been sent</p>
        <button
          onClick={() => {
            setModalOk(false)
          }}
          className="bg-blue text-white text-lg w-14 h-10 rounded-2xl mt-6"
        >
          OK
        </button>
      </BlueModal>
    </div>
  )
}

export default UserNotifications
