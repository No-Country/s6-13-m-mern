import { useState } from 'react'
import BackTitleComponent from '../../../../components/BackTitleComponent'
import './payments.css'

enum MethodEnum {
  Transfer = 'Transfer',
  Cash = 'Cash',
}

interface Props {
  setCreate: React.Dispatch<React.SetStateAction<boolean>>
}

const UserCreatePayments = ({ setCreate }: Props) => {
  const [file, setSelectedFile] = useState<null | File>(null)
  const [image, setImage] = useState<null | string>(null)

  const [method, setMethod] = useState(MethodEnum.Transfer)

  const selectMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === MethodEnum.Transfer) setMethod(MethodEnum.Transfer)
    if (e.target.value === MethodEnum.Cash) {
      setMethod(MethodEnum.Cash)
      setSelectedFile(null)
      setImage(null)
    }
  }

  const reportPayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(file)
  }

  const renderUploader = () => {
    return (
      <div
        className="cursor-pointer"
        onClick={() => {
          ;(document.querySelector('.input-field') as HTMLInputElement).click()
        }}
      >
        {image && (
          <div
            className={'right-0 top-0 w-[230px] h-[150px] border-2 border-black bg-cover rounded-lg animate-swingInTop'}
            style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center center' }}
          ></div>
        )}

        {!image && (
          <div className="w-[180px] h-[40px] bg-[rgba(49,103,174,0.84)] rounded-lg px-6 flex justify-between items-center">
            <img src="../assets/Pdf.svg" />
            <span className="text-sm">Upload voucher</span>
          </div>
        )}

        <input
          className="input-field"
          type={'file'}
          accept={'image/*'}
          hidden
          onChange={(event) => {
            const files = event.target.files
            if (files?.[0]) {
              setSelectedFile(files[0])
              setImage(URL.createObjectURL(files[0]))
            }
          }}
        />
      </div>
    )
  }

  return (
    <div>
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
        onSubmit={reportPayment}
        className="w-full pl-7 pr-16 flex w-full justify-center"
      >
        <div
          className={`payment-grid ${
            method === MethodEnum.Transfer ? 'payment-transfer w-full' : 'payment-cash w-[363px]'
          }`}
        >
          <div className="payment-unity pb-7">
            <select className="w-full h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black">
              <option>Unity</option>
            </select>
          </div>
          <div className="payment-amount pb-7">
            <input
              type={'text'}
              placeholder={'Amount'}
              className="w-full h-[40px] rounded-lg px-4 pt-2 pb-2.5 placeholder:text-sm placeholder:text-grey placeholder:italic border-2 border-black"
            />
          </div>
          <div className="payment-note pb-7">
            <textarea
              placeholder={'Note'}
              className="w-full h-[83px] rounded-lg p-4 placeholder:text-sm placeholder:text-grey placeholder:italic border-2 border-black"
            />
          </div>
          <div className={`payment-method-voucher flex items-center ${image ? 'pb-0' : 'pb-7'}`}>
            <div className={`flex flex-col w-full ${image ? 'h-full justify-center' : 'gap-y-4'}`}>
              <select
                onChange={(e) => {
                  selectMethod(e)
                }}
                value={method}
                className="w-full h-[40px] rounded-lg px-4 pt-2 pb-2.5 text-sm text-grey italic font-normal border-2 border-black"
              >
                <option value="Transfer">Transfer</option>
                <option value="Cash">Cash</option>
              </select>
              {method === MethodEnum.Transfer && (
                <div className="h-full text-sm flex justify-between items-center">
                  <div>Attach voucher</div>
                  {renderUploader()}
                </div>
              )}
            </div>
          </div>
          <div
            className={`payment-button w-full flex justify-center ${
              method === MethodEnum.Transfer ? 'mt-[68px]' : 'mt-0'
            }`}
          >
            <input
              type={'submit'}
              className="text-lg text-white py-2 bg-blueDark rounded-lg border-2 border-black w-[363px]"
              value={'Report payment'}
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserCreatePayments
