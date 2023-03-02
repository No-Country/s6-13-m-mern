import Container from '../../../components/Container'
import { useAuthStore } from '../../../store/auth'
import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Select from 'react-select'
import { getAllAmenitiesService, editConsortiumService } from '../../../services/createConsortiumService'
import { AmenitiesListInt, ConsortiumStateValues, FormValues } from '../../../interfaces/amenitiesInterfaces'
import { PulseLoader } from 'react-spinners'
import BlueModal from '../../../components/modal/BlueModal'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteConsortiumService } from '../../../services/deleteConsortiumService'
import getConsortiumService from '../../../services/getConsortiumService'
import { Amenity } from '../../../interfaces/consortiaInterfaces'

const EditConsortium = () => {
  const { id } = useParams<{ id: string }>()
  const userId = useAuthStore((state) => state.id)
  const [img, setimg] = useState()

  const navigate = useNavigate()

  const getConsortium = async (idCons: string) => {
    const consort = await getConsortiumService(idCons)
    setimg(consort.img)
    const amenitiesDefault: AmenitiesListInt[] = []
    consort.amenities.forEach((option: Amenity) => {
      amenitiesDefault.push({ value: option.name, label: option.name, id: option._id })
    })
    reset({
      name: consort.name,
      address: consort.address,
      floor: consort.floor,
      apt: consort.apt,
      amenities: amenitiesDefault,
    })
  }

  const [state, setState] = useState<ConsortiumStateValues>({
    amenitiesList: [],
    openModal: false,
    load: false,
    message: 'Your Consortium has been updated',
  })

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    mode: 'onTouched',
  })

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      getConsortium(id)
      ;(async () => {
        const amenitiesCont: AmenitiesListInt[] = []

        const newOptions: [{ name: string, _id: string }] = await getAllAmenitiesService()

        newOptions.forEach((option) => {
          amenitiesCont.push({ value: option.name, label: option.name, id: option._id })
        })

        setState({ ...state, amenitiesList: amenitiesCont })
      })().catch((error) => {
        console.log(error)
      })
    }
  }, [id])

  const customSubmit = async (data: FormValues) => {
    if (id) {
      try {
        setState({ ...state, load: true })
        const amenitieParsedValues = data.amenities.map((amenity) => amenity.id)
        const newData = { ...data, amenities: amenitieParsedValues }
        // const consortiumInfo: ConsortiumCreationValues = { userId, ...data, amenities: amenitieParsedValues }
        // const response: any = await createConsortiumService(consortiumInfo)
        await editConsortiumService(id, userId, newData)
        setState({ ...state, openModal: true, load: false })
      } catch (error) {
        setState({
          ...state,
          openModal: true,
          message: 'An error has occurred, please try again later or make sure that you have admin privileges',
          load: false,
        })
        console.log(error)
      }
    }
  }
  const handleDelete = async () => {
    if (id) {
      const res = await deleteConsortiumService(id, userId)
      console.log(res)

      console.log('deleted')
    }
  }

  return (
    <>
      <BlueModal isOpen={state.openModal}>
        <h4>{state.message}</h4>
        <button
          onClick={() => {
            setState({ ...state, openModal: false })
            navigate('/admin', { state: 'My consortiums' })
          }}
          className="bg-blue text-white text-lg w-14 h-10 rounded-2xl mt-6"
        >
          OK
        </button>
      </BlueModal>
      {/* {(errors.name?.type ||
        errors.address?.type ||
        errors.amenities?.type ||
        errors.floor?.type ||
        errors.apt?.type ||
        errors.amenities?.type) === 'required' && (
        <p className="absolute w-full top-28 md:top-20 pl-2 bg-red rounded-b-sm border border-black text-lg font-sans text-white">
          Complete all required fields
        </p>
      )}
      {(errors.floor?.type === 'max' || errors.floor?.type === 'min') && (
        <p className="absolute w-full top-28 md:top-20 pl-2 bg-red rounded-b-sm border border-black text-lg font-sans text-white">
          The number of floors is not acceptable, please try with a value between 1 and 100
        </p>
      )}
      {(errors.apt?.type === 'max' || errors.apt?.type === 'min') && (
        <p className="absolute w-full top-28 md:top-20 pl-2 bg-red rounded-b-sm border border-black text-lg font-sans text-white">
          The number of apartments is not acceptable, please try with a value between 1 and 1000
        </p>
      )} */}

      <section className="pb-32">
        <Container>
          <div>
            <div className=" flex text-[28px] font-bold text-blueDark mt-16 mb-8">
              <button
                onClick={() => {
                  navigate('/admin', { state: 'My consortiums' })
                }}
              >
                <div className=" h-[30px] mr-5">
                  <img src={'/assets/icons/left-arrow.svg'} />
                </div>
              </button>
              <h2>Edit Consortium</h2>
            </div>
            <div className="flex w-full mt-10 justify-around items-center">
              <div className=" w-[270px] h-[160px] overflow-hidden rounded-lg border border-blueDark relative items-center flex">
                <img
                  src={img || 'https://res.cloudinary.com/dozwd1ssj/image/upload/v1677157941/edit_lgdzbk.png'}
                  alt="card"
                  className=" w-[270px]"
                />
              </div>
              <div>
                <form
                  className="w-72 grid grid-flow-row md:w-[30rem]"
                  onSubmit={handleSubmit(customSubmit)}
                >
                  <div className="grid grid-flow-col grid-rows-2 gap-x-10">
                    <div>
                      <h5 className=" font-bold text-lg text-blueDark text-start">Name</h5>
                      <input
                        className={`border-2 ${
                          !errors.name ? 'border-blueDark' : 'border-red'
                        } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-white focus:outline-none text-lg`}
                        type="text"
                        autoComplete="off"
                        placeholder="Name"
                        {...register('name', {
                          required: true,
                        })}
                      />
                    </div>
                    <div>
                    <h5 className=" font-bold text-lg text-blueDark text-start">Address</h5>
                    <input
                      className={`border-2 ${
                        !errors.address ? 'border-blueDark' : 'border-red'
                      } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-white focus:outline-none text-lg`}
                      type="text"
                      autoComplete="off"
                      placeholder="Address"
                      {...register('address', {
                        required: true,
                      })}
                      />
                      </div>
                      <div>
                      <h5 className=" font-bold text-lg text-blueDark text-start">Floors</h5>
                    <input
                      className={`border-2 ${
                        !errors.floor ? 'border-blueDark' : 'border-red'
                      } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-white focus:outline-none text-lg`}
                      type="number"
                      autoComplete="off"
                      placeholder="Floors"
                      {...register('floor', {
                        required: true,
                        max: 100,
                        min: 1,
                      })}
                      />
                      </div>
                      <div>
                      <h5 className=" font-bold text-lg text-blueDark text-start">Units</h5>
                    <input
                      className={`border-2 ${
                        !errors.apt ? 'border-blueDark' : 'border-red'
                      } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-white focus:outline-none text-lg`}
                      type="number"
                      autoComplete="off"
                      placeholder="Units"
                      {...register('apt', {
                        required: true,
                        max: 1000,
                        min: 1,
                      })}
                      />
                      </div>
                  </div>
                  <h5 className=" font-bold text-lg text-blueDark text-start">Amenities</h5>
                  <Controller
                    control={control}
                    name="amenities"
                    rules={{ required: true }}
                    render={({ field: { value, name, onChange } }) => (
                      <Select
                        placeholder="Amenities"
                        className=" mx-auto"
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                          }),
                        }}
                        onChange={onChange}
                        options={state.amenitiesList}
                        isMulti={true}
                        value={value}
                        name={name}
                      />
                    )}
                  />
                  <button
                    disabled={!isDirty || !isValid || state.load}
                    className="w-[250px] mt-10 disabled:bg-gray-500 text-center text-white rounded-md px-10 py-3 bg-blueDark ml-auto"
                    type="submit"
                  >
                    {state.load ? <PulseLoader color="white" /> : 'Save changes'}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <button
            className=" mt-10 text-center text-white rounded-md px-10 py-3 bg-blueDark"
            onClick={handleDelete}
          >
            Delete Consortium
          </button>
        </Container>
      </section>
    </>
  )
}

export default EditConsortium
