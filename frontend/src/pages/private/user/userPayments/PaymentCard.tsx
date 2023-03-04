import { UserPaymentsValues } from '../../../../interfaces/paymentsInterfaces'
import { formatMonthAndYear } from '../../../../utils/dateUtils'

interface Props {
  payment: UserPaymentsValues
  openDetailsModal: (payment: UserPaymentsValues) => void
}

const PaymentCard = ({ payment, openDetailsModal }: Props) => {
  return (
    <div
      key={payment._id}
      className={`h-[140px] 
  border-2 ${
    payment.pStatus === 'pending'
      ? 'border-[#f8d049]'
      : payment.pStatus === 'denied'
      ? 'border-red'
      : payment.pStatus === 'validated'
      ? 'border-greenLight'
      : ''
  }
  rounded-xl bg-white font-inter`}
    >
      {payment.paymentMethod === 'transfer' ? (
        <a
          key={payment._id}
          className={`h-full flex flex-col
                  items-center justify-between pt-4 pb-2`}
          href={payment.image}
          target="_blank"
          rel="noreferrer"
        >
          <h4 className="font-bold">{`VOUCHER - ${formatMonthAndYear(payment.creationDate)}`}</h4>
          <img
            src="../assets/Pdf.svg"
            className="w-[32px]"
          />
          <p>{payment.user.name}</p>
        </a>
      ) : (
        <div
          key={payment._id}
          className={`h-full flex flex-col
                  items-center justify-between pt-4 pb-2`}
        >
          <h4 className="font-bold">{formatMonthAndYear(payment.creationDate)}</h4>
          <h4 className="italic">Cash - ${payment.ammount}</h4>
          <button
            onClick={() => {
              openDetailsModal(payment)
            }}
            className="text-[#007bff] underline font-bold"
          >
            Detail
          </button>
        </div>
      )}
    </div>
  )
}

export default PaymentCard
