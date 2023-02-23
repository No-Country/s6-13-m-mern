import Container from '../components/Container'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { EmailValues } from '../interfaces/emailIntefaces'
import emailService from '../services/emailService'

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<EmailValues>({ mode: 'onTouched' })

  const [loading, setLoading] = useState(false)
  const [isEmailSended, setIsEmailSended] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail: SubmitHandler<EmailValues> = async (data: EmailValues) => {
    setLoading(true)

    const resp = await emailService(data)
    if (!resp?.ok) {
      setLoading(false)
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 8000)
    } else {
      setLoading(false)
      setIsEmailSended(true)
      reset()
      setTimeout(() => {
        setIsEmailSended(false)
      }, 8000)
    }
  }

  return (
    <section className="bg-content bg-white w-full h-full">
      {isEmailSended && (
        <p
          id={'toast'}
          className="fixed w-full h-8 px-8 bg-greenLight rounded-b-sm border border-greenDark text-lg font-sans text-greenDark animate-slideInTop"
        >
          📩✔ The email has been sent successfully! We will get back to you as soon as possible!
        </p>
      )}
      {error && (
        <p
          id={'toast'}
          className="fixed w-full h-8 px-8 bg-red rounded-b-sm border border-black text-lg font-sans text-white animate-slideInTop"
        >
          📩❌ Failed to send email. Please try again later or contact customer support for further assistance.
        </p>
      )}
      <Container>
        <div className="w-full h-[750px] flex items-center">
          <div className="flex flex-row w-full justify-between">
            <div className="h-[564px] flex flex-col justify-between animate-fadeInLeft">
              <div>
                <h1 className="text-4.5xl font-bold text-blueDark">Contact</h1>
                <h2 className="text-2xl ml-9 py-2">Have a question? Send us a message</h2>
              </div>
              <form
                onSubmit={handleSubmit(sendEmail)}
                className="w-[508px] text-lg flex flex-col justify-between h-[410px]"
              >
                <div className="w-full flex flex-row justify-between gap-x-6">
                  <div className="relative w-full flex flex-col">
                    <input
                      {...register('name', { required: true })}
                      type={'text'}
                      className="p-3 w-full h-[54px] border-2 border-blueDark rounded-lg bg-white placeholder:italic"
                      placeholder={'Name'}
                      name={'name'}
                      maxLength={100}
                    />
                    {errors.name?.type === 'required' && (
                      <div className="absolute left-2 -bottom-6 text-sm text-red">Name is required</div>
                    )}
                  </div>

                  <div className="relative w-full flex flex-col">
                    <input
                      autoComplete="off"
                      {...register('email', {
                        required: true,
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      })}
                      type={'email'}
                      className="p-3 w-full h-[54px] border-2 border-blueDark rounded-lg bg-white placeholder:italic"
                      placeholder={'Email'}
                      name={'email'}
                      maxLength={255}
                    />
                    {errors.email?.type === 'required' && (
                      <div className="absolute left-2 -bottom-6 text-sm text-red">Email is required</div>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <div className="absolute left-2 -bottom-6 text-sm text-red">It&apos;s not a valid e-mail</div>
                    )}
                  </div>
                </div>

                <div className="relative w-full flex flex-col">
                  <input
                    {...register('subject', { required: true })}
                    type={'text'}
                    className="p-3 w-full h-[54px] border-2 border-blueDark rounded-lg bg-white placeholder:italic"
                    placeholder={'Subject'}
                    name={'subject'}
                    maxLength={255}
                  />
                  {errors.subject?.type === 'required' && (
                    <div className="absolute left-2 -bottom-6 text-sm text-red">Subject is required</div>
                  )}
                </div>

                <div className="relative w-full flex flex-col">
                  <textarea
                    {...register('message', { required: true })}
                    className="p-3 w-full h-[141px] border-2 border-blueDark rounded-lg bg-white placeholder:italic"
                    placeholder={'Message'}
                    name={'message'}
                    maxLength={500}
                  />
                  {errors.message?.type === 'required' && (
                    <div className="absolute left-2 -bottom-6 text-sm text-red">Message is required</div>
                  )}
                </div>

                <button
                  type={'submit'}
                  className="p-3 w-full h-[54px] rounded-lg bg-blueDark text-white disabled:opacity-60"
                  disabled={!isDirty || !isValid}
                >
                  {loading ? <PulseLoader color="white" /> : 'Send'}
                </button>
              </form>
            </div>
            <div className="w-[564px] h-[564px] bg-[#D9D9D9] rounded-lg overflow-hidden border-2 border-black animate-fadeInRight">
              <img
                src={'https://res.cloudinary.com/dozwd1ssj/image/upload/v1676392678/person-typing_rcvxpc.png'}
                className="w-full hover:animate-kenburnsRight"
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="h-[850px] bg-palePink">
        <Container>
          <div className="relative w-full h-[700px] px-10 pt-16">
            <div className="absolute top-8 right-2 w-[330px] h-[304px] rounded-lg border-2 border-black overflow-hidden">
              <img
                src={'https://res.cloudinary.com/dozwd1ssj/image/upload/v1676392872/faccade1_n7sxvd.png'}
                className="w-full hover:animate-kenburnsRight"
              />
            </div>
            <div className="absolute bottom-2 -right-6 w-[280px] h-[342px] rounded-lg border-2 border-black overflow-hidden">
              <img
                src={'https://res.cloudinary.com/dozwd1ssj/image/upload/v1676392957/faccade2_yziiel.png'}
                className="w-full hover:animate-kenburnsRight"
              />
            </div>
            <div className="box-border w-full h-[541px] border-[2.5px] border-grey rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.300203244893!2d-58.46197998417577!3d-34.57126976329002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d9ca1ded77%3A0xf196efb54eb631d0!2sCap.%20Gral.%20Ram%C3%B3n%20Freire%201609%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1675630330397!5m2!1ses!2sar"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default Contact
