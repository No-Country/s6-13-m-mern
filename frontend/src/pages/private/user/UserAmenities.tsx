import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { userStore } from '../../../store/user'
import getConsortiumService from '../../../services/getConsortiumService'
import { Amenity, ConsortiaData } from '../../../interfaces/consortiaInterfaces'
import { PulseLoader } from 'react-spinners'

const UserAmenities = () => {
  const [value, setValue] = useState<Dayjs | null>(dayjs('2023-01-01T21:11:54'))
  const [amenities, setAmenities] = useState<Amenity[]>()
  const [selectedAmenity, setSelectedAmenity] = useState<string>()
  const [loading, setLoading] = useState(false)

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue)
    console.log(value?.toJSON())
  }

  const user = userStore((state) => state.userData)
  const consortiumId = user?.consortium?.find(() => true)?._id
  const consortiumName = user?.consortium?.find(() => true)?.name

  const consortium = async () => {
    if (consortiumId) {
      const cons = (await getConsortiumService(consortiumId)) as ConsortiaData
      setAmenities(cons.amenities)
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
      <h5 className=' font-bold text-lg text-blueDark text-start ml-8 mb-5'>Consortium: {consortiumName}</h5>
        <form action="">
          <select
            onChange={(e) => {
              setSelectedAmenity(e.target.value)
            }}
            name="amenities"
            value={selectedAmenity}
            className="w-[330px] h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black block mx-auto mb-5"
          >
            <option
              disabled
              selected
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
          <h5 className=' font-bold text-lg text-blueDark text-start ml-8'>Reserve from</h5>
          <DateTimePicker
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <h5 className=' font-bold text-lg text-blueDark text-start ml-8 mt-5'>Reserve to</h5>
          <DateTimePicker
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
          <button
              type="submit"
              className="bg-blueDark disabled:opacity-60 text-white text-xl w-60 h-12 rounded-2xl block mx-auto mt-8 mb-5"
              // disabled={!isDirty || !isValid}
            >
              {loading ? <PulseLoader color="white" /> : 'Reserve'}
            </button>
        </form>
      </div>
    </div>
  )
}

export default UserAmenities
