import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import PulseLoader from 'react-spinners/PulseLoader'
import BlueModal from '../components/modal/BlueModal'
import { resetPassService } from '../services/resetPassService'
import { useNavigate } from 'react-router'

interface emailValue {
  email: string
}

const ResetPass = () => {
  const [load, setLoad] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<emailValue>({ mode: 'onTouched' })
  const submitValues: SubmitHandler<emailValue> = async (data: emailValue) => {
    setLoad(true)
    setOpen(true)
    await resetPassService({ mail: data.email })
  }
  const handleModalClose = () => {
    navigate('/')
  }
  return (
    <>
      {(errors.email?.type === 'required') && (
        <p className="absolute w-full top-28 md:top-24 pl-2 bg-red rounded-b-sm border border-black text-lg font-sans text-white">
          Complete all required fields
        </p>
      )}
      {errors.email?.type === 'pattern' && (
        <p className="absolute w-full top-28 md:top-24 pl-2 bg-red rounded-b-sm border border-black text-lg font-sans text-white">
          It&apos;s not a valid e-mail
        </p>
      )}
      <BlueModal isOpen={open}>
        <p>If you have created an account you will be receiving an email shortly with a link to renew your password</p>
        <button className='bg-white text-blueDark rounded-md py-2 px-4 mt-6' onClick={() => { handleModalClose() }}>OK!</button>
      </BlueModal>
      <div className='grid place-items-center md:m-28 mb-32 mt-10'>
        <div className='grid grid-flow-row place-items-center gap-10'>
          <div className='grid grid-flow-row place-items-center gap-2 w-72'>
            <img src="../../public/assets/lockIco.svg" alt="" />
            <h1 className='text-blueDark font-extrabold'>Password Assistance</h1>
            <p className='text-start'>Enter the email address associated with your Consortia account.</p>
          </div>
          <form className='w-72' onSubmit={handleSubmit(submitValues)}>
            <input
              className={`border-2 ${!errors.email ? 'border-blueDark' : 'border-red'
                } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg`}
              type="email"
              autoComplete='off'
              placeholder="Enter your email"
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
              })}
            />
            <button disabled={!isDirty || !isValid || load} className='w-full disabled:bg-gray-500 text-center text-white rounded-md px-10 py-3 bg-blueDark' type="submit">
              {load ? <PulseLoader color='white' /> : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    </>)
}

export default ResetPass
