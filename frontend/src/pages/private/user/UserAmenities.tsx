import { useEffect, useState } from 'react'
import { userStore } from '../../../store/user'
import getConsortiumService from '../../../services/getConsortiumService'
import { Amenity, ConsortiaData } from '../../../interfaces/consortiaInterfaces'
import { PulseLoader } from 'react-spinners'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useAuthStore } from '../../../store/auth'
import addReserveService from '../../../services/addReserveService'
import BlueModal from '../../../components/modal/BlueModal'

interface ReserveForm {
  amenity: string
  startDate: string
  endDate: string
  startHour: string
  endHour: string
}

const UserAmenities = () => {
  const [amenities, setAmenities] = useState<Amenity[]>()
  const [loading, setLoading] = useState(false)
  const [modalOk, setModalOk] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<ReserveForm>({ mode: 'onTouched' })

  const userId = useAuthStore((state) => state.id)
  const user = userStore((state) => state.userData)
  const consortiumId = user?.consortium?.find(() => true)?._id
  const consortiumName = user?.consortium?.find(() => true)?.name

  const consortium = async () => {
    if (consortiumId) {
      const cons = (await getConsortiumService(consortiumId)) as ConsortiaData
      setAmenities(cons.amenities)
    }
  }

  const customSubmit: SubmitHandler<ReserveForm> = async (data: ReserveForm) => {
    const { amenity, startDate, startHour, endDate, endHour } = data
    if (consortiumId) {
      const dataReserve = {
        user: userId,
        consortium: consortiumId,
        status: 'reserved',
        amenity,
        startDate,
        startHour,
        endDate,
        endHour,
      }
      setLoading(true)
      await addReserveService(dataReserve)
      setModalOk(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    consortium()
  }, [])

  return (
    <div>
      <h3 className="font-bold text-xl ml-11 mt-7">Make your reservation</h3>
      <div className="text-center max-w-[350px] mx-auto my-10">
        <h5 className=" font-bold text-lg text-blueDark text-start mb-5">Consortium: {consortiumName}</h5>
        <form onSubmit={handleSubmit(customSubmit)}>
          <h5 className=" font-bold text-lg text-blueDark text-start ml-8">Amenity</h5>

          <select
            {...register('amenity', {
              required: true,
              minLength: 5,
            })}
            className="w-[330px] h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black block mx-auto mb-5"
            defaultValue="def"
          >
            <option
              disabled
              value="def"
            >
              Select Amenity
            </option>
            {amenities?.map((am, i) => (
              <option
                value={am._id}
                key={i}
              >
                {am.name}
              </option>
            ))}
          </select>
          <h5 className=" font-bold text-lg text-blueDark text-start ml-8">Reserve from</h5>
          <div className="flex justify-between">
            <input
              type="date"
              className="w-[60%] h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black block mx-auto"
              {...register('startDate', {
                required: true,
              })}
            />
            <input
              type="time"
              className="w-[30%] h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black block mx-auto"
              {...register('startHour', {
                required: true,
              })}
            />
          </div>
          <h5 className=" font-bold text-lg text-blueDark text-start ml-8 mt-5">Reserve to</h5>
          <div className="flex justify-between">
            <input
              type="date"
              className="w-[60%] h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black block mx-auto mb-5"
              {...register('endDate', {
                required: true,
              })}
            />
            <input
              type="time"
              className="w-[30%] h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black block mx-auto mb-5"
              {...register('endHour', {
                required: true,
              })}
            />
          </div>
          <button
            type="submit"
            className="bg-blueDark disabled:opacity-60 text-white text-xl w-60 h-12 rounded-2xl block mx-auto mt-8 mb-5"
            disabled={!isDirty || !isValid}
          >
            {loading ? <PulseLoader color="white" /> : 'Reserve'}
          </button>
        </form>
      </div>
      <BlueModal isOpen={modalOk}>
        <p>Your reserve has been sent</p>
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

export default UserAmenities
