import { useEffect, useState } from 'react'
import DetailModal from '../../../components/DetailModal'
import { SearchBar } from '../../../components/SearchBar'
import { TitleComponents } from '../../../components/TitleComponents'
import getUserPaymentsService from '../../../services/getUserPaymentsService'
import { useAuthStore } from '../../../store/auth'
import { convertDate } from '../../../utils/dateUtils'
import UserCreatePayments from './UserCreatePayments'

interface UserData {
  _id: string
  name: string
  lastname: string
  email: string
  img: string
  phone: string
}

interface PaymentsValues {
  _id: string
  creationDate: string
  pStatus: string
  note: string
  user: UserData
  ammount: string
  paymentMethod: string
  image: string
  status: string
}

const UserDocuments = () => {
  const [create, setCreate] = useState(false)
  const [data, setData] = useState<PaymentsValues[]>([])
  const [loadingPayments, setLoadingPayments] = useState(false)
  const [errorGetPayments, setErrorGetPayments] = useState(false)
  const userId = useAuthStore((state) => state.id)
  const [modal, setModal] = useState(false)
  const [paymentDetail, setPaymentDetail] = useState<PaymentsValues>()
  const [isPaymentsChanged, setIsPaymentsChanged] = useState(false)

  useEffect(() => {
    setLoadingPayments(true)
    if (userId) {
      getPayments(userId)
    }
  }, [])

  useEffect(() => {
    if (isPaymentsChanged && userId) {
      console.log('Entró?')
      setIsPaymentsChanged(false)
      setCreate(false)
      setLoadingPayments(true)
      getPayments(userId)
    }
  }, [isPaymentsChanged])

  const getPayments = (id: string) => {
    if (id) {
      getUserPaymentsService(id)
        .then((response) => {
          if (!Array.isArray(data)) {
            setErrorGetPayments(true)
            console.log('ERROR: ', response)
            return
          }
          setData(response)
          setLoadingPayments(false)
        })
        .catch((error) => {
          console.log(error)
          setErrorGetPayments(true)
          setLoadingPayments(false)
        })
      setIsPaymentsChanged(false)
    }
  }

  const renderLoading = () => {
    return (
      <div className="flex justify-center h-[440px] items-center">
        <div
          className="w-full h-full flex
                            justify-center items-center"
        >
          <div
            className="animate-fadeInRight flex
                         flex-col items-center gap-y-3"
          >
            <span
              className="w-[108px] h-[108px] border-[10px]
                                 border-dotted border-blueDark
                                 rounded-full inline-block relative
                                 box-border animate-rotation"
            ></span>
            <div className="font-bold text-blueDark text-center">
              <p>Loading Payments...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderError = () => {
    return (
      <div className="flex justify-center h-[440px] items-center">
        <div
          className="w-full h-full flex
                            justify-center items-center"
        >
          <div
            className="animate-fadeInRight flex
                         flex-col items-center gap-y-3"
          >
            <img
              className="w-[108px] h-[108px]"
              src="https://res.cloudinary.com/dozwd1ssj/image/upload/v1677383270/cancelar_vw30xs.png"
            />
            <div className="font-bold text-blueDark text-center">
              <p>
                Error retrieving payment data from the API/server.
                <br /> Please check your internet connection or try again later.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const handleClickDetail = (payment: PaymentsValues) => {
    setPaymentDetail(payment)
    setModal(true)
  }

  const renderPayments = () => {
    return (
      <div>
        {modal && (
          <DetailModal
            setModal={setModal}
            name={paymentDetail?.user.name}
            lastname={paymentDetail?.user.lastname}
            creationDate={paymentDetail?.creationDate}
            amount={paymentDetail?.ammount}
            note={paymentDetail?.note}
          />
        )}
        <div className="-translate-y-5 w-full flex justify-center">
          <div className="w-full ml-[10%]">
            <SearchBar
              userType="user"
              searchIn="documents"
            />
          </div>
        </div>
        <div className="w-full px-11 mb-5 overflow-y-auto">
          <div
            className="w-full h-[340px]
                    grid grid-cols-[repeat(auto-fill,220px)]
                    gap-x-10 gap-y-8
                    justify-center
                    overflow-y-auto
                    scrollPayments
                    "
          >
            {!Array.isArray(data) || data.length === 0 ? (
              <h3>There are no results to show.</h3>
            ) : (
              data.map((document) =>
                document.paymentMethod === 'transfer' ? (
                  <a
                    key={document._id}
                    className="h-[140px] flex flex-col
                          items-center justify-between
                          border-2 border-black
                          rounded-xl bg-white
                          pt-4 pb-2 font-inter"
                    href={document.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h4 className="font-bold">{`VOUCHER - ${convertDate(document.creationDate)}`}</h4>
                    <img
                      src="../assets/Pdf.svg"
                      className="w-[32px]"
                    />
                    <p>{document.user.name}</p>
                  </a>
                ) : (
                  <div
                    key={document._id}
                    className="h-[140px] flex flex-col
                items-center justify-between
                border-2 border-black
                rounded-xl bg-white
                pt-4 pb-2 font-inter"
                  >
                    <h4 className="font-bold">{convertDate(document.creationDate)}</h4>
                    <h4 className="italic">Cash - ${document.ammount}</h4>
                    <button
                      onClick={() => {
                        handleClickDetail(document)
                      }}
                      className="text-[#007bff] underline font-bold"
                    >
                      Detail
                    </button>
                  </div>
                ),
              )
            )}
          </div>
        </div>
        <button
          onClick={() => {
            setCreate(true)
          }}
          className="bg-blueDark text-white
                          text-xl w-[360px] h-10
                          rounded-lg block mx-auto"
        >
          Create new payment
        </button>
      </div>
    )
  }

  return (
    <>
      {!create ? (
        <div className="relative">
          <TitleComponents title="Payments" />
          {loadingPayments && renderLoading()}
          {!loadingPayments && errorGetPayments && renderError()}
          {!loadingPayments && !errorGetPayments && renderPayments()}
        </div>
      ) : (
        <UserCreatePayments
          setCreate={setCreate}
          setIsPaymentsChanged={setIsPaymentsChanged}
        />
      )}
    </>
  )
}

export default UserDocuments
