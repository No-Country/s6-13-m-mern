import Container from '../../../components/Container'
import { useAuthStore } from '../../../store/auth'
import { userStore } from '../../../store/user'
import getUserByIdService from '../../../services/getUserByIdService'
import { useState, useEffect } from 'react'
import { IResponseUser } from '../../../interfaces/userInterfaces'
import BackTitleComponent from '../../../components/BackTitleComponent'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import { getAllAmenitiesService } from '../../../services/createConsortiumService'
import { ClimbingBoxLoader } from 'react-spinners'

const CreateConsortium = () => {
  const [amenities, setAmenities] = useState([])
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onTouched' })

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  const getOptions = async () => {
    const newOptions = await getAllAmenitiesService()
    setAmenities(amenities)
    console.log(amenities)
  }
  getOptions()
  // const userId = useAuthStore((state) => state.id)

  // const setUser = userStore((state) => state.setData)

  // const getUser = async () => {
  //   const res = (await getUserByIdService(userId)) as IResponseUser
  //   console.log(res)
  //   setUser(res.user)
  // }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    // getUser()
  }, [])

  // const user = userStore((state) => state.userData)
  // console.log(user)
  // const handleLogout = useAuthStore((state) => state.setLogout)

  const [menu, setMenu] = useState('My consortiums')

  const customSubmit = (data: any) => {
    const amenitieParsedValues = data.amenities.map((amenity: any) => amenity.value)
    const consortiumInfo = JSON.stringify({ ...data, amenities: amenitieParsedValues })
    const createConsortiumService(consortiumInfo)
  }

  return (
    <section className="pb-32">
      <Container>
        <div className="flex gap-7">
          <div className="relative w-[288px] h-[560px] left-[30px] top-[50px] bg-[#0064EBB8] rounded-[8px] border-[2.5px] border-[#00060D]">
            <div className="flex justify-center gap-4 pt-12 px-2">
              {/* <img
                src={user?.img}
                alt="photo"
                className="rounded-full border-black border-2 w-24"
              />
              <div className="flex flex-col justify-center text-center">
                <h4 className="font-bold text-lg">
                  {user?.name} {user?.lastname}
                </h4>
                <span>{user?.role}</span>
              </div> */}
            </div>
            <div className="flex flex-col items-start pl-8 pt-12 gap-12">
              <button
                className={`${menu === 'Profile' ? 'font-bold' : ''}`}
                onClick={() => {
                  setMenu('Profile')
                }}
              >
                Profile
              </button>
              <button
                className={`${menu === 'My consortiums' ? 'font-bold' : ''}`}
                onClick={() => {
                  setMenu('My consortiums')
                }}
              >
                My consortiums
              </button>
              <button
                className={`${menu === 'Edit consortium' ? 'font-bold' : ''}`}
                onClick={() => {
                  setMenu('Edit consortium')
                }}
              >
                Edit consortium
              </button>
              {/* <button onClick={handleLogout}>Logout</button> */}
            </div>
          </div>
          <div className="bg-blue bg-opacity-20 w-[880px] border-[2.5px] border-black rounded-lg mt-[50px] h-[560px] overflow-y-scroll no-scrollbar">
            <div className='grid grid-flow-col w-full mt-10 justify-around items-center'>
              <div className='self-start'>
                <BackTitleComponent title="Create Consortium" navigateTo='/' />
                <img src="" alt="" />
              </div>
              <div>
                <form className='w-72' onSubmit={handleSubmit(customSubmit)}>
                  <input
                    className={`border-2 ${!errors.name ? 'border-blueDark' : 'border-red'
                      } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-white focus:outline-none text-lg`}
                    type="text"
                    autoComplete='off'
                    placeholder="Enter your name"
                    {...register('name', {
                      required: true,
                    })}
                  />
                  <input
                    className={`border-2 ${!errors.address ? 'border-blueDark' : 'border-red'
                      } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-white focus:outline-none text-lg`}
                    type="text"
                    autoComplete='off'
                    placeholder="Enter your address"
                    {...register('address', {
                      required: true,
                    })}
                  />
                  <input
                    className={`border-2 ${!errors.floors ? 'border-blueDark' : 'border-red'
                      } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-white focus:outline-none text-lg`}
                    type="text"
                    autoComplete='off'
                    placeholder="Enter your floors"
                    {...register('floors', {
                      required: true,
                    })}
                  />
                  <input
                    className={`border-2 ${!errors.units ? 'border-blueDark' : 'border-red'
                      } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-white focus:outline-none text-lg`}
                    type="text"
                    autoComplete='off'
                    placeholder="Enter your units"
                    {...register('units', {
                      required: true,
                    })}
                  />
                  <Controller
                    control={control}
                    name="amenities"
                    render={({
                      field: { value, name, onChange },
                    }) => (
                      <Select
                        onChange={onChange}
                        options={options}
                        isMulti={true}
                        value={value}
                        name={name}
                      />
                    )}
                  />
                  <button disabled={!isDirty || !isValid} className='w-full disabled:bg-gray-500 text-center text-white mt-14 rounded-md px-10 py-3 bg-blueDark' type="submit">
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CreateConsortium
