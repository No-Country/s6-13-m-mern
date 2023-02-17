import { useForm, type SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import BlueModal from '../components/modal/BlueModal'
import { useNavigate } from 'react-router'

interface passValues {
  password: string
  password1: string
}

const ChangePass = () => {
  const navigate = useNavigate()

  const [state, setState] = useState(
    {
      firstPassVal: 'password',
      secondPassVal: 'password',
      firstPassImg: '../../public/assets/Eyeclose.svg',
      secondPassImg: '../../public/assets/Eyeclose.svg',
      openModal: false
    })

  const {
    register,
    getValues,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<passValues>({ mode: 'onTouched' })

  const handleCancel = () => {
    reset()
  }

  const togglePassword = () => {
    if (state.firstPassVal === 'password') {
      setState({ ...state, firstPassVal: 'text', firstPassImg: '../../public/assets/Eyeopen.svg' })
    } else {
      setState({ ...state, firstPassVal: 'password', firstPassImg: '../../public/assets/Eyeclose.svg' })
    }
  }
  const togglePassword1 = () => {
    if (state.secondPassVal === 'password') {
      setState({ ...state, secondPassVal: 'text', secondPassImg: '../../public/assets/Eyeopen.svg' })
    } else {
      setState({ ...state, secondPassVal: 'password', secondPassImg: '../../public/assets/Eyeclose.svg' })
    }
  }

  const handleCloseModal = () => {
    setState({ ...state, openModal: false })
    navigate('/login')
  }

  const dataSubmit: SubmitHandler<passValues> = (data: passValues) => {
    console.log(data)
    setState({ ...state, openModal: true })
  }
  return (
    <>
      {(errors.password?.type === 'required') && (
        <p className="absolute w-full top-28 md:top-24 pl-2 bg-red rounded-b-sm border border-black text-lg font-sans text-white">
          Complete all required fields
        </p>
      )}
      {(errors.password1?.type === 'required') && (
        <p className="absolute w-full top-28 md:top-24 pl-2 bg-red rounded-b-sm border border-black text-lg font-sans text-white">
          Complete all required fields
        </p>
      )}
      {errors.password1?.type === 'passwordEqual' && (
        <p className="absolute w-full top-28 md:top-24 pl-2 bg-red rounded-b-sm border border-black text-lg font-sans text-white">
          The password doesn&apos;t match
        </p>
      )}
      <div className='z-50 bg-blueDark'>
        <BlueModal isOpen={state.openModal}>
          <p>Your password has been changed! You can now login</p>
          <button className='bg-white py-2 px-4 text-blueDark rounded-md mt-8' onClick={() => { handleCloseModal() }}>OK!</button>
        </BlueModal>
      </div>
      <div className='grid place-items-center md:m-28 mb-32 mt-10'>
        <div className='grid grid-flow-row place-items-center gap-10'>
          <div className='grid grid-flow-row place-items-center gap-2 w-72'>
            <img src="../../public/assets/lockIco.svg" alt="" />
            <h1 className='text-blueDark font-extrabold'>Password Assistance</h1>
            <p className='text-start'>Please type in your new password <br /><span className='text-center'> Your password must have at least 8 characters and include 1 letter 1 number and 1 special character</span></p>
            <form onSubmit={handleSubmit(dataSubmit)}>
              <div className='relative'>
                {!state.openModal &&
                  <img onClick={() => { togglePassword() }} className='absolute top-[1.6rem] right-3 hover:cursor-pointer z-10' src={state.firstPassImg} alt="" />
                }
                <input
                  className={`border-2 ${!errors.password ? 'border-blueDark' : 'border-red'
                    } rounded-lg relative h-12 px-4 mt-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg`}
                  type={state.firstPassVal}
                  placeholder="Enter new password"
                  {...register('password', {
                    required: true,
                    pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                  })}
                />
              </div>
              <div className='relative'>
                {!state.openModal && <img onClick={() => { togglePassword1() }} className='absolute top-[0.6rem] right-3 hover:cursor-pointer z-10' src={state.secondPassImg} alt="" />
                }
                <input
                  className={`border-2 ${!errors.password1 ? 'border-blueDark' : 'border-red'
                    } rounded-lg h-12 px-4 mb-8 w-full placeholder:italic placeholder:text-grey bg-transparent focus:outline-none text-lg`}
                  type={state.secondPassVal}
                  placeholder="Re-enter your new password"
                  {...register('password1', {
                    required: true,
                    validate: {
                      passwordEqual: value => (value === getValues().password)
                    }
                  })}
                />
                <span></span>
              </div>
              <div className='grid grid-flow-col gap-3'>
                <button className='disabled:bg-gray-500 text-white text-center rounded-md px-4 py-3 bg-blueDark' disabled={!isDirty || !isValid} type="submit">Save Changes</button>
                <button className='disabled:bg-gray-500 text-center text-blueDark rounded-md px-10 py-3 bg-greylight border-2 border-blueDark' onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>)
}

export default ChangePass
