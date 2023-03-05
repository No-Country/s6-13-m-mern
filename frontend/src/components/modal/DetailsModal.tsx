import { formatDate } from '../../utils/dateUtils'

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  name: string | undefined
  lastname: string | undefined
  creationDate: string | undefined
  amount: string | undefined
  note: string | undefined
}

const DetailsModal = ({ setModal, name, lastname, creationDate, amount, note }: Props) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-blue bg-opacity-50 z-50">
      <div className="animate-slideInTop relative w-[560px] h-[347px] rounded-xl border-2 border-blueDark flex flex-col justify-center items-center bg-white">
        <div
          onClick={() => {
            setModal(false)
          }}
          className="absolute right-5 top-5 cursor-pointer"
        >
          <img src="https://res.cloudinary.com/dozwd1ssj/image/upload/v1677639798/close-outline_b6olmb.png" />
        </div>
        <div className="w-full h-full flex flex-col justify-between items-center px-10 py-16">
          <h4 className="font-bold text-blueDark">
            {name && lastname && creationDate ? `by ${name} ${lastname} (${formatDate(creationDate)})` : ''}
          </h4>
          <h4 className="italic font-bold">Cash - ${amount}</h4>
          <p className="w-full">
            <span className="font-bold pb-2 w-full">
              Note: <br />
            </span>
            {note}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DetailsModal
