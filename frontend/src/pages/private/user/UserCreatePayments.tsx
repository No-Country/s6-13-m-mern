import { useState } from 'react'
import DynamicStatusView from '../../../components/DynamicStatusView'
import UploadVoucher from '../../../components/payments/UploadVoucher'
import { PaymentMethodEnum } from '../../../enums/paymentMethods.enum'
import { PaymentData } from '../../../interfaces/paymentsInterfaces'
import { uploadImageService } from '../../../services/cloudinary/uploadImageService'
import createPaymentService from '../../../services/createPaymentService'
import { userStore } from '../../../store/user'
import { isValidAmountFormat } from '../../../utils/validationUtils'

interface Props {
  setCreate: React.Dispatch<React.SetStateAction<boolean>>
}

const UserCreatePayments = ({ setCreate }: Props) => {
  const user = userStore((state) => state.userData)
  const [file, setSelectedFile] = useState<null | File>(null)
  const [payment, setPayment] = useState({
    amount: '',
    note: '',
    paymentMethod: PaymentMethodEnum.Transfer,
    image: '',
  })
  const [isPaymentViewExit, setIsPaymentViewExit] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = target

    if (name === 'paymentMethod' && value === PaymentMethodEnum.Cash) {
      setPayment({ ...payment, paymentMethod: PaymentMethodEnum.Cash, image: '' })
      setSelectedFile(null)
      return
    }

    if (name === 'amount') {
      const isValidAmount = isValidAmountFormat(value)
      if (!isValidAmount) return
    }

    setPayment({ ...payment, [name]: value })
  }

  const setImage = (image: string) => {
    setPayment({ ...payment, image })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleLoading()

    try {
      let newPayment: PaymentData
      if (file === null) {
        newPayment = {
          note: payment.note,
          ammount: payment.amount,
          paymentMethod: payment.paymentMethod.toLowerCase(),
          image: '',
        }
      } else {
        const preset = process.env.VITE_APP_PRESET_VOUCHERS
        if (preset === undefined) {
          console.log('Preset vouchers is not defined.')
          return
        }
        const imageUploadResponse = await uploadImageService({ file, preset })
        newPayment = {
          note: payment.note,
          ammount: payment.amount,
          paymentMethod: payment.paymentMethod.toLowerCase(),
          image: imageUploadResponse.url,
        }
      }

      console.log('envio')

      await createPayment(newPayment)
    } catch (err) {
      handleError()
    }
  }

  const createPayment = async (newPayment: PaymentData): Promise<void> => {
    try {
      const resp = await createPaymentService(newPayment)
      if (!resp.ok) {
        handleError()
      } else {
        handleSuccess()
      }
    } catch (error) {
      console.log(error)
      handleError()
    }
  }

  const handleSuccess = () => {
    setLoading(false)
    setIsSuccess(true)
    setTimeout(() => {
      resetValues()
    }, 2000)
  }

  const handleLoading = () => {
    setIsPaymentViewExit(true)
    setTimeout(() => {
      setLoading(true)
    }, 400)
  }

  const handleError = () => {
    setLoading(false)
    setError(true)
    setTimeout(() => {
      resetValues()
    }, 3000)
  }

  const resetValues = () => {
    setPayment({ ...payment, amount: '', note: '', paymentMethod: PaymentMethodEnum.Transfer, image: '' })
    setSelectedFile(null)
    setIsSuccess(false)
    setError(false)
    setIsPaymentViewExit(false)
  }

  const isSubmitDisabled = () => {
    if (payment.paymentMethod === PaymentMethodEnum.Transfer) {
      if (payment.amount === '' || payment.note === '' || payment.image === '') return true
    }

    if (payment.paymentMethod === PaymentMethodEnum.Cash) {
      if (payment.amount === '' || payment.note === '') return true
    }

    return false
  }

  return (
    <div className="overflow-hidden h-[560px]">
      <DynamicStatusView
        loading={loading}
        loadingMessage={'Please wait while we save <br />your payment information...'}
        isSuccess={isSuccess}
        successMessage={'Success! Your payment <br />has been saved.'}
        error={error}
        errorMessage={'The payment could not be processed. <br />Please try again later.'}
      />

      <div className={isPaymentViewExit ? 'animate-slideOutLeft' : ''}>
        <div className="w-full pl-11 pt-11 pb-5">
          <div className="flex gap-x-6 text-blueDark font-bold text-xl items-center">
            <button
              className=""
              onClick={() => {
                setCreate(false)
              }}
            >
              <div className="fex flex-col w-[11.25px] h-[22.5px]">
                <img src={'../../assets/icons/left-arrow.svg'} />
              </div>
            </button>
            <h3>Attach payment</h3>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full pl-7 pr-16 mt-10"
        >
          <div className="flex flex-row justify-between w-full">
            <div className="w-[363px]">
              <div className="w-full h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-black font-normal border-2 border-black mb-7 bg-white">
                {user?.apt && !isNaN(parseInt(user?.apt))
                  ? `${parseInt(user?.apt)} | Prop.: ${user?.lastname ?? ''}`
                  : `Prop.: ${user?.lastname ?? ''}`}
              </div>
              <div className="relative w-full h-[40px] mb-7">
                {payment.amount !== '' && <span className="absolute left-2 top-2 font-bold">$</span>}
                <input
                  maxLength={10}
                  name={'amount'}
                  onChange={handleChange}
                  type={'text'}
                  placeholder={'Amount'}
                  value={payment.amount}
                  className="w-full h-[40px] rounded-lg px-5 pt-2 pb-2.5 placeholder:text-sm placeholder:text-grey placeholder:italic border-2 border-black"
                />
              </div>
              <textarea
                maxLength={255}
                name={'note'}
                onChange={handleChange}
                placeholder={'Note'}
                value={payment.note}
                className="w-full h-[83px] rounded-lg p-4 placeholder:text-sm placeholder:text-grey placeholder:italic border-2 border-black mb-7"
              />
            </div>
            <div className={'w-[364px] flex items-center pb-7'}>
              <div className={`flex flex-col w-full ${payment.image !== '' ? 'h-full justify-center' : 'gap-y-4'}`}>
                <select
                  onChange={(e) => {
                    handleChange(e)
                  }}
                  name={'paymentMethod'}
                  value={payment.paymentMethod}
                  className="w-full h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black"
                >
                  <option value={PaymentMethodEnum.Transfer}>Transfer</option>
                  <option value={PaymentMethodEnum.Cash}>Cash</option>
                </select>
                <div className="h-full text-sm flex justify-between items-center">
                  <div>Attach voucher</div>
                  <UploadVoucher
                    image={payment.image}
                    setImage={setImage}
                    setSelectedFile={setSelectedFile}
                    paymentMethod={payment.paymentMethod}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={'w-full flex justify-center mt-[68px]'}>
            <input
              disabled={isSubmitDisabled()}
              type={'submit'}
              className="text-lg text-white py-2 bg-blueDark disabled:opacity-40 disabled:border-0 rounded-lg border-2 border-black w-[363px]"
              value={'Report payment'}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserCreatePayments
