import { useEffect, useRef, useState } from 'react'
import ReactWhatsapp from 'react-whatsapp'

interface Props {
  setShow: (show: boolean) => void
}

const WhatsappDialog = ({ setShow }: Props) => {
  const WSAP_NUMBER = '54 9 11 2345 6789'

  const [message, setMessage] = useState('')
  const [isDirty, setIsDirty] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const messageInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setTimeout(() => {
      messageInputRef?.current?.focus()
    }, 1500)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
    setIsDirty(true)
    setIsValid(!!e.target.value)
  }

  return (
    <div className="w-[380px] h-[420px] fixed z-20 right-10 bottom-2 flex flex-col text-white animate-slideInBlurredBottom">
      <div className="flex flex-col justify-between h-[220px] w-full items-center bg-[#00BB2D] rounded-t-lg p-7">
        <button
          onClick={() => {
            setShow(false)
          }}
          className="absolute right-3 top-3"
        >
          <img
            src="../assets/icons/cross.svg"
            className="w-3"
          />
        </button>
        <img
          className="w-[50px]"
          src={'../assets/wsapp_logo.svg'}
        />
        <h4 className="font-bold text-lg">Customer service</h4>
        <p className="text-sm text-center">Do you need help? Chat with us on WhatsApp</p>
      </div>
      <div className="w-full h-[65px] bg-white rounded-b-lg px-4 flex flex-row justify-center items-center">
        <form className="w-full h-full flex items-center gap-x-4 animate-jelloHorizontal">
          <div className="h-[45px] w-full border-b-2">
            <input
              ref={messageInputRef}
              autoComplete="off"
              type={'text'}
              className="w-full h-[40px] bg-white placeholder:italic text-black animate-write delay-75 !outline-none"
              placeholder={'Write your query right here.'}
              name={'message'}
              maxLength={250}
              value={message}
              onChange={handleInputChange}
            />
          </div>
          <ReactWhatsapp
            element="webview"
            number={WSAP_NUMBER}
            message={message}
          >
            <button
              className="min-w-[100px] h-[45px] bg-blue rounded disabled:opacity-60"
              disabled={!isDirty || !isValid}
            >
              Send
            </button>
          </ReactWhatsapp>
        </form>
      </div>
      <div className="w-full h-[40px] ml-10">
        <div
          className="w-0 h-0
          border-l-[22px] border-l-transparent
          border-t-[22px] border-t-white
          border-r-[22px] border-r-transparent"
        ></div>
      </div>
      <div className="w-[110px] h-[110px] rounded-full bg-white flex justify-center items-center overflow-hidden border border-4 border-greenJungle -translate-y-3 ">
        <img
          src="https://res.cloudinary.com/dozwd1ssj/image/upload/v1676831060/telephone_advisor_dnbiv1.png"
          className="w-[95px] h-[95px]"
        />
      </div>
    </div>
  )
}

export default WhatsappDialog
